import mongoose from "mongoose";
import dotenv from "dotenv";
import Guide from "./models/guide.js";

dotenv.config();

const sampleGuides = [
  {
    name: "Marie Dubois",
    location: "Paris",
    language: ["French", "English"],
    hourlyRate: "€50",
    experience: "5 years",
    specialties: ["History", "Art", "Architecture"]
  },
  {
    name: "Jean-Pierre Martin",
    location: "Paris",
    language: ["French", "English", "Spanish"],
    hourlyRate: "€45",
    experience: "3 years",
    specialties: ["Food", "Culture", "Nightlife"]
  },
  {
    name: "Yuki Tanaka",
    location: "Kyoto",
    language: ["Japanese", "English"],
    hourlyRate: "¥5000",
    experience: "7 years",
    specialties: ["Temples", "Traditional Culture", "Zen"]
  },
  {
    name: "Hiroshi Yamamoto",
    location: "Kyoto",
    language: ["Japanese", "English", "Chinese"],
    hourlyRate: "¥4500",
    experience: "4 years",
    specialties: ["History", "Tea Ceremony", "Gardens"]
  },
  {
    name: "Made Surya",
    location: "Bali",
    language: ["Indonesian", "English"],
    hourlyRate: "$30",
    experience: "6 years",
    specialties: ["Beaches", "Temples", "Adventure"]
  },
  {
    name: "Ketut Wijaya",
    location: "Bali",
    language: ["Indonesian", "English", "Dutch"],
    hourlyRate: "$35",
    experience: "8 years",
    specialties: ["Culture", "Spiritual", "Nature"]
  },
  {
    name: "Sarah Johnson",
    location: "New York",
    language: ["English", "Spanish"],
    hourlyRate: "$60",
    experience: "5 years",
    specialties: ["City Tours", "Food", "Entertainment"]
  },
  {
    name: "Michael Chen",
    location: "New York",
    language: ["English", "Mandarin", "Cantonese"],
    hourlyRate: "$55",
    experience: "4 years",
    specialties: ["History", "Architecture", "Shopping"]
  },
  {
    name: "Marco Rossi",
    location: "Rome",
    language: ["Italian", "English"],
    hourlyRate: "€55",
    experience: "6 years",
    specialties: ["History", "Art", "Food"]
  },
  {
    name: "Giulia Bianchi",
    location: "Rome",
    language: ["Italian", "English", "French"],
    hourlyRate: "€50",
    experience: "5 years",
    specialties: ["Vatican", "Archaeology", "Culture"]
  },
  {
    name: "James Thompson",
    location: "London",
    language: ["English"],
    hourlyRate: "£45",
    experience: "7 years",
    specialties: ["History", "Royalty", "Museums"]
  },
  {
    name: "Emma Wilson",
    location: "London",
    language: ["English", "French", "German"],
    hourlyRate: "£50",
    experience: "4 years",
    specialties: ["Food", "Theater", "Shopping"]
  },
  {
    name: "Ahmed Al-Mansoori",
    location: "Dubai",
    language: ["Arabic", "English"],
    hourlyRate: "AED 200",
    experience: "5 years",
    specialties: ["Modern City", "Desert", "Shopping"]
  },
  {
    name: "Fatima Al-Zahra",
    location: "Dubai",
    language: ["Arabic", "English", "Hindi"],
    hourlyRate: "AED 180",
    experience: "6 years",
    specialties: ["Culture", "Food", "Entertainment"]
  }
];

async function seedGuides() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Clear existing guides
    await Guide.deleteMany({});
    console.log("✅ Cleared existing guides");

    // Insert sample guides
    const createdGuides = await Guide.insertMany(sampleGuides);
    console.log(`✅ Created ${createdGuides.length} guides`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding guides:", err);
    process.exit(1);
  }
}

seedGuides();

