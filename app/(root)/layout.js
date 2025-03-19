import Navbar from "@/components/Header/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
