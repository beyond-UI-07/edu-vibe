import Image from "next/image";
import Marquee from "react-fast-marquee";

export function TrustedCompanies() {
  const companyLogos = [
    { img: "/google.svg", name: "Google" },
    { img: "/microsoft.svg", name: "Microsoft" },
    { img: "/netflix.svg", name: "Netflix" },
    { img: "/airbnb.svg", name: "Airbnb" },
    { img: "/amazon.svg", name: "Amazon" },
    { img: "/facebook.svg", name: "Facebook" },
    { img: "/grab.svg", name: "Grab" },
  ];

  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10 my-5">
      <h1 className="font-medium text-lg text-gray-600 text-center">
        Trusted by 5,000+ Companies Worldwide
      </h1>

      <Marquee>
        {companyLogos.map((logo) => (
          <div className="flex p-5 items-center grayscale hover:grayscale-0 transition-all duration-200 mt-5">
            <Image
              src={logo.img}
              key={logo.name}
              alt={logo.name}
              width={140}
              height={140}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
