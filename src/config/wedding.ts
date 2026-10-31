// Central wedding configuration — edit everything here.
import venuePhoto from "@/Venue.jpg";
import pOne from "@/file.jpeg";
import pTwo from "@/filq.JPG";
import pThree from "@/filr.jpeg";
import pFour from "@/filw.jpeg";
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
  city: "Kanpur",
  invitePhrase: "You're Invited",
  inviteLine:
    "Together with our families, we joyfully invite you to celebrate our wedding.",
  blessingsLine: "With the blessings of our families",
  quote: "Two hearts, two families, one beautiful beginning.",
  quoteSub: "Your presence is the only gift we ask for.",
  countdownDoneMessage: "Today, we celebrate love.",
  families: {
    bride: { title: "The Bride's Family", parents: "Chhaya Awasthi & Rajni Kant Awasthi", note: "Daughter of" },
    groom: { title: "The Groom's Family", parents: "Sarika Tripathi & Shri Padmesh Chandra Tripathi", note: "Son of" },
  },
  events: [
    { id: "haldi", name: "Haldi", date: "2026-11-23", start: "11:00 AM", end: "onwards", ...venue,
      description: "A joyous morning of turmeric, blessings and marigolds.", dressCode: "Yellow & pastels" },
    { id: "sangeet", name: "Sangeet", date: "2026-11-23", start: "8:00 PM", end: "onwards", ...venue,
      description: "An evening of song, dance and family performances.", dressCode: "Glittery & Indo-western" },
    { id: "tilak", name: "Tilak", date: "2026-11-24", start: "12:00 PM", end: "onwards", ...venue,
      description: "A traditional ceremony to welcome the groom's family with blessings.", dressCode: "Traditional Indian" },
    { id: "wedding", name: "Baraat & Wedding", date: "2026-11-24", start: "7:00 PM", end: "onwards", ...venue,
      description: "The baraat, the sacred pheras, and dinner under the stars.", dressCode: "Traditional Indian" },
  ] as WeddingEvent[],
  venues: [
    { name: venue.venue, city: "Kanpur", address: venue.address, mapsQuery: venue.mapsQuery,
      description: "Home to all our celebrations: Haldi, Sangeet, Tilak, Baraat and the Wedding.", image: venuePhoto },
  ],
  gallery: [
    { src: pOne, alt: "Rohit and Sunakshi together", w: 1200, h: 1600 },   // portrait
    { src: pThree, alt: "Rohit and Sunakshi together", w: 1600, h: 1200 }, // landscape
    { src: pFour, alt: "Rohit and Sunakshi together", w: 1200, h: 1600 },  // portrait
    { src: pTwo, alt: "Rohit and Sunakshi by the pool", w: 1600, h: 1200 }, // landscape
  ],
  shareMessage:
    "We're delighted to invite you to celebrate the wedding of Rohit & Sunakshi on 24 November 2026 in Kanpur. Please join us ❤️",
  musicSrc: pMusic, // background music: "Milan" (The Wedding Song) by Deepak Adhikari, plays via the floating music button
};

export const mapsUrl = (q: string) =>
  q.startsWith("https://") ? q : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
