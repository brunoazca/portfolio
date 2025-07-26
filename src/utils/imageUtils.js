// Utility function to handle image paths for GitHub Pages
export const getImagePath = (imagePath) => {
  // If it's already a full URL (starts with http), return as is
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return imagePath;
  }
  
  // If it's a relative path starting with /, remove the leading slash
  if (imagePath && imagePath.startsWith('/')) {
    imagePath = imagePath.substring(1);
  }
  
  // For production (GitHub Pages), add the /portfolio/ prefix
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio/${imagePath}`;
  }
  
  // For development, just add the leading slash
  return `/${imagePath}`;
}; 