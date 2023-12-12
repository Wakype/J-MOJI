import Link from "next/link";
import React from "react";

interface cardProps {
  emoji: string;
  category: string;
  description: string;
  bgColor: string;
  to: string;
  containerClassName?: string;
  emojiWidth?: string;
  emojiSize?: string;
}
interface sectionProps {
  data: any[];
  className?: string;
  emojiWidth?: string;
  emojiSize?: string;
}

const EmoticonCard: React.FC<cardProps> = ({
  emoji,
  category,
  description,
  bgColor,
  containerClassName,
  to,
  emojiWidth,
  emojiSize,
}) => (
  <div
    className={`${containerClassName} w-full cursor-pointer overflow-hidden rounded-lg border-[2px] border-secondary shadow-[0px_7px_0px_#6c5f5b]`}
  >
    <Link href={to} className="flex h-full w-full">
      <div
        className={`${emojiWidth} ${bgColor} flex w-[150px] flex-shrink-0 items-center justify-center`}
      >
        <p className={`${emojiSize} text-base font-bold text-white`}>{emoji}</p>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="mb-3 text-xl font-bold capitalize">{category}</h1>
        <p className="line-clamp-3 text-base">{description}</p>
      </div>
    </Link>
  </div>
);

const EmoticonGrid: React.FC<sectionProps> = ({
  className,
  data,
  emojiWidth = "w-[150px]",
  emojiSize = "text-base",
}) => (
  <div className={`${className} grid w-full grid-cols-3`}>
    {data.map((emoticon, index) => (
      <EmoticonCard
        key={index}
        {...emoticon}
        emojiWidth={emojiWidth}
        emojiSize={emojiSize}
      />
    ))}
  </div>
);

export default EmoticonGrid;
