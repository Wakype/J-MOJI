import { NextPage } from "next";
import EmoticonGrid from "../../sections/emoticonGrid.section";
import EMOTICON_LIST from "@/CONTRIBUTOR/EMOJI_LIST.json";

interface Props {}

const EmojiList: NextPage<Props> = ({}) => {
  return (
    <div>
      <EmoticonGrid
        data={EMOTICON_LIST.emoji}
        emojiWidth="w-[100px]"
        emojiSize="text-xs"
        className="gap-7"
      />
    </div>
  );
};

export default EmojiList;
