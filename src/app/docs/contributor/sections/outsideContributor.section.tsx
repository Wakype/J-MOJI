import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-5">
        {data.contributor.outsideContributor.map((user, i) => {
          return (
            <div
              key={i}
              className="flex flex-row items-start gap-3 lg:flex-col lg:items-center"
            >
              <div className="h-fit w-fit overflow-hidden rounded border-[2px] border-secondary shadow-secondary">
                <Image
                  className=""
                  objectFit="cover"
                  objectPosition="center"
                  width={130}
                  height={0}
                  sizes="100vw"
                  quality={100}
                  alt={user.name}
                  src={user.imgUrl}
                />
              </div>

              <div className="flex flex-col">
                <Link href={user.githubUrl} target="_blank">
                  <h1 className="text-left text-lg font-semibold capitalize hover:text-primary hover:underline lg:text-center lg:text-xl">
                    {user.name}
                  </h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OutsideContributor;
