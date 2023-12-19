"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollButton && window.scrollY > 200) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= 200) {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`${
          showScrollButton
            ? "translate-x-0 rotate-0"
            : "translate-x-40 rotate-180"
        } fixed bottom-7 right-7 z-[999] rounded border-[2px] border-secondary bg-white p-[10px] shadow-lg shadow-secondary duration-700 hover:border-primary hover:text-primary hover:shadow-primary lg:bottom-10 lg:right-10 lg:p-3`}
      >
        <FaAngleUp className="text-sm text-secondary hover:text-primary lg:text-base" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
