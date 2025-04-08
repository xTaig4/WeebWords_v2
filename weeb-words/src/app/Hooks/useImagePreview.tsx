import { useState } from "react";

const useImagePreview = () => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setPreviewUrl(url); // Update the preview URL
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];

      // Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(droppedFile);
    }
  };

  return { previewUrl, handleImageUrlChange, handleDrop, setPreviewUrl };
};

export default useImagePreview;
