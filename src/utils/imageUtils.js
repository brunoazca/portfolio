// Utility function to handle image paths for GitHub Pages
export const getImagePath = (imagePath) => {
  // If it's already a full URL (starts with http), return as is
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return imagePath;
  }
  
  return imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

}; 