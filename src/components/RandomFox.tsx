"use client";
import { type } from "os";
import React, { useRef, useEffect, useState } from "react";
import type {ImgHTMLAttributes} from "react";



type LazyImage = {
  image: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = ImageNative & LazyImage;

//Hacerlo de manera explicita
export const LazyImage = ({ image, ...imageProps }: Props): JSX.Element => {
  const [src, setSrc] = useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    //Intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("vivo");
          setSrc(image);
        }
      });
    });
    //observer node
    // observer.observe(node.current!);
    if (node.current) {
      observer.observe(node.current);
    }
    //desconectar observer
    return () => {
      observer.disconnect();
    };
  }, [image]);

  const node = useRef<HTMLImageElement>(null);
  return (
    <>
      <img
        ref={node}
        src={src}
        alt="Random Fox"
        width={340}
        height="auto"
        className="rounded bg-gray-400"
        //onClick={()=> console.log("click")}
        {...imageProps}
      />
    </>
  );
};
