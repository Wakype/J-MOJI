import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";
import { NextPage } from "next";
import { HowToContribute, KaomojiDescription } from "./sections";

interface Props {}

const GetStarted: NextPage<Props> = ({}) => {
  const breadcrumbItems = [{ title: "Get Started", to: "/docs/get-started" }];

  return (
    <div className="">
      <section>
        <CustomBreadCrumbs items={breadcrumbItems} />
      </section>

      <KaomojiDescription />

      <HowToContribute />
    </div>
  );
};

export default GetStarted;
