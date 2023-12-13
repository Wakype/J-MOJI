import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";
import { NextPage } from "next";
import { HowToContribute, WhatIsKaomoji } from "./sections";

interface Props {}

const GetStarted: NextPage<Props> = ({}) => {
  const breadcrumbItems = [{ title: "Get Started", to: "/docs/get-started" }];

  return (
    <div className="">
      <section>
        <CustomBreadCrumbs items={breadcrumbItems} />
      </section>

      <WhatIsKaomoji />

      <HowToContribute />
    </div>
  );
};

export default GetStarted;
