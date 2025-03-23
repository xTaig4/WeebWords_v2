"use client";

import { useState } from "react";
import React from "react";

const SubmitPage: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    undefined,
  );
  const [anime, setAnime] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [quote, setQuote] = useState<string>("");

  const PostQuote = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      quote: quote,
      image: previewUrl,
      anime: anime,
    };
    try { 
      const response = await fetch("https://localhost:7028/api/Quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Submission successful!");
        // Optionally, reset the form
        setAnime("");
        setFirstName("");
        setLastName("");
        setQuote("");
        setPreviewUrl(undefined);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setPreviewUrl(url); // Set the entered URL as the preview URL
  };

  const handDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];

      //Create a preview URL for images
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
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
          onDrop={handDrop}
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
              onChange={handleImageUrlChange}
            />
          )}
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center justify-center">
          <form className="flex flex-col gap-2 w-90" onSubmit={PostQuote}>
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
