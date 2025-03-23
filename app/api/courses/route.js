import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET(req) {
  try {
    console.log("Connecting to database...");
    const collection = await dbConnect("courses");

    const courses = await collection.find().toArray(); // Fetch all courses
    return NextResponse.json({ courses }, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error); // Log error
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    console.log("Connecting to database...");
    const collection = await dbConnect("courses");

    const { name, description, instructor, duration, category, price } =
      await req.json();
    console.log("Received data:", {
      name,
      description,
      instructor,
      duration,
      category,
      price,
    });

    if (
      !name ||
      !description ||
      !instructor ||
      !duration ||
      !category ||
      !price
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newCourse = {
      name,
      description,
      instructor,
      duration,
      category,
      price,
    };

    console.log("Inserting new course:", newCourse);
    const result = await collection.insertOne(newCourse);

    return NextResponse.json(
      { message: "Course added successfully", course: newCourse },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during course insertion:", error); // Log detailed error message
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// stable version

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";

// export async function POST(req) {
//   try {
//     console.log("Connecting to database...");
//     const collection = await dbConnect("courses");

//     const { name, description, instructor, duration, category, price } =
//       await req.json();
//     console.log("Received data:", {
//       name,
//       description,
//       instructor,
//       duration,
//       category,
//       price,
//     });

//     if (
//       !name ||
//       !description ||
//       !instructor ||
//       !duration ||
//       !category ||
//       !price
//     ) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const newCourse = {
//       name,
//       description,
//       instructor,
//       duration,
//       category,
//       price,
//     };

//     console.log("Inserting new course:", newCourse);
//     const result = await collection.insertOne(newCourse);

//     return NextResponse.json(
//       { message: "Course added successfully", course: newCourse },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error during course insertion:", error); // Log detailed error message
//     return NextResponse.json(
//       { message: "Server error", error: error.message },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";
// import Course from "@/models/Course";

// export async function POST(req) {
//   try {
//     await dbConnect();

//     const { name, description, instructor, duration, category, price } =
//       await req.json();

//     if (
//       !name ||
//       !description ||
//       !instructor ||
//       !duration ||
//       !category ||
//       !price
//     ) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const newCourse = new Course({
//       name,
//       description,
//       instructor,
//       duration,
//       category,
//       price,
//     });

//     await newCourse.save();
//     return NextResponse.json(
//       { message: "Course added successfully", course: newCourse },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Server error", error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // import { dbConnect } from "@/lib/dbConnect";
// // import dbConnect from "@/lib/dbConnect";

// import dbConnect from "@/lib/dbConnect";
// import Course from "@/models/Course";

// export default async function handler(req, res) {
//   await dbConnect();
//   //   await dbConnect();
//   //   await dbConnect();

//   if (req.method === "POST") {
//     try {
//       const { name, description, instructor, duration, category, price } =
//         req.body;

//       if (
//         !name ||
//         !description ||
//         !instructor ||
//         !duration ||
//         !category ||
//         !price
//       ) {
//         return res.status(400).json({ message: "All fields are required" });
//       }

//       const newCourse = new Course({
//         name,
//         description,
//         instructor,
//         duration,
//         category,
//         price,
//       });

//       await newCourse.save();
//       res
//         .status(201)
//         .json({ message: "Course added successfully", course: newCourse });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
