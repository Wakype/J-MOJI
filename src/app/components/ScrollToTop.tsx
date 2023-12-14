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
        } fixed  bottom-10 right-10 z-[999] rounded border-[2px] border-secondary bg-white p-3 shadow-lg shadow-secondary duration-700 hover:border-primary hover:text-primary hover:shadow-primary`}
      >
        <FaAngleUp className="text-secondary hover:text-primary" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
