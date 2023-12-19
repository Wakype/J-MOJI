"use client";
import CustomBreadCrumbs from "@/app/components/CustomBreadCrumbs";
import { NextPage } from "next";
import EMOJI_LIST from "@/CONTRIBUTOR/EMOJI_LIST.json";
import { EmojiDescription, EmojiList } from "./sections";
import React from "react";

interface Props {
  params: {
    category: string;
  };
}

const EmojiDetail: NextPage<Props> = ({ params }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryData, setCategoryData] = React.useState<any>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = EMOJI_LIST.emoji.find(
          (item) => item.category === params.category,
        );
        await new Promise((resolve) => setTimeout(resolve, 500));

        setCategoryData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.category]);

  const breadcrumbItems = [
    { title: "emoji list", to: "/docs/category-list" },
    { title: params.category, to: params.category },
  ];

  return (
    <div className="">
      <section>
        <CustomBreadCrumbs items={breadcrumbItems} />
      </section>

      {isLoading && (
        <p className="font-bold uppercase tracking-wider">
          <span className="font-sans tracking-normal">(」°ロ°)」</span>{" "}
          Loading...
        </p>
      )}

      {!isLoading && (
        <>
          <EmojiDescription data={categoryData} />
          <EmojiList data={categoryData} />
        </>
      )}

    </div>
  );
};

export default EmojiDetail;
