import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";
import { NextPage } from "next";
import { CoreTeam, OutsideContributor } from "./sections";
import EMOJI_LIST from "@/CONTRIBUTOR/EMOJI_LIST.json";

interface Props {}

const Contributor: NextPage<Props> = ({}) => {
  const breadcrumbItems = [{ title: "contributor", to: "/docs/contributor" }];
  return (
    <div>
      <section>
        <CustomBreadCrumbs items={breadcrumbItems} />
      </section>

      <CoreTeam data={EMOJI_LIST} />

      <OutsideContributor data={EMOJI_LIST} />
    </div>
  );
};

export default Contributor;
