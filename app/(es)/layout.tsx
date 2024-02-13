import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import Sidebar from "../ui/sidebar";
import Navbar from "../ui/navbar";
import Footer from "../ui/home/footer";

export const metadata: Metadata = {
  title: "Rodrigo Rodríguez Buxman | Desarrollador Web",
  description: "Portfolio de Rodrigo Rodríguez Buxman, Desarrollador Web Fullstack especializado en el Frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="2xl:text-xl" lang="es">
      <body className={`${GeistSans.className} antialiased bg-gray-950 text-white`}>
        <Navbar />
        <Sidebar />
        <div className="lg:ml-64">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-12 pt-36 lg:pt-24">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
