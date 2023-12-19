import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  data: {
    contributor: {
      coreTeam: {
        name: string;
        imgUrl: string;
        githubUrl: string;
        description: string;
      }[];
    };
  };
}

const CoreTeam: FC<Props> = ({ data }) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 rounded border-[2px] border-secondary px-3 py-2 text-2xl font-bold capitalize shadow-secondary">
        core team
      </h1>

      <div className="flex w-full flex-col gap-y-5">
        {data.contributor.coreTeam.map((user, i) => {
          return (
            <div key={i} className="flex items-start gap-x-3">
              <div className="rounded border-[2px] border-secondary shadow-secondary">
                <Image
                  className=""
                  objectFit="cover"
                  objectPosition="center"
                  width={130}
                  height={0}
                  quality={100}
                  alt={user.name}
                  src={user.imgUrl}
                />
              </div>

              <div className="flex flex-col">
                <Link href={user.githubUrl} target="_blank">
                  <h1 className="text-lg font-bold capitalize hover:text-primary hover:underline lg:text-xl">
                    {user.name}
                  </h1>
                </Link>
                <p>{user.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreTeam;
