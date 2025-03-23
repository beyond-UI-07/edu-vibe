"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Get course ID from URL

export default function CourseDetails() {
  const { id } = useParams(); // Get course ID from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourseDetails() {
      try {
        const res = await fetch(`/api/courses/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await res.json();
        setCourse(data.course);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCourseDetails();
    }
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!course)
    return <p className="text-center text-red-500">Course not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Category:</strong> {course.category}
      </p>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Price:</strong> ${course.price}
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Description:</strong> {course.description}
      </p>

      <button
        onClick={() => window.history.back()}
        className="bg-gray-500 text-white py-2 px-4 rounded-lg"
      >
        Go Back
      </button>
    </div>
  );
}
