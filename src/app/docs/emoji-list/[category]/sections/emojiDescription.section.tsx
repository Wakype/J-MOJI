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
        className={`${data?.bgColor} mb-6 flex w-full items-center justify-between rounded border-[2px] border-secondary px-10 py-8 shadow-secondary`}
      >
        <h1 className="text-xl font-bold uppercase tracking-widest text-white">
          {data?.category}
        </h1>
        <h1 className="font-sans text-2xl font-bold text-white">
          {data?.emoji}
        </h1>
        <h1 className="text-xl font-bold uppercase tracking-widest text-white">
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
