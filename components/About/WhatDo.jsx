import React from "react";
import DetailsFlexSection from "../Shared/DetailsFlexSection";

export default function WhatDo() {
  return (
    <DetailsFlexSection
      title={[
        { text: "Everything you can do in a physical classroom," },
        { text: "you can do with LearnEase", color: "text-secondary-600" },
      ]}
      description="With LearnEase, the virtual classroom experience is elevated to match every aspect of a physical classroom. From engaging interactions with expert instructors and collaborative discussions with peers to hands-on projects and personalized learning paths."
      img="/Group 133.png"
      btnText="Learn More"
    />
  );
}
