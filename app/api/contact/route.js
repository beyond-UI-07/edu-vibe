import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
    try {
        const contactCollection = dbConnect("contacts"); // Use the "contacts" collection
        const { firstName, lastName, email, message } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Insert the contact form data into MongoDB
        const result = await contactCollection.insertOne({
            firstName,
            lastName,
            email,
            message,
            createdAt: new Date(),
        });

        return NextResponse.json({ message: "Contact data stored successfully", result }, { status: 201 });
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json({ message: "Failed to store contact data" }, { status: 500 });
    }
}
