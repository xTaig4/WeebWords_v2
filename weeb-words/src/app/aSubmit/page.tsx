"use client";

import { use, useState } from "react";
import React from "react";
import usePostQuote from "../Hooks/usePostQuote";

const SubmitPage: React.FC = () => {
  const {
    postQuoteToApi,
    imageUrl,
    setImageUrl,
    anime,
    setAnime,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    quote,
    setQuote,
  } = usePostQuote("https://localhost:7028/api/Quotes/submit");

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value); // Set the entered URL as the preview URL
  };

  const dragDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];

      //Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImageUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(droppedFile);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 p-5 md:grid-cols-2">
        {/* Left Column: Image */}
        <div
          className="flex flex-col items-center justify-center gap-5"
          onDrop={dragDrop}
        >
          <h3 className="text-center text-lg font-semibold">Image:</h3>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="preview"
              className="max-h-180 max-w-full rounded-4xl"
            />
          ) : (
            <input
              placeholder="Enter image URL or drag and drop image here..."
              type="text"
              className="w-full rounded-lg bg-white p-2 text-black"
              onChange={handleImageUrlChange}
            />
          )}
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center justify-center">
          <form className="flex flex-col gap-2 w-90" onSubmit={postQuoteToApi}>
            <div className="flex flex-col">
              <label>Anime</label>
              <input
                type="text"
                placeholder="Enter anime..."
                className="rounded-lg bg-white p-2 text-black"
                onChange={(e) => setAnime(e.target.value)}
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
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ background: "var(--input-bg)" }}
                />
              </div>
              <div className="flex flex-col">
                <label>Last name</label>
                <input
                  type="text"
                  placeholder="Enter last name..."
                  className="rounded-lg bg-white p-2 text-black"
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ background: "var(--input-bg)" }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Quote</label>
              <textarea
                placeholder="Enter quote..."
                className="rounded-lg bg-white p-2 text-black"
                onChange={(e) => setQuote(e.target.value)}
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
