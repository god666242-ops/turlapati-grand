# Hotel Turlapati Grand
Next.js 14 website styled with Tailwind CSS (colours and fonts in `tailwind.config.js`, light/dark values in `app/globals.css`). Booking uses the PureBook `<hotel-booking-engine>` button (same setup as the YV Grand site).

- `npm install && npm run dev` then open http://localhost:3103
- Edit `site.js` only: slug (PureBook hotel slug), phone numbers, email, room, amenities, FAQ, nearby places, photos.
- Photos: originals live in `images-original/`. `python3 scripts/optimize-images.py` turns them into responsive WebP files in `public/images` (needs `pip install pillow`). To add a photo, drop it in `images-original/`, add a line to `MAP` in the script, re-run, then use its short name (e.g. "room-wide") in `site.js`.
- The hotel has one room type (Standard A/C Room); the room section shows it as a feature with three switchable photos.
- SEO: `app/layout.js` (title, description, Open Graph, canonical), `components/Seo.js` (Hotel + FAQPage JSON-LD), `app/sitemap.js`, `app/robots.js`.
- Everything marked TODO in `site.js` is a placeholder until the hotel confirms it (PureBook slug is still `turlapati-grand`).
- Set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying.
