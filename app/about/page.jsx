import About from "@/components/About/About";
import React from "react";

export const metadata = {
  title: "About",
  description: "This is about page ",
};

export default function page() {
  return (
    <div>
      <About></About>
    </div>
  );
}
