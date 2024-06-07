import {
    ClockIcon,
    PaperAirplaneIcon,
    ReceiptRefundIcon,
    DocumentIcon,
    PlusCircleIcon,
    ListBulletIcon,
    DocumentTextIcon,
    CommandLineIcon,
    TicketIcon,
    HeartIcon,
    GiftIcon,
  } from "@heroicons/react/24/outline";
  import { SiTed } from "react-icons/si";
  import { FaUniversity } from "react-icons/fa";
  import { PiTelevision } from "react-icons/pi";
  import { BsCalendarDate } from "react-icons/bs";
  import { GrScheduleNew } from "react-icons/gr";
  import { RiTeamFill } from "react-icons/ri";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { MdLocalMovies } from "react-icons/md";
  import { PiMicrophoneStageFill } from "react-icons/pi";
  import { FaHandshake } from "react-icons/fa";
  import { FaUsers } from "react-icons/fa";

  export const navigationLinks = [
    {
      name: "About Us",
      subLinks: [
        {
          name: "TED",
          description: "Ideas Worth Spreading",
          link: "/",
          color: "red",
          icon: <SiTed size="25px" color="white" />,
        },
        {
          name: "TEDx",
          description: "Independent TED Events",
          link: "/",
          color: "#c40253",
          icon: <FaUniversity size="25px" color="white"/>,
        },
        {
          name: "TEDxAveLorne",
          description: "Local TEDx Event",
          link: "/",
          color: "#0a75f0",
          icon: <PiTelevision size="25px" color="white" />,
        },
      ],
    },
    {
      name: "Event",
      subLinks: [
        {
          name: "Date & Time",
          description: "Schedule & Location",
          link: "/event",
          color: "#be02cc",
          icon: <BsCalendarDate size="25px" color="white" />,
        },
        {
          name: "Agenda",
          description: "Program Details",
          link: "/event",
          color: "#4a18f0",
          icon: <GrScheduleNew size="25px" color="white" />,
        },
      ],
    },
    {
      name: "Team",
      link: "/team",
      subLinks: [
        {
          name: "Team",
          description: "Our Community",
          link: "/team",
          color: "#f2b602",
          icon: <RiTeamFill size="25px" color="white" />,
        },
      ],
    },
    {
      name: "Speakers",
      link: "/speakers",
      subLinks: [
        {
          name: "Speakers",
          description: "Featured Presenters",
          link: "/speakers",
          color: "#00b536",
          icon: <FaMicrophoneAlt size="25px" color="white" />,
        },
      ],
    },
    {
      name: "Media",
      link: "/media",
      subLinks: [
        {
          name: "Media",
          description: "Event Highlights",
          link: "/media",
          color: "#d40083",
          icon: <MdLocalMovies size="25px" color="white" />,
        },
      ],
    },
    {
      name: "Join Us",
      link: "/joinus",
      subLinks: [
        {
          name: "Members",
          description: "Our Community",
          link: "/joinus/team",
          color: "#26db02",
          icon: <FaUsers size="25px" />,
        },
        {
          name: "Speakers",
          description: "Featured Presenters",
          link: "/joinus/speaker",
          color: "#3f5af2",
          icon: <PiMicrophoneStageFill size="25px" color="white" />,
        },
        {
          name: "Sponsors",
          description: "Event Supporters",
          link: "/joinus/sponsor",
          color: "#fa3e3e",
          icon: <FaHandshake size="25px" color="white" />,
        },
      ],
    },
  ];
  