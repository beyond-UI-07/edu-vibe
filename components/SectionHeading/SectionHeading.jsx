import React from "react";

export default function SectionHeading({ title, titleSecond, description }) {
  return (
    <div className="space-y-3 md:space-y-5">
      <h1 className="md:text-3xl text-xl text-primary-600 text-center font-bold">
        {title} <span className="text-secondary-600">{titleSecond}</span>
      </h1>
      <p className="md:text-lg text-center md:w-8/12 mx-auto text-slate-600">
        {description}
      </p>
    </div>
  );
}
