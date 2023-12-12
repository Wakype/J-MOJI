import { NextPage } from "next";
import {
  EmoticonGrid,
  HomeButton,
  KaomjiKanji,
  OrnamentEmoji,
  Watermark,
} from "./sections";
import HOME_EMOTICON_LIST from "./HOME_EMOTICON_LIST";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <main className="relative h-screen w-screen overflow-hidden pt-40">
      <section className="flex w-full flex-col items-center">
        <div className="flex w-[750px] flex-col gap-y-3">
          <h1 className="text-center text-[40px] font-extrabold">
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

        <EmoticonGrid className="mt-28 px-32" data={HOME_EMOTICON_LIST}/>
      </section>

      <KaomjiKanji />

      <Watermark />

      <OrnamentEmoji />
    </main>
  );
};

export default Home;
