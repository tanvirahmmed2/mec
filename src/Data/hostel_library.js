import mukti_hall from "../images/muktijoddha_hall.jpg";
import amar_hall from "../images/amarekushey_hall.jpg";
import taramon_hall from "../images/taramonbibi_hall.jpg";
import library_image from "../images/library.jpg";

const hostel_library = [
  {
    name: "Amar Ekushey Hall",
    type: "Male",
    capacity: 200,
    category: "hall",
    image: amar_hall,
    description:
      "This hall is exclusively for male students and offers housing facilities for 200 residents. It provides a supportive academic and social environment with essential amenities for daily student life.",
  },
  {
    name: "Muktijoddha Hall",
    type: "Male",
    capacity: 200,
    category: "hall",
    image: mukti_hall,
    description:
      "Dedicated to male students, this hall accommodates 200 residents. It ensures a safe and organized living space where students can focus on their studies while engaging in community activities.",
  },
  {
    name: "Bir Muktijoddha Taramon Bibi Hall",
    type: "Female",
    capacity: 150,
    category: "hall",
    image: taramon_hall,
    description:
      "Reserved for female students, this hall provides accommodation for 150 residents. It is designed with security and comfort in mind, ensuring a safe and welcoming environment.",
  },
  {
    name: "Central Library",
    type: "Library",
    capacity: 80,
    category: "library",
    image: library_image,
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
