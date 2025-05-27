# Chat Widget for Devaramma Temple Website

This document explains how the chat widget works and how to configure it.

## Overview

The chat widget provides a simple way for temple visitors to communicate with temple staff directly from the website. It supports both online and offline modes, saving chat messages to be retrieved later.

## Components

1. **ChatWidget.astro** - The main component that renders the chat UI
2. **chat.js** (utils) - Helper utilities for chat operations
3. **chat.js** (API endpoint) - Server endpoint to handle chat messages

## Configuration

All chat settings are in `src/config.js` under the `CHAT_CONFIG` object:

```javascript
export const CHAT_CONFIG = {
  // Enable or disable the chat widget across the site
  enabled: true,
  
  // Set hours when chat should be considered offline
  // Format: ['startHour-endHour'] (24-hour format)
  // Example: ['22-8'] means offline from 10PM to 8AM
  // Leave empty array for always online
  offlineHours: [], 
  
  // Email where notifications will be sent when offline
  notificationEmail: TEMPLE_INFO.email,
  
  // Automatic responses for different scenarios
  autoResponses: {
    greeting: "Thank you for messaging Devaramma Temple. How can we assist you today?",
    offline: "Our team is currently offline. Please leave your message and email, and we'll respond as soon as possible.",
    closing: "Is there anything else you would like to know about the temple or its services?"
  }
};
```

## Features

- **Online/Offline Status** - Shows if the staff is available based on configuration
- **Visitor Information** - Collects visitor name and email for follow-up
- **Local Storage** - Optionally saves chat history in the browser
- **Multilingual Support** - Works in English and Telugu

## API Integration

Currently, the API simply logs and acknowledges messages. To enable full functionality:

1. Create a database to store messages with visitor information
2. Implement email notification for offline messages
3. Create an admin panel to view and respond to messages

```javascript
// Example implementation with email notification (future enhancement)
import nodemailer from 'nodemailer';

// When receiving offline messages
if (!isOnline && email) {
  const transporter = nodemailer.createTransport({
    // Your SMTP settings
  });
  
  await transporter.sendMail({
    from: 'notifications@devaramma.org',
    to: CHAT_CONFIG.notificationEmail,
    subject: 'New Offline Message from Website',
    html: `
      <p>You received a new message from the website:</p>
      <p><strong>Name:</strong> ${name || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  });
}
```

1. Connect to a database to store messages
2. Set up email notifications when offline
3. Integrate with a chat service if needed

## Adding More Languages

To add a new language, update the translations object in `ChatWidget.astro`:

```javascript
const translations = {
  en: { ... },
  te: { ... },
  // Add new language here, for example:
  hi: {
    chatBtnLabel: "हमसे चैट करें",
    // ... other translations
  }
};
```

## Mobile Responsiveness

The widget is fully responsive and will display properly on all devices.

## Future Improvements

- Real-time chat with staff using WebSockets
- Chatbot integration for common questions
- File/image sharing capabilities
- Chat transcript email to visitors
