"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function AddNewCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructor: "",
    duration: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Course added successfully!");
      setFormData({
        name: "",
        description: "",
        instructor: "",
        duration: "",
        category: "",
        price: "",
      });
    } else {
      alert("Failed to add course");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Enter course name"
                className="mt-1 w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <Textarea
                name="description"
                placeholder="Enter course description"
                className="mt-1 w-full"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Instructor Name
              </label>
              <Input
                name="instructor"
                type="text"
                placeholder="Enter instructor name"
                className="mt-1 w-full"
                value={formData.instructor}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Duration (in weeks)
              </label>
              <Input
                name="duration"
                type="number"
                placeholder="Enter duration"
                className="mt-1 w-full"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Category
              </label>
              <Input
                name="category"
                type="text"
                placeholder="Enter category"
                className="mt-1 w-full"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (USD)
              </label>
              <Input
                name="price"
                type="number"
                placeholder="Enter price"
                className="mt-1 w-full"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Add Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
