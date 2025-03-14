"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Header/Navbar/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname(); // Get the current route

  // Do not show Navbar on the home page
  if (pathname === "/") return null;

  return <Navbar />;
}
