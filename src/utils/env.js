/**
 * Environment Variables Utility
 * 
 * This file provides a centralized way to access environment variables
 * throughout the application. It also handles fallbacks for variables
 * that might not be defined in all environments.
 */

// Cloudinary Configuration
export const cloudinary = {
  cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME || 'dbmundpjq',
  apiKey: import.meta.env.CLOUDINARY_API_KEY || '',
  apiSecret: import.meta.env.CLOUDINARY_API_SECRET || '',
  url: import.meta.env.CLOUDINARY_URL || ''
};

// Function to check if we're in production mode
export const isProduction = () => {
  return import.meta.env.PROD || false;
};

// Function to check if we're in development mode
export const isDevelopment = () => {
  return import.meta.env.DEV || false;
};

// Export all environment variables in a single object
export const env = {
  cloudinary,
  isProduction: isProduction(),
  isDevelopment: isDevelopment()
};

export default env;
