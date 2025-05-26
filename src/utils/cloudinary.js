/**
 * Cloudinary Utilities
 * 
 * This file provides helper functions for working with Cloudinary
 * for image and video management in the Devaramma Temple website.
 */

import { CLOUDINARY } from '../config';

// Configuration for client-side usage
export const cloudinaryConfig = {
  cloudName: CLOUDINARY.cloudName,
  apiKey: CLOUDINARY.apiKey,
};

/**
 * Generate a Cloudinary URL for an image
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Transformation options
 * @returns {string} - The optimized image URL
 */
export function getCloudinaryImageUrl(publicId, options = {}) {
  const {
    width = 800,
    height = 600,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
  } = options;
  
  return `https://res.cloudinary.com/${CLOUDINARY.cloudName}/image/upload/c_${crop},w_${width},h_${height},q_${quality},f_${format}/${publicId}`;
}

/**
 * Generate gallery widget configuration
 * @param {string} containerId - The ID of the container element
 * @param {Object} options - Additional widget options
 * @returns {Object} - Cloudinary Gallery Widget configuration
 */
export function getGalleryConfig(containerId, options = {}) {
  return {
    container: containerId,
    cloudName: CLOUDINARY.cloudName,
    mediaAssets: [
      { prefix: options.prefix || "devaramma/" }
    ],
    carouselStyle: options.carouselStyle || "indicators",
    displayProps: {
      mode: options.mode || "grid",
      columns: options.columns || 3
    },
    zoomProps: {
      trigger: "click"
    },
    imageBreakpoint: options.imageBreakpoint || 300,
    thumbnailProps: {
      width: options.thumbnailWidth || 300,
      height: options.thumbnailHeight || 225,
      crop: options.thumbnailCrop || "fill",
      gravity: "auto"
    }
  };
}

export default {
  config: cloudinaryConfig,
  getImageUrl: getCloudinaryImageUrl,
  getGalleryConfig
};
