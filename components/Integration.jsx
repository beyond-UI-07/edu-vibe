import React from "react";
import DetailsFlexSection from "./Shared/DetailsFlexSection";
import { Button } from "./ui/button";

export default function Integration() {
  return (
    <section className="container mx-auto py-4 md:py-7 px-3 md:px-10 ">
      <DetailsFlexSection
        title={[
          { text: "200+ educational tools and platform" },
          { text: "integrations", color: "text-secondary-600" },
        ]}
        description="Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms."
        img="/Group 135.png" btnStyle2="See All integration"
      />
    </section>
  );
}
