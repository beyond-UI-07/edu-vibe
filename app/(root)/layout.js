import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/Header/Navbar/Navbar";
<<<<<<< HEAD:app/layout.js
import Footer from "@/components/Footer/Footer";
=======
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";

>>>>>>> c01d46e3e1f5541b09cc7aff4b736872936d4358:app/(root)/layout.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edu Vibe || Home",
  description: "This is home page ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* NavbarWrapper handles conditional rendering */}
          <nav>
            <Navbar />
          </nav>
          {/* outlet part to render the dynamic page */}
          <main>{children}</main>
<<<<<<< HEAD:app/layout.js

            <Footer />

=======
          <div>
            <Footer/>
          </div>
>>>>>>> c01d46e3e1f5541b09cc7aff4b736872936d4358:app/(root)/layout.js
        </ThemeProvider>
      </body>
    </html>
  );
}
