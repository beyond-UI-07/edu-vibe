"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import { ModeToggle } from "@/components/ModeToggle";

export const metadata = {
  title: "About",
  description: "this is about page",
};

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const pathName = usePathname(); // Get current pathname in Next.js
  const isActive = (path) => {
    return pathName === path
      ? "text-primary-600 font-semibold"
      : "dark:text-white font-light hover:text-primary-600 transition-all hover:font-semibold duration-150";
  };

  const isHome = pathName === "/";

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-3 md:px-10">
          {" "}
          {/* Logo */}
          <div>
            <Image src={logo} className="w-44 md:w-52" alt="Company Logo" />
          </div>
          {/* Menu */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item, index) => (
              <li
                className="hover:text-primary-600 transition-all duration-150"
                key={index}
              >
                <Link href={item.href} className={isActive(item.href)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            {/* <ModeToggle /> */}
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/create-account">
              <Button className="bg-primary-600 hover:bg-primary-600 dark:text-white">
                Sign Up
              </Button>
            </Link>
            <ModeToggle></ModeToggle>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant={"ghost"}>
              <RiMenu3Line className="text-xl" />
            </Button>
          </div>
        </div>
      </nav>
      <div className={`h-[75px] ${isHome && "bg-primary-100"}`}></div>
    </>
  );
}
