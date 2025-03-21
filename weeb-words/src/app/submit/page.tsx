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

      console.log("has entered the function");
      // Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];
      setFile(droppedFile);

      console.log("has entered the function");
      //Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); //prevents the default behavior of the browser
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 p-5 md:grid-cols-2">
        {/* Left Column: Image */}
        <div
          className="flex flex-col items-center justify-center gap-5"
          onDrop={handDrop}
          onDragOver={handleDragOver}
        >
          <h3 className="text-center text-lg font-semibold">Image:</h3>
          {previewUrl ? (
            <img
            src={previewUrl}
            alt="preview"
            className="max-h-180 max-w-full rounded-4xl"
            />
          ) : (
            <input
              placeholder="Enter image URL or drag and drop image here..."
              type="text"
              className="w-full rounded-lg bg-white p-2 text-black"
              onChange={handleImageChange}
            />
          )}
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center justify-center">
          <form className="flex flex-col gap-2 w-90">
            <div className="flex flex-col">
              <label>Anime</label>
              <input
                type="text"
                placeholder="Enter anime..."
                className="rounded-lg bg-white p-2 text-black"
                style={{ background: "var(--input-bg)" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label>First name</label>
                <input
                  type="text"
                  placeholder="Enter first name..."
                  className="rounded-lg bg-white p-2 text-black"
                  style={{ background: "var(--input-bg)" }}
                />
              </div>
              <div className="flex flex-col">
                <label>Last name</label>
                <input
                  type="text"
                  placeholder="Enter last name..."
                  className="rounded-lg bg-white p-2 text-black"
                  style={{ background: "var(--input-bg)" }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Quote</label>
              <textarea
                placeholder="Enter quote..."
                className="rounded-lg bg-white p-2 text-black"
                style={{ background: "var(--input-bg)" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 p-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
