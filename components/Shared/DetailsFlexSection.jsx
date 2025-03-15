import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function DetailsFlexSection({
  title,
  description,
  btnText,
  img,
  btnStyle2,
  className,
  features, // Array of { icon: string, text: string }
}) {
  return (
    <section className="py-12 md:py-16">
      <div className={`flex flex-col lg:flex-row gap-12 ${className}`}>
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h2 className="inline text-3xl font-bold tracking-tighter sm:text-4xl text-primary-600">
            {title?.map((part, index) => (
              <span key={index} className={part.color}>
                {part.text}{" "}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          <button className="text-muted-foreground underline mt-3 flex justify-start">
            {btnText}
          </button>
          {btnStyle2 && (
            <div className="mt-3 flex justify-start">
              <Button className="inline-flex w-fit rounded-full border border-secondary-600 bg-transparent text-secondary-600 hover:bg-amber-100 transition-all duration-150">
                {btnStyle2}
              </Button>
            </div>
          )}
          <ul className="mt-6 space-y-3">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-center gap-5">
                <div className="p-3 rounded-full shadow-lg flex items-center">
                  <Image
                    src={feature.icon}
                    width={30}
                    height={30}
                    alt={feature.text}
                    className="p-1"
                  />
                </div>
                <span className="text-slate-600 text-lg">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={img}
            width={600}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
