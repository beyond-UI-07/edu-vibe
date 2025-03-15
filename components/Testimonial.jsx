import React from "react";
import DetailsFlexSection from "./Shared/DetailsFlexSection";

export default function Testimonial() {
  return (
    <section className="container mx-auto py-4 md:py-7 px-3 md:px-10 ">
      <DetailsFlexSection
        title={[{ text: "What They Say?" }]}
        description="LearnEase has got more than 100k positive ratings from our users around the world. 
Some of the students and teachers were greatly helped by the LearnEase.
Are you too? Please give your assessment"
        img="/Group 136.png"
        btnStyle2="Write your assessment"
        className="lg:flex-row-reverse"
      />
    </section>
  );
}
