"use client";
import React, { FC, memo } from "react";
import "animate.css";

interface Props {}

interface EmojiProps {
  position: string;
  rotation: string;
  size: string;
  text: string;
  className?: string;
}

const emojis: EmojiProps[] = [
  {
    position: "right-[5rem] top-[20rem]",
    rotation: "-rotate-[20deg]",
    size: "text-3xl",
    text: "＼(≧▽≦)／",
    className: "animate__delay-2s",
  },
  {
    position: "right-[13rem] top-[27rem]",
    rotation: "rotate-[25deg]",
    size: "text-4xl",
    text: "(〜￣▽￣)〜",
    className: "animate__delay-3s",
  },
  {
    position: "-right-[5rem] top-[50rem]",
    rotation: "rotate-[15deg]",
    size: "text-8xl",
    text: "(* ^ ω ^)",
    className: "blur-sm animate__delay-4s",
  },
  {
    position: "left-[8rem] top-[17rem]",
    rotation: "",
    size: "text-2xl",
    text: "(；￣Д￣)",
    className: "animate__delay-2s",
  },
  {
    position: "left-[3rem] top-[24rem]",
    rotation: "-rotate-[15deg]",
    size: "text-5xl",
    text: "(つ≧▽≦)つ",
    className: "animate__delay-3s",
  },
  {
    position: "left-[12rem] top-[50rem]",
    rotation: "rotate-[30deg]",
    size: "text-3xl",
    text: "(>ᴗ•)",
    className: "animate__delay-2s",
  },
  {
    position: "left-1/2 top-[50rem]",
    rotation: "-rotate-[7deg]",
    size: "text-4xl",
    text: "╰(▔∀▔)╯",
    className: "animate__delay-4s",
  },
  {
    position: "left-[20rem] top-[8rem]",
    rotation: "-rotate-[20deg]",
    size: "text-7xl",
    text: "(*・ω・)ﾉ",
    className: "blur-sm animate__delay-2s",
  },
  {
    position: "right-[27rem] top-[8rem]",
    rotation: "rotate-[10deg]",
    size: "text-2xl",
    text: "( ͡° ͜ʖ ͡°)",
    className: "animate__delay-3s",
  },
];

const OrnamentEmoji: FC<Props> = memo(({}) => {
  return (
    <section className="absolute top-0 -z-40 flex h-full w-full justify-between">
      {emojis.map((emoji, index) => (
        <div key={index} className={`${emoji.rotation} absolute ${emoji.position}`}>
          <p
            className={`${emoji.className} font-sans ${emoji.size} animate__animated animate__fadeInUp font-bold text-primary`}
          >
            {emoji.text}
          </p>
        </div>
      ))}
    </section>
  );
});

OrnamentEmoji.displayName = "OrnamentEmoji";

export default OrnamentEmoji;
