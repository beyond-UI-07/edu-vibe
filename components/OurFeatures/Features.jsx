import React from "react";
import SectionHeading from "../Shared/SectionHeading";
import UserInterface from "./UserInterface";
import ToolsForTeacher from "./ToolsForTeacher";
import Assessments from "./Assessments";
import ClassManagement from "./ClassManagement";
import Discussions from "./Discussions";
import { Button } from "../ui/button";

export default function Features() {
  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <SectionHeading
        title="Our"
        titleSecond="Features"
        description="This very extraordinary feature, can make learning activities more efficient"
      />
      <UserInterface />
      <ToolsForTeacher />
      <Assessments />
      <ClassManagement />
      <Discussions />
      <div className="flex justify-center -mt-5">
      <Button className="rounded-full border border-secondary-600 bg-transparent text-secondary-600">See more features</Button>
      </div>
    </div>
  );
}
