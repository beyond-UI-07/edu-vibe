import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div className="bg-primary-100 dark:bg-transparent [clip-path:ellipse(85%_100%_at_50%_0%)] pb-10">
      <Hero />
    </div>
  );
}
