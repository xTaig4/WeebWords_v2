"use client";

import React from "react";
import Tag from "./tag";

interface SearchBarProps {
  left?: string;
  width?: string;
  height?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ left, width, height }) => {
  const [tags, setTags] = React.useState<string[]>(["Naruto", "myheroacademy"]);
  const [input, setInput] = React.useState<string>("");
  const addTag = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    if (!tags.includes(value)) setTags((prev) => [...prev, value]);
    setInput("");
  };
  const removeTag = (index: number) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`justify-startfixed top-0 right-0 flex items-center left-${left} w-${width} h-15 border-b-1 border-amber-200`}
      style={{ background: "var(--background)" }}
    >
      <form className="ml-28 flex flex-row gap-2 sm:ml-4 md:ml-8">
        <input
          type="text"
          value={input}
          placeholder="  tag..."
          className="w-4/10 rounded-lg text-black"
          style={{ background: "var(--input-bg)" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTag}
          className="w-15 rounded-lg border-1 border-amber-200 text-amber-200"
        >
          enter
        </button>
      </form>
      <div className="ml-30 flex gap-2">
        {tags.map((tag, index) => (
          <button key={index} onClick={() => removeTag(index)}>
            <Tag text={tag} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
