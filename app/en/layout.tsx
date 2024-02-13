import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import Sidebar from "./ui/sidebar";
import Navbar from "./ui/navbar";
import Footer from "./ui/home/footer";

export const metadata: Metadata = {
  title: "Rodrigo Rodríguez Buxman | Web Developer",
  description: "Portfolio of Rodrigo Rodríguez Buxman, Fullstack Web Developer specialized in the Frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="2xl:text-xl" lang="en">
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
