import { FC, useState } from "react";
import { useToast } from "@chakra-ui/react";

interface EmojiItemProps {
  emoji: string;
  containerClassName: string;
}

interface EmojiListProps {
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

const EmojiItem: FC<EmojiItemProps> = ({ emoji, containerClassName }) => {
  const toast = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(emoji);

    if (!isCopied) {
      toast({
        title: "Copied!",
        description: `${emoji} - emoji copied to clipboard.`,
        variant: "top-accent",
        status: "success",
        position: "bottom-right",
        duration: 1000,
      });
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 300);
    }
  };

  return (
    <div
      className={`${containerClassName} flex w-full cursor-pointer items-center justify-center rounded border-[2px] border-secondary p-8 shadow-secondary`}
      onMouseDown={(e) => {
        e.preventDefault();
        handleCopyToClipboard();
      }}
    >
      <p className="font-sans font-bold">{emoji}</p>
    </div>
  );
};

const EmojiList: FC<EmojiListProps> = ({ data }) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 w-fit rounded border-[2px] border-secondary px-3 py-2 text-lg font-bold capitalize shadow-secondary">
        emoji list
      </h1>

      <div className="grid grid-cols-6 gap-5">
        {data?.emoji_list.map((emoji, i) => (
          <EmojiItem
            key={i}
            emoji={emoji.emoji}
            containerClassName={data.containerClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default EmojiList;
