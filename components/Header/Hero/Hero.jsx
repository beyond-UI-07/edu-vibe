import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import heroBG from "../../../public/heroBG.png";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-10">
        {" "}
        {/* Hero Heading */}
        <div className="lg:w-4/5 mt-10 lg:0">
          <h1 className="text-5xl font-bold mb-5 text-secondary-600">
            Studying{" "}
            <span className="text-primary-600">Online is now much easier</span>
          </h1>
          <p className="text-justify text-gray-700">
            At LearnEase, we believe in the power of education that transcends
            boundaries. Our online platform is designed to bring the classroom
            experience to your fingertips, making learning a truly immersive and
            convenient journey.
          </p>
          {/* Hero Button */}
          <div className="flex items-center gap-3 mt-4">
            <Button className="bg-primary-600 hover:bg-primary-600 dark:text-white">
              Sign Up
            </Button>
            <div className="flex items-center gap-4">
              <Button variant={"outline"}>
                <FaPlay className="text-primary-600" />
              </Button>{" "}
              <span>Watch how it works</span>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative mt-10 lg:mt-0">
          <Image src={heroBG} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
