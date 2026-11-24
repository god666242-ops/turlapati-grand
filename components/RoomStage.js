"use client";
// Large room photo with three thumbnails that switch it (as on the old Turlapati Grand page).
import { useState } from "react";
import Photo from "./Photo";

export default function RoomStage({ photos }) {
  const [i, setI] = useState(0);
  const cur = photos[i];
  return (
    <div>
      <Photo key={cur.src} src={cur.src} alt={cur.alt} priority={i === 0} sizes="(min-width: 900px) 700px, 90vw" className="aspect-[4/3] rounded-md" />
      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        {photos.map((p, n) => (
          <button
            key={p.src}
            type="button"
            aria-label={p.label}
            aria-current={n === i}
            onClick={() => setI(n)}
            className={`overflow-hidden rounded-md border-[3px] p-0 ${n === i ? "border-gold" : "border-transparent"}`}
          >
            <Photo src={p.src} alt={p.alt} sizes="(min-width: 900px) 230px, 30vw" className="aspect-[4/3]" />
          </button>
        ))}
      </div>
    </div>
  );
}
