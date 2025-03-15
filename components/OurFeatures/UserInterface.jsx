import React from "react";
import DetailsFlexSection from "../Shared/DetailsFlexSection";

export default function UserInterface() {
  const title = [
    {
      text: "A",
      color: "",
    },
    { text: "user interface", color: "text-secondary-600" },
    { text: "designed for the classroom", color: "" },
  ];

  const features = [
    {
      icon: "/users.svg",
      text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
    {
      icon: "/Group 73.svg",
      text: "TA’s and presenters can be moved to the front of the class.",
    },
    {
      icon: "/Group 72.svg",
      text: "Teachers can easily see all students and class data at one time.",
    },
  ];

  return (
    <DetailsFlexSection
      className="lg:flex-row-reverse"
      title={title}
      features={features}
      img="/Group 134.png"
    />
  );
}
