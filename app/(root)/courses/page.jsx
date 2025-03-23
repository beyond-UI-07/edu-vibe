"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) {
          console.error("Failed to fetch courses, status:", res.status);
          console.error("Response Body:", await res.text());
          return;
        }

        const data = await res.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Price:</strong> ${course.price}
            </p>

            {/* View Details Button */}
            <button
              onClick={() => router.push(`/courses/${course._id}`)} // Ensure `_id` is passed correctly
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            >
              View Course Details
            </button>
          </div>
        ))}
      </div>

      {/* Add Course Button */}
      <button
        onClick={() => router.push("/courses/addNewCourse")}
        className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-6"
      >
        Add New Course
      </button>
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// // import { useRouter } from "next/router"; // For navigation
// import { useRouter } from "next/navigation"; // ✅ Correct for App Router

// export default function Courses() {
//   const [courses, setCourses] = useState([]);
//   const router = useRouter(); // To handle navigation to addNewCourse

//   // Fetch courses data when the component mounts
//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         console.log("fetching courses...");
//         const res = await fetch("/api/courses");
//         const data = await res.json();

//         // Check if response is empty or not
//         if (!res.ok) {
//           console.error("Failed to fetch courses, status:", res.status);
//           console.error("Response Body:", await res.text());
//           return;
//         }

//         console.log("Courses fetched:", data);
//         setCourses(data.courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     }

//     fetchCourses();
//   }, []);

//   const handleAddNewCourse = () => {
//     router.push("/courses/addNewCourse"); // Navigate to the add new course page
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Courses</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course._id}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
//             <p className="text-gray-600 mb-2">
//               <strong>Instructor:</strong> {course.instructor}
//             </p>
//             <p className="text-gray-600 mb-4">
//               <strong>Price:</strong> ${course.price}
//             </p>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Add Course Button */}
//       <button
//         onClick={handleAddNewCourse}
//         className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-6"
//       >
//         Add New Course
//       </button>
//     </div>
//   );
// }
