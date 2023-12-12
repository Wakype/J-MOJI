import { FC } from "react";
import { ListItem, OrderedList, Code } from "@chakra-ui/react";

interface Props {}

const HowToContribute: FC<Props> = ({}) => {
  return (
    <section className="mb-20">
      <h1 className="mb-6 rounded border-[2px] border-secondary px-3 py-2 text-2xl font-bold capitalize shadow-secondary">
        contributing to J-MOJI
      </h1>

      <div className="flex flex-col gap-y-10">
        <p>
          Thank you for thinking about helping with J-MOJI! Before you jump in,
          please take a look at the guidelines here. Its super important to do a great job and contribute with
          whats best for everyone.
        </p>

        <div className="flex flex-col">
          <h2 className="mb-6 w-fit rounded border-[2px] border-secondary px-3 py-2 text-lg font-bold capitalize shadow-secondary">
            design guideline
          </h2>
          <p>
            {" "}
            Thank you for thinking about helping with J-MOJI! Before you jump
            in, please take a look at the guidelines here. Its super important to do a great job and contribute with
            whats best for everyone.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-6 w-fit rounded border-[2px] border-secondary px-3 py-2 text-lg font-bold capitalize shadow-secondary">
            how to contribute
          </h2>
          <div>
            <OrderedList color={"secondary"} spacing={3}>
              <ListItem>
                <Code>Fork</Code> the repository.
              </ListItem>
              <ListItem>
                Create a new topic <Code>branch</Code> on your local forked
                copy.
              </ListItem>
              <ListItem>
                <Code>Push</Code> your topic branch up to your fork.
              </ListItem>
              <ListItem>
                <Code>Open a Pull Request</Code> with a clear title and
                description against the <Code>main</Code> branch.
              </ListItem>
            </OrderedList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToContribute;
