"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClipboard,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon="fa-solid fa-house" />
//<FontAwesomeIcon icon="fa-solid fa-list" />
//<FontAwesomeIcon icon="fa-solid fa-check" />
//<FontAwesomeIcon icon="fa-regular fa-clipboard" />

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: <FontAwesomeIcon icon={faList} />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <FontAwesomeIcon icon={faCheck} />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <FontAwesomeIcon icon={faClipboard} />,
    link: "/incomplete",
  },
];

export default menu;
