export const SITE = {
  name: 'Devaramma Temple',
  title: 'Devaramma Temple - A Sacred Place for Devotion',
  description: 'Welcome to Devaramma Temple, a sacred place for devotion and spiritual enlightenment.',
  url: 'https://devaramma.org',
  googleAnalyticsId: '', // Add your Google Analytics ID here if needed
  author: 'Devaramma Temple Trust'
};

export const OPEN_GRAPH = {
  image: {
    src: '/images/temple/temple-front.png',
    alt: 'Devaramma Temple Front View'
  }
};

export const TEMPLE_INFO = {  
  address: 'Meruga Vari Devaramma Veedhi, Mantada, Krishna District, Andhra Pradesh - 521256',
  phone: '+91 XXXXXXXXXX, +91 XXXXXXXXXX', // Phone numbers obfuscated for security
  email: 'contact@devaramma.org',  
  timings: {
    daily: '6:00 AM - 12:00 PM'
  }
};

export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/deveramma_thalli/',
  youtube: 'https://www.youtube.com/channel/UC43iq7052FIAIMNdS30tN1Q?sub_confirmation=1'
};

export const CLOUDINARY = {
  cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME || 'dbmundpjq',
  apiKey: import.meta.env.CLOUDINARY_API_KEY || '791481969867835',
  apiSecret: import.meta.env.CLOUDINARY_API_SECRET || '',
  url: import.meta.env.CLOUDINARY_URL || 'cloudinary://791481969867835:v3XoT3egYkEyy5t0mmmh42FtdmU@dbmundpjq'
};

export const CHAT_CONFIG = {
  enabled: true,
  offlineHours: [], // Example: ['22-8'] means offline from 10PM to 8AM
  notificationEmail: TEMPLE_INFO.email,
  autoResponses: {
    greeting: "Thank you for messaging Devaramma Temple. How can we assist you today?",
    offline: "Our team is currently offline. Please leave your message and email, and we'll respond as soon as possible.",
    closing: "Is there anything else you would like to know about the temple or its services?"
  }
};