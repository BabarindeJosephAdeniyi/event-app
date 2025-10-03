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
    ],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" // tech/music festival image
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" // coding laptop image
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80" // fashion runway
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80" // comedy mic on stage
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80" // books and art supplies
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
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9Gq0DKJAEAEOhb0jnEQiZFpmkaxWJX0m4A&s" // music concert crowd
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
    ],
    imageUrl: "https://miratechmforce.com/wp-content/uploads/sites/3/2019/04/pitch_night_ny-1.jpg" // business meeting
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
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S2mlRgWg3QRSDXN2N1zsOOvu0mvukwgqxg&s" // tech conference
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" // food festival
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
    ],
    imageUrl: "https://afropop.org/migrated-uploads/2016/04/NEW-YORK-AFRICAN-FILM-FESTIVAL-2016-1024x663.jpg"
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" // nature, sustainability
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
    ],
    imageUrl: "https://www.shortshorts.org/2025/wp-content/uploads/2025/04/cmp002.jpg" 
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" // gospel choir
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" 
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
    ],
    imageUrl: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/c3658a820cc6cf671e098416845ff06b.jpg" // crypto blockchain
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
    ],
    imageUrl: "https://storage.googleapis.com/techsauce-prod/ugc/uploads/2020/10/depa28.jpg" // hackathon working on laptops
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" // yoga wellness nature
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
    ],
    imageUrl: "https://www.africatechsummit.com/nairobi/wp-content/uploads/2025/02/Africa-Tech-Summit-Award-Winners-scaled.jpg"
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
    ],
    imageUrl: "https://agelagos.com/storage/2025/02/AGE-LAGOS-2024-Day-One-1-45.jpg"
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
    ],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

export default events;
