import { FC } from "react";

interface Props {
  data:
    | {
        to: string;
        emoji: string;
        category: string;
        description: string;
        bgColor: string;
        containerClassName: string;
        emoji_list: { emoji: string }[];
      }
    | undefined;
}

const EmojiDescription: FC<Props> = ({ data }) => {
  return (
    <section className="mb-20">
      <div
        className={`${data?.bgColor} mb-6 flex w-full items-center justify-between rounded border-[2px] border-secondary px-5 py-8 shadow-secondary lg:px-10`}
      >
        <h1 className="text-lg font-bold uppercase tracking-widest text-white lg:text-xl">
          {data?.category}
        </h1>
        <h1 className="font-sans text-xl font-bold text-white lg:text-2xl">
          {data?.emoji}
        </h1>
        <h1 className="text-lg font-bold uppercase tracking-widest text-white lg:text-xl">
          {data?.category}
        </h1>
      </div>

      <div>
        <p className="font-sans">{data?.description}</p>
      </div>
    </section>
  );
};

export default EmojiDescription;
