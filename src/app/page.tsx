import { NextPage } from "next";
import {
  EmoticonGrid,
  HomeButton,
  KaomjiKanji,
  MobileEmoticonGrid,
  OrnamentEmoji,
  Watermark,
} from "./sections";
import HOME_EMOTICON_LIST from "./HOME_EMOTICON_LIST";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <main className="relative flex h-screen w-screen items-center overflow-hidden lg:items-baseline pt-10 lg:pt-40">
      <section className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col gap-y-3 px-5 lg:w-[750px] lg:px-0">
          <h1 className="text-center text-[25px] font-extrabold lg:text-[40px]">
            Add fun{" "}
            <span className="underline-dotted capitalize text-primary underline-offset-[5px]">
              kaomoji
            </span>{" "}
            to your messages with just a click for livelier chats!
          </h1>
          <h2 className="text-center font-medium">
            <span className="font-bold capitalize text-primary">
              Kaomoji (顔文字)
            </span>{" "}
            is a popular Japanese emoticon style crafted from characters and
            punctuation, conveying emotions in text and online communication.
          </h2>
        </div>

        <HomeButton />

        <EmoticonGrid
          className="mt-28 hidden px-32 lg:grid"
          data={HOME_EMOTICON_LIST}
        />
        <MobileEmoticonGrid
          className="mt-7 block overflow-visible lg:hidden"
          data={HOME_EMOTICON_LIST}
        />
      </section>

      <KaomjiKanji />

      <Watermark />

      <OrnamentEmoji />
    </main>
  );
};

export default Home;
