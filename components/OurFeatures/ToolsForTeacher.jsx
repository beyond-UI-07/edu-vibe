import React from "react";
import DetailsFlexSection from "../Shared/DetailsFlexSection";

export default function ToolsForTeacher() {
  return (
    <DetailsFlexSection
      title={[
        { text: "Tools", color: "text-secondary-600" },
        { text: "For Teachers And Learners" },
      ]}
      description="Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit."
      img="/Group 122.png"
    />
  );
}
