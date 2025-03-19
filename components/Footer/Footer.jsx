import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-400 text-white">
      <footer className="container mx-auto py-4 md:py-7 px-3 md:px-10 ">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image alt="Logo" src="/logo2.png" width={140} height={140} />
              </div>
              <p className="text-sm opacity-90 mb-4">
                Making education accessible, engaging, and effective for
                everyone, regardless of location or background.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe to our newsletter</h3>
              <p className="text-sm opacity-90 mb-4">
                Stay updated with the latest news, resources, and special
                offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-md focus:outline-none"
                />
                <Button variant="secondary" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-sm opacity-90 text-center">
            <p>
              &copy; {new Date().getFullYear()} LearnEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
