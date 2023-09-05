"use client";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "@/components/RandomFox";

const randomNumber = (): number => Math.floor(Math.random() * 123);

//generea function simple unique id
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    },
  ]);

  const addImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault;
    const newImage: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };
    setImages([...images, newImage]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        <button onClick={addImage}>Add new fox</button>
        {images.map(({ id, url }) => (
          <div
            key={id}
            className="p-4"
          >
            <LazyImage image={url} onClick={()=> console.log("click")}/>
          </div>
        ))}
      </div>
    </main>
  );
}
