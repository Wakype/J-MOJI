import { FC } from "react";
import "animate.css";

interface Props {}

const KaomjiKanji: FC<Props> = ({}) => {
  return (
    <section className="absolute -bottom-24 left-1/2 -z-40 hidden -translate-x-1/2 transform lg:block">
      <div className="animate__animated animate__fadeInUp animate__delay-5s">
        <p className="border-text select-none text-[120px] font-bold tracking-widest text-white opacity-30">
          顔文字
        </p>
      </div>
    </section>
  );
};

export default KaomjiKanji;
