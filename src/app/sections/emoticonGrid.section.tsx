import React from "react";

const emoticons = [
  {
    emoji: "(* ^ ω ^)",
    category: "joy",
    description:
      "If you want to create joyful, happy or laughing Japanese emoticons use high up eyes.",
    bgColor: "bg-yellow-500",
    containerClassName: "-rotate-[8deg]",
  },
  {
    emoji: "(＃`Д´)",
    category: "anger",
    description: "The secret of angry or evil emoticons is in their eyes.",
    bgColor: "bg-red-500",
    containerClassName: "rotate-[8deg]",
  },
  {
    emoji: "o(〒﹏〒)o",
    category: "sadness",
    description: "Sad or crying emoticons are quite easy to create.",
    bgColor: "bg-blue-500",
    containerClassName: "-rotate-[8deg]",
  },
];

interface cardProps {
  emoji: string;
  category: string;
  description: string;
  bgColor: string;
  containerClassName: string;
}

const EmoticonCard: React.FC<cardProps> = ({
  emoji,
  category,
  description,
  bgColor,
  containerClassName,
}) => (
  <div
    className={`${containerClassName} flex w-full overflow-hidden rounded-lg border-[2px] border-secondary shadow-[0px_7px_0px_#6c5f5b]`}
  >
    <div
      className={`flex w-[150px] flex-shrink-0 items-center justify-center ${bgColor}`}
    >
      <p className="font-bold text-white">{emoji}</p>
    </div>
    <div className="flex flex-col p-5">
      <h1 className="mb-3 text-xl font-bold capitalize">{category}</h1>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const EmoticonGrid: React.FC = () => (
  <div className="mt-28 grid w-full grid-cols-3 px-32">
    {emoticons.map((emoticon, index) => (
      <EmoticonCard key={index} {...emoticon} />
    ))}
  </div>
);

export default EmoticonGrid;
