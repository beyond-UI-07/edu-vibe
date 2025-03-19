
import ThemeProvider from "@/components/theme-provider";
import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata = {
  title: "Edu Vibe || Dashboard",
  description: "This is Edu Vibe Dashboard ",
};

export default function DashboardLayout({ children }) {
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

          {/* outlet part to render the dynamic page */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// export default function DashboardLayout({ children }) {
//   return <section>
//     {children}
//   </section>
// }
