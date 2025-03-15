import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/theme-provider";
import NavbarWrapper from "@/components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
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
          <div>
            <NavbarWrapper />
          </div>
          {/* outlet part to render the dynamic page */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
