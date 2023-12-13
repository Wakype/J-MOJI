import { NextPage } from "next";
import EmoticonGrid from "../../sections/emoticonGrid.section";
import EMOTICON_LIST from "@/CONTRIBUTOR/EMOJI_LIST.json";
import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";

interface Props {}

const CategoryList: NextPage<Props> = ({}) => {
  const breadcrumbItems = [{ title: "category list", to: "category-list" }];
  return (
    <div>
      <section>
        <CustomBreadCrumbs items={breadcrumbItems} />
      </section>

      <EmoticonGrid
        data={EMOTICON_LIST.emoji}
        emojiWidth="w-[100px]"
        emojiSize="text-xs"
        titleSize="text-lg"
        className="gap-7"
      />
    </div>
  );
};

export default CategoryList;
