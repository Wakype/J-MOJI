import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface CustomButtonProps extends ButtonProps {
  hoverStyles?: { [key: string]: string };
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bg,
  color,
  hoverStyles,
  children,
  onClick,
  to,
}) => {
  return (
    <Link href={to ?? ""}>
      <Button
        className="hover:-translate-y-1"
        size={"lg"}
        bg={bg}
        color={color}
        py={"25px"}
        px={"40px"}
        border={"2px solid #6c5f5b"}
        boxShadow={"0px 7px 0px #6c5f5b"}
        _hover={hoverStyles}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
};

const BUTTON_DATA = [
  {
    to: "docs/get-started",
    text: "Get Started",
    bg: "transparent",
    color: "secondary",
  },
  {
    to: "docs/category-list",
    text: "Kaomoji List",
    bg: "primary",
    color: "white",

    hoverStyles: { bg: "primary" },
  },
];

const HomeButton: FC<CustomButtonProps> = ({}) => {
  return (
    <div className="mt-16 flex items-center gap-x-8">
      {BUTTON_DATA.map((button, index) => (
        <CustomButton key={index} {...button}>
          {button.text}
        </CustomButton>
      ))}
    </div>
  );
};

export default HomeButton;
