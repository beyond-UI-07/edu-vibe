import Image from "next/image";
import React from "react";

export default function DetailsFlexSection({ title, secondTitle, description, btnText, img, imgAlt, className }) {
  return (
    <section className="py-12 md:py-16">
      <div className={`flex flex-col lg:flex-row gap-12 ${className}`}>
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-600">
            {title}
            <span className="text-secondary-600">{secondTitle}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          <button className="text-muted-foreground underline mt-3 flex justify-start">{btnText}</button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={img}
            width={600}
            height={500}
            alt={imgAlt}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
