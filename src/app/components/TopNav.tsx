"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NAV_LIST = [
  { title: "home", to: "/" },
  { title: "docs", to: "/docs/get-started" },
  { title: "list", to: "/docs/category-list" },
];

const TopNav = () => {
  const path = usePathname().split("/").pop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled ? "bg-[#f4f5f7] py-5 shadow-lg" : " bg-transparent py-7"
      } fixed top-0 z-50 flex w-screen items-center justify-between px-20`}
    >
      <Link href={"/"} className="hover-logo">
        <div className="rounded border-[2px] border-secondary px-3 py-2 shadow-secondary">
          <h1 className="text-base font-bold uppercase text-secondary">
            ╰(▔∀▔)╯ J-Moji
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-x-10">
        {NAV_LIST.map((_, i) => (
          <Link
            key={i}
            className={`${
              _.to.split("/").pop() === path ? "text-primary" : ""
            } font-semibold capitalize hover:text-primary`}
            href={_.to}
          >
            {_.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
