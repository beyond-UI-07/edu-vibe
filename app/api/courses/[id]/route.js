import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId
import dbConnect from "@/lib/dbConnect";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const collection = await dbConnect("courses");

    // Validate ID format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid course ID" },
        { status: 400 }
      );
    }

    const course = await collection.findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ course }, { status: 200 });
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
