import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IoMdArrowUp } from "react-icons/io";

function App() {
  const navbarRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    navbarRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-custom-gradient">
      <div ref={navbarRef}>
        <Header />
      </div>
      <div className="relative z-10 min-h-screen">
        <Outlet />
      </div>
      {showScrollArrow && (
        <span
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cursor-pointer fixed bottom-4 lg:right-4 right-7 bg-gradient-to-l from-gray-400 to-zinc-300 rounded-full px-5 py-5 text-3xl font-bold text-black z-50"
        >
          <IoMdArrowUp />
        </span>
      )}
      <Footer />
    </main>
  );
}

export default App;
