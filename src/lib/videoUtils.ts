// Utility function to extract thumbnail from video
export const extractVideoThumbnail = (videoFile: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    video.addEventListener('loadedmetadata', () => {
      // Set canvas dimensions to video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Seek to middle of video for thumbnail
      video.currentTime = video.duration / 2;
    });
    
    video.addEventListener('seeked', () => {
      if (ctx) {
        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to blob
        canvas.toBlob((blob) => {
          if (blob) {
            const thumbnailUrl = URL.createObjectURL(blob);
            resolve(thumbnailUrl);
          } else {
            reject(new Error('Failed to extract thumbnail'));
          }
        }, 'image/jpeg', 0.8);
      } else {
        reject(new Error('Canvas context not available'));
      }
    });
    
    video.addEventListener('error', () => {
      reject(new Error('Failed to load video'));
    });
    
    // Create object URL for video file
    const videoUrl = URL.createObjectURL(videoFile);
    video.src = videoUrl;
    video.load();
  });
};

// Convert blob to file for upload
export const blobToFile = (blob: Blob, fileName: string): File => {
  return new File([blob], fileName, { 
    type: blob.type,
    lastModified: Date.now()
  });
};