 const events = [
  {
    id: 1,
    name: "Techember Fest '25",
    description: "Join us for an unforgettable experience at Techember Fest!",
    location: "Lagos, Nigeria",
    date: "March 15, 2025",
    time: "7:00 PM",
    tickets: [
      { type: "Regular", price: "Free", remaining: "20/52" },
      { type: "VIP", price: "$150", remaining: "20/52" },
      { type: "VVIP", price: "$300", remaining: "15/52" }
    ]
  },
  {
    id: 2,
    name: "Code Camp 2025",
    description: "A full day of coding workshops and networking.",
    location: "Abuja, Nigeria",
    date: "April 20, 2025",
    time: "10:00 AM",
    tickets: [
      { type: "Standard", price: "$50", remaining: "35/100" },
      { type: "Premium", price: "$120", remaining: "10/100" }
    ]
  },
  {
    id: 3,
    name: "Lagos Fashion Week",
    description: "Showcasing African fashion designers and trends to the world.",
    location: "Eko Atlantic City, Lagos",
    date: "October 18, 2025",
    time: "4:00 PM",
    tickets: [
      { type: "Regular", price: "$80", remaining: "200/2000" },
      { type: "VIP", price: "$200", remaining: "50/500" }
    ]
  },
  {
    id: 4,
    name: "Comedy Night Live",
    description: "An evening of non-stop laughter with top comedians across Africa.",
    location: "National Theatre, Lagos",
    date: "October 25, 2025",
    time: "7:00 PM",
    tickets: [
      { type: "Regular", price: "$25", remaining: "500/1500" },
      { type: "VIP", price: "$70", remaining: "150/300" }
    ]
  },
  {
    id: 5,
    name: "Book & Arts Festival",
    description: "A cultural celebration of literature, arts, and creativity featuring authors and artists.",
    location: "Freedom Park, Lagos",
    date: "November 15, 2025",
    time: "9:00 AM",
    tickets: [
      { type: "General", price: "$15", remaining: "800/2000" },
      { type: "VIP", price: "$50", remaining: "100/300" }
    ]
  },
  {
    id: 6,
    name: "Afrobeat Music Carnival",
    description: "Experience electrifying performances from Africa’s biggest music stars.",
    location: "Teslim Balogun Stadium, Lagos",
    date: "December 20, 2025",
    time: "6:00 PM",
    tickets: [
      { type: "Regular", price: "$30", remaining: "300/3000" },
      { type: "VIP", price: "$100", remaining: "100/500" }
    ]
  },
  {
    id: 7,
    name: "Startup Pitch Night",
    description: "Innovators pitch groundbreaking ideas to investors and mentors.",
    location: "Civic Centre, Victoria Island",
    date: "February 5, 2026",
    time: "3:00 PM",
    tickets: [
      { type: "General", price: "$10", remaining: "120/500" },
      { type: "Investor", price: "$100", remaining: "20/50" }
    ]
  },
  {
    id: 8,
    name: "Tech Innovators Summit",
    description: "Where Africa’s brightest minds in tech meet.",
    location: "Abuja International Conference Centre",
    date: "March 12, 2026",
    time: "9:00 AM",
    tickets: [
      { type: "Standard", price: "$40", remaining: "200/700" },
      { type: "Premium", price: "$90", remaining: "50/150" }
    ]
  },
  {
    id: 9,
    name: "Food & Drinks Festival",
    description: "Taste delicious dishes and exotic drinks from top chefs.",
    location: "Lekki Leisure Lake",
    date: "April 10, 2026",
    time: "12:00 PM",
    tickets: [
      { type: "Regular", price: "$15", remaining: "500/2000" },
      { type: "VIP", price: "$60", remaining: "80/200" }
    ]
  },
  {
    id: 10,
    name: "Film Festival Africa",
    description: "Celebrating African cinema with screenings, awards, and workshops.",
    location: "Genesis Deluxe Cinemas, Lagos",
    date: "June 8, 2026",
    time: "5:00 PM",
    tickets: [
      { type: "Regular", price: "$20", remaining: "300/1000" },
      { type: "VIP", price: "$70", remaining: "60/200" }
    ]
  },
  {
    id: 11,
    name: "Green Earth Conference",
    description: "Join the conversation on sustainability, climate change, and innovation.",
    location: "Abuja Eco Center",
    date: "July 15, 2026",
    time: "10:00 AM",
    tickets: [
      { type: "Standard", price: "$30", remaining: "250/800" },
      { type: "VIP", price: "$90", remaining: "70/150" }
    ]
  },
  {
    id: 12,
    name: "Digital Creators Meetup",
    description: "A networking event for content creators, influencers, and media brands.",
    location: "Victoria Island, Lagos",
    date: "August 5, 2026",
    time: "2:00 PM",
    tickets: [
      { type: "General", price: "$20", remaining: "300/600" },
      { type: "VIP", price: "$80", remaining: "50/100" }
    ]
  },
  {
    id: 13,
    name: "Gospel Music Concert",
    description: "An uplifting evening of gospel worship and praise.",
    location: "House on the Rock, Lagos",
    date: "September 1, 2026",
    time: "5:00 PM",
    tickets: [
      { type: "Regular", price: "$10", remaining: "500/2000" },
      { type: "VIP", price: "$50", remaining: "100/300" }
    ]
  },
  {
    id: 14,
    name: "African Dance Festival",
    description: "Traditional and modern African dances performed live.",
    location: "Lagos National Theatre",
    date: "October 9, 2026",
    time: "4:00 PM",
    tickets: [
      { type: "Standard", price: "$15", remaining: "400/1000" },
      { type: "VIP", price: "$60", remaining: "70/200" }
    ]
  },
  {
    id: 15,
    name: "Crypto & Blockchain Expo",
    description: "Explore blockchain technology, DeFi, NFTs, and the future of money.",
    location: "Eko Hotel & Suites",
    date: "November 22, 2026",
    time: "9:00 AM",
    tickets: [
      { type: "Regular", price: "$40", remaining: "500/1500" },
      { type: "VIP", price: "$120", remaining: "90/200" }
    ]
  },
  {
    id: 16,
    name: "Startup Hackathon",
    description: "A 48-hour hackathon for developers, designers, and entrepreneurs.",
    location: "Coven Labs, Lagos",
    date: "December 3, 2026",
    time: "8:00 AM",
    tickets: [
      { type: "Participant", price: "$20", remaining: "200/400" },
      { type: "Mentor", price: "$0", remaining: "20/50" }
    ]
  },
  {
    id: 17,
    name: "Wellness & Yoga Retreat",
    description: "Relax, recharge, and connect at this wellness retreat.",
    location: "Obudu Cattle Ranch",
    date: "January 15, 2027",
    time: "7:00 AM",
    tickets: [
      { type: "Basic", price: "$50", remaining: "80/150" },
      { type: "Premium", price: "$150", remaining: "20/50" }
    ]
  },
  {
    id: 18,
    name: "African Tech Awards",
    description: "Recognizing excellence in Africa’s technology ecosystem.",
    location: "Accra Conference Hall",
    date: "February 28, 2027",
    time: "6:00 PM",
    tickets: [
      { type: "General", price: "$25", remaining: "400/1000" },
      { type: "VIP", price: "$100", remaining: "50/100" }
    ]
  },
  {
    id: 19,
    name: "Gaming Expo Africa",
    description: "Explore the latest in gaming, VR, and eSports.",
    location: "Cape Town Expo Centre",
    date: "March 19, 2027",
    time: "11:00 AM",
    tickets: [
      { type: "Standard", price: "$30", remaining: "300/800" },
      { type: "VIP", price: "$90", remaining: "50/120" }
    ]
  },
  {
    id: 20,
    name: "Innovation in Education Summit",
    description: "Shaping the future of learning through technology and creativity.",
    location: "University of Ibadan, Nigeria",
    date: "April 5, 2027",
    time: "9:00 AM",
    tickets: [
      { type: "Regular", price: "$20", remaining: "200/600" },
      { type: "VIP", price: "$70", remaining: "50/100" }
    ]
  }
];


export default events