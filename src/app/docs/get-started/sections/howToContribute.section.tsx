import { FC } from "react";

interface Props {}

const HowToContribute: FC<Props> = ({}) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 rounded border-[2px] border-secondary px-3 py-2 text-2xl font-bold capitalize shadow-secondary">
        contributing to J-MOJI
      </h1>
      <div className="flex flex-col gap-y-4"></div>
    </section>
  );
};

export default HowToContribute;
