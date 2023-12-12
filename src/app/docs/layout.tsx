"use client";
import { NextPage } from "next";
import { ReactNode } from "react";
import NAV_LIST from "./NAV_LIST";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  const path = usePathname().split("/").pop();

  return (
    <div className="grid grid-cols-9">
      <section className="noScrollbar sticky top-0 col-span-2 flex h-screen w-full flex-col gap-y-10 bg-[#f4f5f7] px-20 pt-32 shadow-lg shadow-[#6C5F5B]">
        <div className="flex w-full flex-col gap-y-4">
          <div>
            <h1 className="text-lg font-bold capitalize">documentation</h1>
          </div>

          <div className="ml-5 flex flex-col gap-y-4">
            {NAV_LIST.docs.map((nav, i) => {
              return (
                <Link
                  href={nav.to}
                  key={i}
                  className="nav-hover flex items-center gap-x-5"
                >
                  <div
                    className={`${
                      nav.to === path
                        ? "border-primary text-primary shadow-primary"
                        : " border-secondary text-secondary shadow-secondary"
                    } flex-shrink-0 rounded border-[2px] p-[10px]`}
                  >
                    {nav.icon}
                  </div>
                  <p
                    className={`${
                      nav.to === path ? "text-primary" : "text-secondary"
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
            <h1 className="text-lg font-bold capitalize">emoji list</h1>
          </div>

          <div className="ml-5 flex flex-col gap-y-4">
            {NAV_LIST.list.map((nav, i) => {
              return (
                <Link
                  href={nav.to}
                  key={i}
                  className="nav-hover flex items-center gap-x-5"
                >
                  <div
                    className={`${
                      nav.to === path
                        ? "border-primary text-primary shadow-primary"
                        : " border-secondary text-secondary shadow-secondary"
                    } flex-shrink-0 rounded border-[2px] p-[10px]`}
                  >
                    {nav.icon}
                  </div>
                  <p
                    className={`${
                      nav.to === path ? "text-primary" : "text-secondary"
                    } font-medium capitalize`}
                  >
                    {nav.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-span-7 w-full px-12 pt-32">{children}</section>
    </div>
  );
};

export default Layout;
