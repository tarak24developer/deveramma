/**
 * Utils for the chat system
 */

import { CHAT_CONFIG } from '../config';

/**
 * Check if the chat should be in online mode based on current time and config
 * @returns {boolean} True if chat should be in online mode
 */
export function isChatOnline() {
  if (!CHAT_CONFIG.offlineHours || CHAT_CONFIG.offlineHours.length === 0) {
    return true;
  }

  const now = new Date();
  const currentHour = now.getHours();

  // Check if current hour falls within any offline hours range
  return !CHAT_CONFIG.offlineHours.some(range => {
    const [startHour, endHour] = range.split('-').map(Number);
    
    if (startHour < endHour) {
      // Simple range e.g., 22-8
      return currentHour >= startHour && currentHour < endHour;
    } else {
      // Overnight range e.g., 22-8
      return currentHour >= startHour || currentHour < endHour;
    }
  });
}

/**
 * Format a chat message for display
 * @param {string} message The message text
 * @param {string} type The message type ('user' or 'system')
 * @param {Date} timestamp The message timestamp
 * @returns {Object} Formatted message object
 */
export function formatChatMessage(message, type = 'user', timestamp = new Date()) {
  return {
    message,
    type,
    timestamp,
    formattedTime: `${timestamp.getHours()}:${String(timestamp.getMinutes()).padStart(2, '0')}`
  };
}

/**
 * Save chat transcript to local storage
 * @param {Array} messages Array of message objects
 */
export function saveChatHistory(messages) {
  try {
    localStorage.setItem('chat_history', JSON.stringify(messages));
  } catch (e) {
    console.error('Could not save chat history', e);
  }
}

/**
 * Get chat history from local storage
 * @returns {Array} Array of message objects or empty array if none found
 */
export function getChatHistory() {
  try {
    const history = localStorage.getItem('chat_history');
    return history ? JSON.parse(history) : [];
  } catch (e) {
    console.error('Could not get chat history', e);
    return [];
  }
}

/**
 * Clear chat history from local storage
 */
export function clearChatHistory() {
  try {
    localStorage.removeItem('chat_history');
  } catch (e) {
    console.error('Could not clear chat history', e);
  }
}
