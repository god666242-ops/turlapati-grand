"use client";
// Photo grid; a photo opens large in a dialog (Esc, Close or a click outside closes it).
import { useRef, useState } from "react";
import Photo, { imgFallback, imgSrcSet } from "./Photo";

export default function Gallery({ items }) {
  const ref = useRef(null);
  const [cur, setCur] = useState(null);
  const open = (g) => {
    setCur(g);
    ref.current?.showModal();
  };
  return (
    <>
      <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((g) => (
          <button key={g.src} type="button" aria-label={`Enlarge photo: ${g.alt}`} onClick={() => open(g)} className="group cursor-zoom-in overflow-hidden rounded-md bg-line p-0">
            <Photo
              src={g.src}
              alt={g.alt}
              pos="50% 25%"
              sizes="(min-width: 900px) 370px, 45vw"
              className="aspect-[4/3] [&_img]:transition-transform [&_img]:duration-[400ms] group-hover:[&_img]:scale-[1.04]"
            />
          </button>
        ))}
      </div>
      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && ref.current.close()}
        className="w-[min(1000px,calc(100%-20px))] border-0 bg-transparent p-0 backdrop:bg-[rgba(8,20,15,0.7)]"
      >
        <button type="button" onClick={() => ref.current.close()} className="mb-2 ml-auto block text-[15px] text-white underline">
          Close
        </button>
        {cur && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgFallback(cur.src)} srcSet={imgSrcSet(cur.src)} sizes="100vw" alt={cur.alt} className="max-h-[86vh] w-full rounded-md object-contain" />
        )}
      </dialog>
    </>
  );
}
