/**
 * Server-side Cloudinary API handler
 * 
 * This file contains server-side Cloudinary operations for the Devaramma Temple website.
 * It handles secure operations like signed uploads that require API secrets.
 */

import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY } from '../config';

// Initialize Cloudinary with configuration
cloudinary.config({
  cloud_name: CLOUDINARY.cloudName,
  api_key: CLOUDINARY.apiKey,
  api_secret: CLOUDINARY.apiSecret,
  secure: true
});

/**
 * Generate a signed upload URL for secure client-side uploads
 * @param {Object} options - Upload options
 * @returns {Object} - Signed upload credentials
 */
export async function getSignedUploadParams(options = {}) {
  const timestamp = Math.round((new Date).getTime() / 1000);
  
  const params = {
    timestamp,
    folder: options.folder || 'temple_uploads',
    tags: options.tags || ['temple_gallery'],
    ...options
  };
  
  const signature = cloudinary.utils.api_sign_request(params, CLOUDINARY.apiSecret);
  
  return {
    signature,
    timestamp,
    cloudName: CLOUDINARY.cloudName,
    apiKey: CLOUDINARY.apiKey,
    ...params
  };
}

/**
 * List images in Cloudinary with a specific tag
 * @param {string} tag - The tag to filter by
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} - Array of image resources
 */
export async function getImagesByTag(tag = 'temple_gallery', options = {}) {
  try {
    const result = await cloudinary.api.resources_by_tag(
      tag,
      {
        max_results: options.limit || 100,
        tags: true,
        context: true,
        ...options
      }
    );
    
    return result.resources;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return [];
  }
}

export default {
  getSignedUploadParams,
  getImagesByTag
};
