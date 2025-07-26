// Utility function to handle image paths for GitHub Pages
export const getImagePath = (imagePath) => {
  // If it's already a full URL (starts with http), return as is
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return imagePath;
  }
  
  // If it's a relative path, add the correct base path for production
  if (imagePath && imagePath.startsWith('/')) {
    return process.env.NODE_ENV === 'production' ? `/portfolio${imagePath}` : imagePath;
  }
  
  // If it's just a filename, add the correct path
  if (imagePath && !imagePath.startsWith('/')) {
    return process.env.NODE_ENV === 'production' ? `/portfolio/${imagePath}` : `/${imagePath}`;
  }
  
  return imagePath;
}; 