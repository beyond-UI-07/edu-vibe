import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import Image from "next/image";
import WhatDo from "./WhatDo";

export default function About() {
  return (
    <section className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <SectionHeading
        title="What is"
        titleSecond="EduVibe?"
        description="EduVibe is an innovative online learning platform designed to make education accessible, engaging, and adaptable to your lifestyle. It offers a diverse range of courses taught by experts in various fields. With LearnEase, you can learn at your own pace, interact with fellow learners, and gain valuable skills through practical and interactive lessons."
      />

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {/* Instructor Card */}
        <div className="relative group max-w-[500px] w-full mx-auto rounded-[48px] overflow-hidden">
          <Image
            src="/Rectangle 19.png"
            width={500}
            height={400}
            alt="For Instructors"
            className="object-cover w-full h-auto rounded-lg"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white rounded-lg">
            <h3 className="text-xl font-semibold">FOR INSTRUCTORS</h3>
            <button className="mt-2 px-4 py-2 border border-white rounded-lg">
              Start a class today
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div className="relative group max-w-[500px] w-full mx-auto rounded-[48px] overflow-hidden">
          <Image
            src="/Rectangle 21.png"
            width={500}
            height={400}
            alt="For Students"
            className="object-cover w-full h-auto"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-semibold">FOR STUDENTS</h3>
            <button className="mt-2 px-4 py-2 border border-white rounded-lg">
              Enter access code
            </button>
          </div>
        </div>
      </div>
      {/* <WhatDo /> */}
    </section>
  );
}
