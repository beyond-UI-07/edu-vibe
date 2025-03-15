import React from "react";
import DetailsFlexSection from "../Shared/DetailsFlexSection";

export default function Discussions() {
  return (
    <DetailsFlexSection
      title={[
        { text: "One-on-One" },
        { text: "Discussions", color: "text-secondary-600" },
      ]}
      description="Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.    "
      img="/Group 106.png" className="lg:flex-row-reverse"
    />
  );
}
