import {
  FaBookOpen,
  FaFaceAngry,
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
  ],
};

export default NAV_LIST;
