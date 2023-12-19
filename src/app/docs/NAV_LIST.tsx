import {
  FaBookOpen,
  FaFaceAngry,
  FaFaceGrimace,
  FaFaceGrinHearts,
  FaFaceGrinSquint,
  FaFaceSadTear,
  FaFaceSmileBeam,
  FaHouse,
  FaList,
  FaPeopleGroup,
} from "react-icons/fa6";

const NAV_LIST = {
  docs: [
    { title: "home", to: "/", icon: <FaHouse /> },
    { title: "get started", to: "/docs/get-started", icon: <FaBookOpen /> },
    { title: "category list", to: "/docs/category-list", icon: <FaList /> },
    { title: "contributor", to: "/docs/contributor", icon: <FaPeopleGroup /> },
  ],

  list: [
    { title: "joy", to: "/docs/emoji-list/joy", icon: <FaFaceSmileBeam /> },
    { title: "anger", to: "/docs/emoji-list/anger", icon: <FaFaceAngry /> },
    {
      title: "sadness",
      to: "/docs/emoji-list/sadness",
      icon: <FaFaceSadTear />,
    },
    { title: "love", to: "/docs/emoji-list/love", icon: <FaFaceGrinHearts /> },
    {
      title: "embarrassment",
      to: "/docs/emoji-list/embarrassment",
      icon: <FaFaceGrinSquint />,
    },
    { title: "fear", to: "/docs/emoji-list/fear", icon: <FaFaceGrimace /> },
  ],
};

export default NAV_LIST;
