import { hotel as h, site as s } from "../site";
import Widget from "../components/Widget";
import Photo from "../components/Photo";
import Faq from "../components/Faq";
import RoomStage from "../components/RoomStage";
import Gallery from "../components/Gallery";

const phone = h.phones[0];
const nav = [
  ["The room", "room"],
  ["Amenities", "amenities"],
  ["Gallery", "gallery"],
  ...(s.nearby.length ? [["Nearby", "nearby"]] : []),
  ["FAQ", "faq"],
  ["Find us", "find"],
];

/* Shared style tokens */
const WRAP = "mx-auto max-w-[1160px] px-[22px] py-[84px]";
const H2 = "font-fd text-[clamp(30px,4.4vw,48px)] leading-[1.08] tracking-[-0.01em]";
const BTN_GHOST =
  "inline-flex items-center gap-2.5 rounded-full border-2 border-current px-[30px] py-[13px] text-[17px] font-bold no-underline transition duration-150 hover:-translate-y-0.5";
const SOFT = "text-[#cfd6cd]";

export default function Page() {
  return (
    <>
      {/* Header (the fixed strip fills the phone's top safe area) */}
      <header className="sticky top-0 z-20 bg-forest text-on" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        <div aria-hidden="true" className="fixed inset-x-0 top-0 z-30 bg-forest" style={{ height: "env(safe-area-inset-top, 0px)" }} />
        <div className="mx-auto flex max-w-[1160px] items-center gap-[22px] px-[22px] py-3">
          <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap font-fd text-[21px] no-underline">
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 2l12 7v14l-12 7-12-7V9z" fill="none" stroke="#f0a42b" strokeWidth="2" />
              <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#f4efe3" style={{ fontFamily: "var(--fd), Georgia, serif" }}>
                TP
              </text>
            </svg>
            {h.name}
          </a>
          <nav aria-label="Sections" className="ml-auto flex gap-6 overflow-x-auto whitespace-nowrap text-[15.5px]">
            {nav.map(([t, id]) => (
              <a key={id} href={"#" + id} className="no-underline opacity-[.85] hover:text-gold hover:opacity-100">
                {t}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-forest text-on">
          <div aria-hidden="true" className="absolute inset-0 bg-diamonds opacity-[0.09] [background-size:72px_72px]" />
          <div className="relative mx-auto grid max-w-[1160px] items-center gap-12 px-[22px] pb-[90px] pt-[70px] md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p lang="te" className="mb-3.5 font-te text-[20px] font-semibold text-gold">
                {h.te}
              </p>
              <h1 className="text-[clamp(52px,9vw,112px)] tracking-[-0.02em]">
                {h.heading}
                <small className="mt-[18px] block font-fb text-[clamp(20px,2.6vw,28px)] leading-[1.3] tracking-normal text-[#d8d2c0]">{s.tagline}</small>
              </h1>
              <p className="mb-8 mt-[22px] max-w-[44ch] text-[19px] text-[#d8d2c0]">{s.lead}</p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Widget />
                {phone && (
                  <a className={BTN_GHOST} href={`tel:${phone.tel}`}>
                    Call {phone.show}
                  </a>
                )}
              </div>
            </div>
            <div className="relative w-full max-w-[540px] justify-self-center motion-safe:animate-fadeup [animation-delay:.15s]">
              <div aria-hidden="true" className="absolute rounded border-[3px] border-gold" style={{ inset: "18px -18px -18px 18px" }} />
              <Photo src={s.heroImg} alt={s.heroAlt} priority sizes="(min-width: 900px) 540px, 90vw" className="aspect-[5/4] rounded" />
            </div>
          </div>
        </section>

        {/* The room: one room type */}
        <section id="room">
          <div className={WRAP}>
            <h2 className={H2}>One room, done well</h2>
            <div className="mt-10 grid items-start gap-11 md:grid-cols-[1.25fr_0.75fr]">
              <RoomStage photos={s.room.photos} />
              <div>
                <h3 className="font-fd text-[clamp(28px,3.4vw,38px)]">{s.room.name}</h3>
                <p className="mt-3.5 text-mut">{s.room.desc}</p>
                <ul className="mb-[30px] mt-[22px] border-t border-line">
                  {s.room.perks.map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-3 border-b border-line py-3">
                      <b className="font-medium">{k}</b>
                      <span className="text-mut">{v}</span>
                    </li>
                  ))}
                </ul>
                <Widget />
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-forest2 text-on" id="amenities">
          <div className={WRAP}>
            <h2 className={H2}>What every stay includes</h2>
            <ul className="mt-10 grid gap-x-9 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
              {s.amenities.map(([t, d]) => (
                <li key={t} className="border-t-2 border-gold pb-7 pt-5">
                  <b className="mb-1 block font-fd text-[22px] font-normal">{t}</b>
                  <span className={`text-base ${SOFT}`}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery">
          <div className={WRAP}>
            <h2 className={H2}>Take a look inside</h2>
            <Gallery items={s.gallery} />
          </div>
        </section>

        {/* Nearby (hidden until places are added in site.js) */}
        {s.nearby.length > 0 && (
          <section className="bg-card" id="nearby">
            <div className={WRAP}>
              <h2 className={H2}>Around {h.locality}</h2>
              <p className="mt-3.5 text-mut">Distances from the hotel.</p>
              <ul className="mt-9 grid gap-x-12 md:grid-cols-2">
                {s.nearby.map(([place, dist, type]) => (
                  <li key={place} className="flex items-center justify-between gap-4 border-t border-line py-4">
                    <span>
                      <b className="block">{place}</b>
                      <small className="text-mut">{type}</small>
                    </span>
                    <em className="whitespace-nowrap font-fd text-[22px] not-italic text-maroon">{dist}</em>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq">
          <div className={`${WRAP} max-w-[820px] !pt-0`}>
            <h2 className={`${H2} mb-9`}>Questions guests ask</h2>
            <Faq items={s.faq} />
          </div>
        </section>

        {/* Find us */}
        <section className="bg-forest2 text-on" id="find">
          <div className={`${WRAP} grid gap-11 md:grid-cols-[0.8fr_1.2fr]`}>
            <div>
              <h2 className={H2}>Find us</h2>
              <address className="my-[18px] max-w-[34ch] not-italic">
                <b>{h.full}</b>
                <br />
                {h.street},<br />
                {h.locality}, {h.city}, {h.region} {h.pin}
              </address>
              <div className="mb-6 grid gap-2">
                {h.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="text-[22px] font-bold no-underline hover:text-gold">
                    {p.show}
                  </a>
                ))}
                {h.email && (
                  <a href={`mailto:${h.email}`} className="underline underline-offset-4">
                    {h.email}
                  </a>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3.5">
                <Widget />
                <a
                  className={BTN_GHOST}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapQuery)}`}
                >
                  Get directions
                </a>
              </div>
              {h.mapNote && <p className={`mt-2.5 text-[15px] ${SOFT}`}>{h.mapNote}</p>}
            </div>
            <div className="relative grid min-h-[380px] place-items-center overflow-hidden rounded-md border border-line bg-card p-5 text-center text-mut">
              <span>
                Map loads here.
                <br />
                If it doesn’t, use Get directions.
              </span>
              <iframe
                title={`Map showing the hotel next door, YV Grand, in ${h.locality}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(h.mapQuery)}&output=embed`}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={`bg-forest ${SOFT}`}>
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 px-[22px] py-10">
          <div>
            <b className="font-fd text-[22px] font-normal text-white">{h.full}</b>
            <br />
            {h.short}
            <br />
            <small>© {new Date().getFullYear()} {h.full}</small>
          </div>
          {phone && (
            <a href={`tel:${phone.tel}`} className="hover:text-white">
              Call {phone.show}
            </a>
          )}
        </div>
      </footer>
    </>
  );
}
