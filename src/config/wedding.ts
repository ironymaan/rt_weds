// Central wedding configuration — edit everything here.
import venuePhoto from "@/Venue.jpg";
import photo1 from "@/file_1.JPG";
import photo2 from "@/file_2.jpeg";
import photo3 from "@/file_3.jpeg";
import photo4 from "@/file_4.JPG";
import photo5 from "@/file_5.JPG";
import photo6 from "@/file_6.jpeg";
import photo7 from "@/file_7.JPG";
import pMusic from "@/Milan_The_Wedding_Song_Deepak Adhikari.mp3";

export type WeddingEvent = {
  id: string;
  name: string;
  date: string; // ISO date YYYY-MM-DD
  start: string;
  end: string;
  venue: string;
  address: string;
  mapsQuery: string;
  description: string;
  dressCode: string;
};

const venue = {
  venue: "Hotel Imperial Grand",
  address: "Kanpur, Uttar Pradesh",
  mapsQuery: "https://maps.app.goo.gl/vwsanySvBnjJLABx9",
};

export const wedding = {
  bride: "Sunakshi",
  groom: "Rohit",
  // Ceremony start, India time
  dateTimeISO: "2026-11-24T19:00:00+05:30",
  dateLabel: "24 November 2026",
  rsvpBy: "14 November 2026", // last date shown above the RSVP form
  city: "Kanpur",
  invitePhrase: "You're Invited",
  inviteLine:
    "Together with our families, we joyfully invite you to celebrate our wedding.",
  blessingsLine: "With the blessings of our families",
  quote: "Two hearts, two families, one beautiful beginning.",
  quoteSub: "Your presence is the only gift we ask for.",
  countdownDoneMessage: "Today, we celebrate love.",
  families: {
    bride: { title: "The Bride's Family", parents: "Shri Rajni Kant Awasthi & Smt. Chhaya Awasthi", note: "Daughter of" },
    groom: { title: "The Groom's Family", parents: "Shri Padmesh Chandra Tripathi & Smt. Sarika Tripathi", note: "Son of" },
  },
  events: [
    { id: "haldi", name: "Haldi", date: "2026-11-23", start: "11:00 AM", end: "onwards", ...venue,
      description: "A joyous morning of turmeric, blessings and marigolds.", dressCode: "Yellow & pastels" },
    { id: "sangeet", name: "Sangeet", date: "2026-11-23", start: "8:00 PM", end: "onwards", ...venue,
      description: "An evening of song, dance and family performances.", dressCode: "Glittery & Indo-western" },
    { id: "tilak", name: "Tilak", date: "2026-11-24", start: "12:00 PM", end: "onwards", ...venue,
      description: "A traditional ceremony of tilak and blessings, marking the union of our two families.", dressCode: "Traditional Indian" },
    { id: "wedding", name: "Baraat & Wedding", date: "2026-11-24", start: "7:00 PM", end: "onwards", ...venue,
      description: "The baraat, the sacred pheras, and dinner under the stars.", dressCode: "Traditional Indian" },
  ] as WeddingEvent[],
  venues: [
    { name: venue.venue, city: "Kanpur", address: venue.address, mapsQuery: venue.mapsQuery,
      description: "Home to all our celebrations: Haldi, Sangeet, Tilak, Baraat and the Wedding.", image: venuePhoto },
  ],
  gallery: [
    { src: photo1, alt: "Rohit and Sunakshi together", w: 2400, h: 1600 }, // landscape
    { src: photo2, alt: "Rohit and Sunakshi together", w: 1600, h: 1278 }, // landscape
    { src: photo3, alt: "Rohit and Sunakshi together", w: 1066, h: 1600 }, // portrait
    { src: photo4, alt: "Rohit and Sunakshi together", w: 2400, h: 1600 }, // landscape
    { src: photo5, alt: "Rohit and Sunakshi together", w: 2400, h: 1600 }, // landscape
    { src: photo6, alt: "Rohit and Sunakshi together", w: 960, h: 1280 },  // portrait
    { src: photo7, alt: "Rohit and Sunakshi together", w: 2400, h: 1600 }, // landscape
  ],
  shareMessage:
    "We're delighted to invite you to celebrate the wedding of Rohit & Sunakshi on 24 November 2026 in Kanpur. Please join us ❤️",
  musicSrc: pMusic, // background music: "Milan" (The Wedding Song) by Deepak Adhikari, plays via the floating music button
};

export const mapsUrl = (q: string) =>
  q.startsWith("https://") ? q : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
