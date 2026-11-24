// Edit this file only. Everything on the page comes from here.
// Items marked TODO are placeholders until the hotel confirms the details.
export const hotel = {
  slug: "turlapati-grand", // TODO: replace with the hotel's real PureBook slug (used by the booking button)
  name: "Turlapati Grand",
  full: "Hotel Turlapati Grand A/c",
  heading: "Hotel Turlapati Grand",
  te: "తుర్లపాటి గ్రాండ్",
  street: "#41-1/1-80, Feedor Road (opp. Bandaru Lakulu)",
  locality: "Krishna Lanka",
  city: "Vijayawada",
  region: "Andhra Pradesh",
  pin: "520013",
  short: "Feedor Road, Krishna Lanka, Vijayawada 520013",
  address: "#41-1/1-80, Feedor Road (opp. Bandaru Lakulu), Krishna Lanka, Vijayawada, Andhra Pradesh 520013",
  phones: [
    { show: "93812 37595", tel: "+919381237595" },
    { show: "98664 82179", tel: "+919866482179" },
    { show: "93900 27265", tel: "+919390027265" },
  ],
  email: "", // TODO
  // The embedded map and the Get directions link point at the hotel next door (YV Grand), as on the old site.
  mapQuery: "YV Grand The Luxury Hotel Krishnalanka Vijayawada 520013",
  mapNote: "We are right next door to YV Grand The Luxury Hotel, which is the pin on the map.",
  // Used only in the Google structured data (hasMap)
  listingQuery: "Hotel Turlapati Grand Feedor Road Krishna Lanka Vijayawada 520013",
  lat: null, // TODO
  lng: null, // TODO
};

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),
  title: "Hotel Turlapati Grand | A/C rooms in Krishna Lanka, Vijayawada",
  description:
    "Hotel Turlapati Grand, Feedor Road, Krishna Lanka, Vijayawada. Standard A/C rooms with free Wi-Fi, colour TV, attached bathroom and 24-hour room service.",
  embed: { primary: "#f0a42b", theme: "light", label: "Reserve" },
  tagline: "Standard A/C rooms in Krishna Lanka, Vijayawada",
  lead: "A clean, quiet room with a double bed, colour TV and attached bathroom. Reception is open around the clock.",
  // One room type. img names come from scripts/optimize-images.py, e.g. "room-wide" -> /images/room-wide-*.webp
  room: {
    name: "Standard A/C Room",
    desc: "Our only room type. A double bed with fresh white linen, a wall-mounted TV, a wardrobe, a table with two chairs and a bathroom of its own.",
    perks: [
      ["Bed", "Double"],
      ["Cooling", "Split A/C and ceiling fan"],
      ["Bathroom", "Attached"],
      ["Television", "Colour TV"],
      ["Internet", "Free Wi-Fi"],
    ],
    // First one shows large; the thumbnails switch it.
    photos: [
      { src: "room-wide", alt: "Wide view of the Standard A/C Room with TV and bathroom", label: "Show wide view of the room" },
      { src: "room-bed", alt: "Double bed with maroon blanket under the ceiling fan", label: "Show the double bed" },
      { src: "bathroom", alt: "Attached bathroom with western toilet", label: "Show attached bathroom" },
    ],
  },
  amenities: [
    ["Air conditioning", "A split A/C in every room."],
    ["Free Wi-Fi", "No charge, no login fuss."],
    ["Colour TV", "Wall-mounted, with a table and chairs."],
    ["Attached bathroom", "Private, tiled and kept clean."],
    ["24-hour room service", "Ask the front desk, day or night."],
    ["Wardrobe", "Hanging space and a mirror."],
  ],
  // Photos are names from scripts/optimize-images.py
  heroImg: "room-ac-wardrobe",
  heroAlt: "Standard A/C Room with double bed, wardrobe and air conditioner",
  gallery: [
    { src: "room-corner", alt: "Bed and bathroom door in the Standard A/C Room" },
    { src: "corridor", alt: "Tiled corridor leading to the rooms" },
    { src: "room-pillows", alt: "Double bed with three pillows" },
    { src: "room-fan", alt: "Corner view of the bed under the ceiling fan" },
    { src: "reception", alt: "Front desk and staircase at reception" },
    { src: "room-blanket", alt: "Bed with maroon blanket, close view" },
  ],
  ogImg: "/images/room-ac-wardrobe-1100.webp",
  ogSize: [1100, 825],
  // TODO: [["Prakasam Barrage", "2 km", "Sightseeing"], ...]. The section is hidden while empty.
  nearby: [],
  faq: [
    ["How do I book?", "Press Reserve, choose your dates and complete the booking in the window that opens."],
    ["What are the room types?", "The hotel has one room type, the Standard A/C Room, with a double bed, split A/C, colour TV and an attached bathroom. Live rates show in the booking window."],
    ["Where is the hotel?", "On Feedor Road (opposite Bandaru Lakulu) in Krishna Lanka, Vijayawada, Andhra Pradesh 520013, right next door to YV Grand The Luxury Hotel."],
    ["Is Wi-Fi free?", "Yes. Free Wi-Fi is included with every stay."],
    ["Is the front desk open at night?", "Yes. Reception is open around the clock, and room service can be asked for day or night."],
    ["Can I book by phone?", "Yes. Call 93812 37595, 98664 82179 or 93900 27265."],
  ],
};
