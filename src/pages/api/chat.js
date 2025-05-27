import { CHAT_CONFIG } from '../../config.js';
import { isChatOnline } from '../../utils/chat.js';

export const prerender = false;

/**
 * API endpoint to handle chat messages
 */
export async function POST({ request }) {
  try {
    const data = await request.json();
    const { message, email, name } = data;
    
    // Check if chat is currently in online mode based on config
    const isOnline = isChatOnline();
    
    // Here you would typically send this message to your backend system,
    // save it to a database, or forward it via email
    console.log('Chat message received:', { message, email, name, isOnline });
    
    // In a production environment, you might want to:
    // 1. Store messages in a database
    // 2. Send notification emails to staff
    // 3. Connect to a third-party chat service API
    
    // If offline and email is provided, send email notification
    if (!isOnline && email && CHAT_CONFIG.notificationEmail) {
      // TODO: Implement email notification for offline messages
      console.log(`Would send offline notification to: ${CHAT_CONFIG.notificationEmail}`);
    }
    
    // Example response based on online/offline status
    const responseMessage = isOnline 
      ? CHAT_CONFIG.autoResponses.greeting 
      : CHAT_CONFIG.autoResponses.offline;
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message received successfully',
        response: responseMessage,
        isOnline: isOnline
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error handling chat message:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to process message',
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}