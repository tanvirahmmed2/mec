

const hostel_library = [
  {
    name: "Amar Ekushey Hall",
    type: "Male",
    capacity: 200,
    category: "hall",
    image: "https://res.cloudinary.com/dz45x9efk/image/upload/v1756787438/amarekushey_hall_mltrmd.jpg",
    description:
      "Dedicated to male students, this hall accommodates 200 residents. It ensures a safe and organized living space where students can focus on their studies while engaging in community activities.",
  },
  {
    name: "Muktijoddha Hall",
    type: "Male",
    capacity: 200,
    category: "hall",
    image: "https://res.cloudinary.com/dz45x9efk/image/upload/v1756787439/muktijoddha_hall_affzkw.jpg",
    description:
      "Dedicated to male students, this hall accommodates 200 residents. It ensures a safe and organized living space where students can focus on their studies while engaging in community activities.",
  },
  {
    name: "Bir Muktijoddha Taramon Bibi Hall",
    type: "Female",
    capacity: 150,
    category: "hall",
    image: "https://res.cloudinary.com/dz45x9efk/image/upload/v1756787441/taramonbibi_hall_n77qid.jpg",
    description:
      "Reserved for female students, this hall provides accommodation for 150 residents. It is designed with security and comfort in mind, ensuring a safe and welcoming environment.",
  },
  {
    name: "Central Library",
    type: "Library",
    capacity: 80,
    category: "library",
    image: "https://res.cloudinary.com/dz45x9efk/image/upload/v1756787439/library_mpvbmi.jpg",
    description:
      "The modern central library is equipped with internet facilities and a rich collection of necessary books. Each room can accommodate approximately 80 students for study. Students can issue books for home use as per their requirements.",
    facilities: [
      "Free Wi-Fi and internet access",
      "Digital catalog for easy book search",
      "Reading rooms and study areas",
      "Computer stations for research and assignments",
      "Reference section with journals and periodicals",
      "Book lending services for registered students",
      "Quiet study zones and group discussion areas",
    ],
    services: [
      "Book lending and returns",
      "Online reservation of books",
      "Research assistance from library staff",
      "Workshops on digital literacy and research methods",
      "Access to e-books and online journals",
    ],
    opening_hours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 5:00 PM",
    },
    location: "Academic Building, Ground Floor",
    staff: ["Chief Librarian", "Assistant Librarians", "Library Assistants"],
  },
];
export default hostel_library;
