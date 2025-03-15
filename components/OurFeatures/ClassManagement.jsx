import React from "react";
import DetailsFlexSection from "../Shared/DetailsFlexSection";

export default function ClassManagement() {
  return (
    <DetailsFlexSection
      title={[
        { text: "Class Management", color: "text-secondary-600" },
        { text: "Tools for Educators" },
      ]} description="Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
" img="/Group 124.png"
    />
  );
}
