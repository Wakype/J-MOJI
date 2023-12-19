import { FC } from "react";
import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

interface Props {
  className?: string;
}

const Watermark: FC<Props> = ({ className }) => {
  return (
    <section
      className={`${className} absolute bottom-5 flex w-full justify-center lg:items-end lg:justify-between lg:px-5`}
    >
      <div className="hidden flex-col rounded border-[2px] border-secondary px-3 py-2 shadow-secondary lg:flex">
        {" "}
        <p className="font-mono text-[10px] font-semibold uppercase">
          j-moji 2023 -{" "}
          <Link
            href="https://www.instagram.com/im.waky/"
            target="_blank"
            className="hover:text-primary"
          >
            @im.waky
          </Link>
        </p>
        <p className="font-mono text-[10px] font-semibold capitalize">
          made with <span className="text-red-500">❤️</span> and{" "}
          <span className="font-sans text-red-500">╰(▔∀▔)╯</span> from indonesia
        </p>
      </div>

      <div className="flex gap-x-3 lg:items-end">
        <Link href="https://www.instagram.com/im.waky/" target="_blank">
          <div className="hover-social rounded border-[2px] border-secondary p-[6px] shadow-secondary hover:border-primary hover:shadow-primary">
            <FaInstagram className="text-lg text-secondary" />
          </div>
        </Link>
        <Link href="https://github.com/wakype" target="_blank">
          <div className="hover-social rounded border-[2px] border-secondary p-[6px] shadow-secondary hover:border-primary hover:shadow-primary">
            <FaGithub className="text-lg text-secondary" />
          </div>
        </Link>
        <Link href="https://www.tiktok.com/@im.wakype" target="_blank">
          <div className="hover-social rounded border-[2px] border-secondary p-[6px] shadow-secondary hover:border-primary hover:shadow-primary">
            <FaTiktok className="text-lg text-secondary" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Watermark;
