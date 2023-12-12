import { FC } from "react";

interface Props {}

const KaomojiDescription: FC<Props> = ({}) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 rounded border-[2px] border-secondary px-3 py-2 text-2xl font-bold capitalize shadow-secondary">
        kaomoji (顔文字): Japanese Emoticons
      </h1>

      <div className="flex flex-col gap-y-4">
        {/* dont blame me with this code bruhh */}
        <p>
          <span className="font-semibold capitalize text-primary">kaomoji</span>
          , an interesting kind of emoticons common in Japan, combining Japanese
          symbols with punctuation, is very enjoyable. The word “
          <span className="font-semibold capitalize text-primary">kaomoji</span>
          ” is derived from the Japanese words{" "}
          <span className="font-semibold capitalize text-primary">
            Kao (顔 – “Face”)
          </span>{" "}
          and{" "}
          <span className="font-semibold capitalize text-primary">
            Moji (文字 – “Character”)
          </span>
          .
        </p>
        <p>
          The{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>{" "}
          are used by Japanese culture, the culture that shows emotions and
          creativity, in order to express feelings. In contrast,{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>{" "}
          concentrate on eyes rather than a mouth like in the western emoticons.
          Each of them is laid out horizontally so that you can read them
          without tilting your head.
        </p>
        <p>
          Japanese love for drawing is evident in anime and manga, which
          resulted in{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>
          . The expressions in the eyes of these simple characters can convey a
          number of emotions.
        </p>
        <p>
          A few years ago, when communication through internet was young,{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>{" "}
          helped to clarify jokes and prevent confusion. Japanese emoticons have
          over 10,000 variations because of the complexity of the Japanese
          writings system and the storytelling ability of{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>
          .
        </p>
        <p>
          To add their meaning Japanese emoticons are grouped by the emotions,
          actions, or objects. These are cute{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>{" "}
          collected from different sources that I have found with more Japanese
          style. We could not include them all, but picked up the cutest ones
          and made our own.
        </p>
        <p>
          Discover the domain of Japanese emojis. Combine and choose bits of
          several{" "}
          <span className="font-semibold capitalize text-primary">kaomoji</span>{" "}
          to craft unique and funny combinations!
        </p>
      </div>
    </section>
  );
};

export default KaomojiDescription;
