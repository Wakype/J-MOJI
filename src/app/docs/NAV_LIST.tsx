import {
  FaBookOpen,
  FaFaceAngry,
  FaFaceGrimace,
  FaFaceGrinHearts,
  FaFaceGrinSquint,
  FaFaceSadTear,
  FaFaceSmileBeam,
  FaList,
} from "react-icons/fa6";

const NAV_LIST = {
  docs: [
    { title: "get started", to: "get-started", icon: <FaBookOpen /> },
    { title: "emoji list", to: "list", icon: <FaList /> },
  ],

  list: [
    { title: "joy", to: "list/joy", icon: <FaFaceSmileBeam /> },
    { title: "anger", to: "list/anger", icon: <FaFaceAngry /> },
    { title: "sadness", to: "list/sadness", icon: <FaFaceSadTear /> },
    { title: "love", to: "list/love", icon: <FaFaceGrinHearts /> },
    {
      title: "embarrassment",
      to: "list/embarrassment",
      icon: <FaFaceGrinSquint />,
    },
    { title: "fear", to: "list/fear", icon: <FaFaceGrimace /> },
  ],
};

export default NAV_LIST;
