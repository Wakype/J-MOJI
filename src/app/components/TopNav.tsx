"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import NAV_LIST from "../docs/NAV_LIST";

const TOPNAV_LIST = [
  { title: "home", to: "/" },
  { title: "docs", to: "/docs/get-started" },
  { title: "list", to: "/docs/category-list" },
];

const TopNav = () => {
  const path = usePathname().split("/").pop();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
        isScrolled
          ? "bg-[#f4f5f7] py-4 shadow-lg lg:py-5"
          : " bg-transparent py-7"
      } fixed top-0 z-50 flex w-screen items-center justify-between px-5 lg:px-20`}
    >
      <Link href={"/"} className="hover-logo">
        <div className="rounded border-[2px] border-secondary px-3 py-2 shadow-secondary">
          <h1 className="select-none text-xs font-bold uppercase text-secondary lg:text-base">
            ╰(▔∀▔)╯ J-Moji
          </h1>
        </div>
      </Link>

      <div className="hidden items-center gap-x-10 lg:flex">
        {TOPNAV_LIST.map((_, i) => (
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
      <div className="block lg:hidden" ref={btnRef} onClick={onOpen}>
        <div
          className={`${
            isOpen ? "translate-x-20" : "translate-x-0"
          } cursor-pointer rounded border-[2px] border-secondary p-2 shadow-secondary duration-700`}
        >
          <FaBars className="text-xs" />
        </div>{" "}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <div className="mt-16 flex w-full flex-col gap-y-10 overflow-y-scroll">
              <div className="flex w-full flex-col gap-y-4">
                <div>
                  <h1 className="text-lg font-bold capitalize">
                    documentation
                  </h1>
                </div>

                <div className="ml-5 flex flex-col gap-y-4">
                  {NAV_LIST.docs.map((nav, i) => {
                    return (
                      <Link
                        href={nav.to}
                        onClick={onClose}
                        key={i}
                        className="nav-hover flex items-center gap-x-5"
                      >
                        <div
                          className={`${
                            nav.to.split("/").pop() === path
                              ? "border-primary text-primary shadow-primary"
                              : " border-secondary text-secondary shadow-secondary"
                          } flex-shrink-0 rounded border-[2px] p-[10px]`}
                        >
                          {nav.icon}
                        </div>
                        <p
                          className={`${
                            nav.to.split("/").pop() === path
                              ? "text-primary"
                              : "text-secondary"
                          } font-medium capitalize`}
                        >
                          {nav.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-4">
                <div>
                  <h1 className="text-lg font-bold capitalize">
                    category emoji
                  </h1>
                </div>

                <div className="ml-5 flex flex-col gap-y-4">
                  {NAV_LIST.list.map((nav, i) => {
                    return (
                      <Link
                        href={nav.to}
                        onClick={onClose}
                        key={i}
                        className="nav-hover flex items-center gap-x-5"
                      >
                        <div
                          className={`${
                            nav.to.split("/").pop() === path
                              ? "border-primary text-primary shadow-primary"
                              : " border-secondary text-secondary shadow-secondary"
                          } flex-shrink-0 rounded border-[2px] p-[10px]`}
                        >
                          {nav.icon}
                        </div>
                        <p
                          className={`${
                            nav.to.split("/").pop() === path
                              ? "text-primary"
                              : "text-secondary"
                          } font-medium capitalize`}
                        >
                          {nav.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default TopNav;
