import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";
import doctorModel from "./models/doctorModel.js";

const MONGO_URI = "mongodb+srv://dheerajroy3030:rrkgd12345@cluster0.i9yw9to.mongodb.net";

const seedDoctors = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database Connected for seeding...");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("doctor123", salt);

        const doctors = [
            {
                name: "Dr. Rajesh Sharma", // Indan Name
                email: "rajesh@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop", 
                speciality: "General physician",
                degree: "MBBS",
                experience: "12 Years",
                about: "Dr. Rajesh Sharma is a trusted General Physician with over a decade of experience in primary healthcare, with a special focus on chronic disease management and lifestyle medicine.",
                fees: 500, // Indian price
                address: { line1: "A-102, Shanthi Nagar", line2: "Main Road, Pune" },
                date: Date.now()
            },
            {
                name: "Dr. Anjali Gupta",
                email: "anjali@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
                speciality: "Gynecologist",
                degree: "MBBS, MD (OBG)",
                experience: "8 Years",
                about: "Dr. Anjali Gupta is a compassionate gynecologist specializing in maternal care and minimally invasive gynecological procedures.",
                fees: 800,
                address: { line1: "33/A, Green Park", line2: "Opposite Apollo Clinic, Delhi" },
                date: Date.now()
            },
            {
                name: "Dr. Suresh Verma",
                email: "suresh@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
                speciality: "Dermatologist",
                degree: "MBBS, DDVL",
                experience: "15 Years",
                about: "Dr. Suresh Verma is a veteran dermatologist specializing in skin health and advanced laser treatments.",
                fees: 1000,
                address: { line1: "Vertex Towers", line2: "Banjara Hills, Hyderabad" },
                date: Date.now()
            },
            {
                name: "Dr. Kavita Reddy",
                email: "kavita@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=400&h=400&fit=crop",
                speciality: "Pediatricians",
                degree: "MBBS, DCH",
                experience: "6 Years",
                about: "Dr. Kavita Reddy provides expert care for children and infants, specializing in pediatric nutrition and immunizations.",
                fees: 600,
                address: { line1: "Royal Avenue", line2: "Above Kids Clinic, Bangalore" },
                date: Date.now()
            },
            {
                name: "Dr. Arun Kumar Singh",
                email: "arun@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
                speciality: "Neurologist",
                degree: "MBBS, DM (Neurology)",
                experience: "10 Years",
                about: "Dr. Arun Kumar Singh is a leading neurologist with expertise in complex brain and nervous system disorders.",
                fees: 1500,
                address: { line1: "Sector 14, Galaxy Mall", line2: "Gurugram, Haryana" },
                date: Date.now()
            },
            {
                name: "Dr. Pradeep Gupta",
                email: "pradeep@gmail.com",
                password: hashedPassword,
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
                speciality: "Gastroenterologist",
                degree: "MBBS, DM",
                experience: "14 Years",
                about: "Dr. Pradeep Gupta specializes in the treatment of digestive system disorders and liver conditions.",
                fees: 1200,
                address: { line1: "Silver Square", line2: "Main Market, Jaipur" },
                date: Date.now()
            }
        ];

        // Clear existing and Seed
        await doctorModel.deleteMany({});
        console.log("Existing doctors cleared!");

        await doctorModel.insertMany(doctors);
        console.log("Sample Indian Doctors Seeded Successfully!");

        console.log("Seeding Completed!");
        process.exit();
    } catch (error) {
        console.error("Seeding Failed:", error);
        process.exit(1);
    }
};

seedDoctors();
