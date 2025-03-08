"use client";

import React from "react";

const SubmitPage: React.FC = () => {
  const [previewUrl, setPreviewUrl] = React.useState<string | undefined>(
    undefined,
  );
  const [file, setFile] = React.useState<File | undefined>(undefined);

  //handles an event change on the input element
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="ml-130">
      <div className="flex min-h-screen flex-wrap">
        <div className="grid w-full grid-cols-1 items-center justify-center md:h-auto md:w-3/4 md:grid-cols-2">
          <div className="order-1 flex w-full flex-col gap-5 md:order-1 md:w-3/4">
            <h3>Image:</h3>
            {file?.type.startsWith("image/") ? (
              <img
                src={previewUrl}
                alt="preview"
                className="h-160 rounded-4xl"
              ></img>
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            )}
          </div>
          <div className="order-2 flex">
            <form>
              <div className="flex flex-col">
                <label>Anime</label>
                <input
                  type="text"
                  placeholder="Enter anime. . ."
                  className="rounded-lg bg-pink-400 text-black"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="order-1 flex flex-col">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="Enter first name. . ."
                    className="rounded-lg bg-pink-400 text-black"
                  />
                </div>
                <div className="order-2 flex flex-col">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Enter last name. . ."
                    className="rounded-lg bg-pink-400 text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label>Quote</label>
                <textarea
                  placeholder="Enter quote. . ."
                  className="rounded-lg border-0 bg-pink-400 text-black"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
