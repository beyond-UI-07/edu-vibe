import Image from "next/image";
import React from "react";

export default function SolutionCard() {
  const data = [
    {
      icon: "/Group 130.png",
      title: "Flexible Learning",
      desc: "Study on your terms with self-paced courses, allowing you to learn when it suits you bes",
    },
    {
      icon: "/Group 131.png",
      title: "Expert Instructors",
      desc: "Learn from professionals and experts in their respective fields, ensuring high-quality education",
    },
    {
      icon: "/Group 132.png",
      title: "Flexible Learning",
      desc: "Engage with a diverse community of learners, fostering discussions, collaboration, and peer learning.",
    },
  ];
  return (
    <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
      {data.map((card, index) => (
        <div
          key={index}
          className="py-5 px-10 shadow-xl shadow-primary-100 flex flex-col items-center rounded-4xl"
        >
          <Image width={100} height={100} src={card.icon} alt={card.title} />
          <h2 className="text-primary-600 font-medium text-xl text-center">
            {card.title}
          </h2>
          <p className="text-center mt-5 text-slate-600 pb-10">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
