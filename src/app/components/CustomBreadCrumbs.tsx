import React, { FC } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";

interface BreadCrumbItem {
  title: string;
  to: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
}

const CustomBreadCrumbs: FC<BreadCrumbsProps> = ({ items }) => {
  return (
    <div className="noScrollbar mb-7 w-full overflow-x-scroll px-5 scroll-pr-5 rounded border-[2px] border-secondary py-1 shadow-secondary lg:w-fit lg:px-3">
      <Breadcrumb
        spacing="8px"
        separator={<FaChevronRight className="text-xs text-secondary" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/docs/get-started"}>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => (
          <BreadcrumbItem
            key={index}
            isCurrentPage={index === items.length - 1}
            width={"100%"}
          >
            <BreadcrumbLink
              href={item.to}
              color={index === items.length - 1 ? "primary" : "secondary"}
              textTransform={"capitalize"}
              width={"max-content"}
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {item.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadCrumbs;
