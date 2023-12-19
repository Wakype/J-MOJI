"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface cardProps {
  emoji: string;
  category: string;
  description: string;
  bgColor: string;
  to: string;
  containerClassName?: string;
  emojiWidth?: string;
  emojiSize?: string;
  titleSize?: string;
}
interface sectionProps {
  data: any[];
  className?: string;
  emojiWidth?: string;
  emojiSize?: string;
  titleSize?: string;
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
  titleSize,
}) => (
  <div
    className={`${containerClassName} mx-auto w-[90%] cursor-pointer overflow-hidden rounded-lg border-[2px] border-secondary shadow-[0px_7px_0px_#6c5f5b]`}
  >
    <Link href={to} className="flex h-full w-full">
      <div
        className={`${emojiWidth} ${bgColor} flex flex-shrink-0 items-center justify-center`}
      >
        <p className={`${emojiSize} font-bold text-white`}>{emoji}</p>
      </div>
      <div className="flex flex-col p-5">
        <h1 className={`${titleSize} mb-3 font-bold capitalize`}>{category}</h1>
        <p className="line-clamp-3 font-sans text-base">{description}</p>
      </div>
    </Link>
  </div>
);

const MobileEmoticonGrid: React.FC<sectionProps> = ({
  className,
  data,
  emojiWidth = "w-[150px]",
  emojiSize = "text-base",
  titleSize = "text-xl",
}) => (
  <div className={`${className} w-full`}>
    <Swiper
      className="w-full"
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        pauseOnMouseEnter: false,
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {data.map((emoticon, index) => (
        <SwiperSlide key={index} className="w-full py-5">
          <EmoticonCard
            emojiWidth={emojiWidth}
            emojiSize={emojiSize}
            titleSize={titleSize}
            {...emoticon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default MobileEmoticonGrid;
