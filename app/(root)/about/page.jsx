import About from "@/components/About/About";
import Faq from "@/components/About/Faq";
import OurJourney from "@/components/About/OurJourney";
import React from "react";

export const metadata = {
  title: "Edu Vibe || About",
  description: "This is about page ",
};

export default function page() {
  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <About></About>
      <OurJourney/>
      <Faq/>
    </div>
  );
}
