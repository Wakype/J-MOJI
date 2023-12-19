import { FC } from "react";

interface Props {
  data: {
    contributor: {
      outsideContributor: {
        name: string;
        imgUrl: string;
        githubUrl: string;
      }[];
    };
  };
}

const OutsideContributor: FC<Props> = ({ data }) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 rounded border-[2px] border-secondary px-3 py-2 text-2xl font-bold capitalize shadow-secondary">
        contributor
      </h1>

      <div className="grid w-full grid-cols-2 gap-7">
        {data.contributor.outsideContributor.map((user, i) => {
          return (
            <div key={i} className="flex items-start gap-x-3">
              <div className="rounded border-[2px] border-secondary p-16 shadow-secondary"></div>

              <div className="flex flex-col">
                <h1 className="text-xl font-bold capitalize">{user.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OutsideContributor;
