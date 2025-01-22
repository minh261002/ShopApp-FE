"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastStore from "@/store/toastStore";
import { showToast } from "@/helpers/toastHelper";
import ReactQueryProvider from "@/components/layouts/Provider";
import Footer from "@/components/layouts/Footer";
import HeaderMain from "@/components/layouts/HeaderMain";
import HeaderTop from "@/components/layouts/HeaderTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { message, type, clearToast } = useToastStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (message && type) {
      showToast(message, type);
      clearToast();
    }

    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [message, type, clearToast]);

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="relative">
            <HeaderTop />
            <div
              className={`transition-all duration-300 ${
                scrolled ? "slide-down" : ""
              }`}
            >
              <HeaderMain />
              {/* <HeaderBottom /> */}
            </div>
          </div>
          <main className="flex flex-col">
            <div className="flex-1 flex flex-col">{children}</div>
          </main>
          <div className="border-t-2  border-gray-400">
            <Footer />
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
