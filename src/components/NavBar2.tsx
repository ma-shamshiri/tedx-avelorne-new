import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  HStack,
  Image,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/images/logo.png";
import tedxWhite from "../assets/images/tedxWhite.png";
import tedxBlack from "../assets/images/tedxBlack.png";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "aboutUs",
    children: [
      {
        label: "ted",
        subLabel: "tedSubLabel",
        href: "/",
      },
      {
        label: "tedx",
        subLabel: "tedxSubLabel",
        href: "/",
      },
      {
        label: "tedxavelorne",
        subLabel: "tedxavelorneSubLabel",
        href: "/",
      },
    ],
  },
  {
    label: "event",
    children: [
      {
        label: "dateAndTime",
        subLabel: "dateAndTimeSubLabel",
        href: "/event/",
      },
      // {
      //   label: "Location",
      //   subLabel: "Trending Design to inspire you",
      //   href: "#",
      // },
      {
        label: "agenda",
        subLabel: "agendaSubLabel",
        href: "/event/",
      },
      // {
      //   label: "Registration",
      //   subLabel: "Up-and-coming Designers",
      //   href: "#",
      // },
    ],
  },
  {
    label: "team",
    href: "/team/",
  },
  {
    label: "speakers",
    href: "/speakers/",
  },
  // {
  //   label: "partners",
  //   href: "#",
  // },
  {
    label: "media",
    href: "/media/",
  },
  {
    label: "joinUs",
    children: [
      {
        label: "members",
        subLabel: "membersSubLabel",
        href: "/joinus/team/",
      },
      {
        label: "speakers",
        subLabel: "speakersSubLabel",
        href: "/joinus/speaker/",
      },
      {
        label: "sponsors",
        subLabel: "sponsorsSubLabel",
        href: "/joinus/sponsor/",
      },
    ],
  },
];

const DesktopSubNav: React.FC<NavItem> = ({
  label,
  href,
  subLabel,
}: NavItem) => {
  const { t } = useTranslation();

  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("pink.50", "gray.900"),
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{
              color: `${useColorModeValue("red", "red")}`,
            }}
            fontWeight={"500"}
          >
            {t(label)}
          </Text>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.700", "gray.300")}
            _groupHover={{
              color: `${useColorModeValue("black", "white")}`,
            }}
          >
            {subLabel && t(subLabel)}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const DesktopNav: React.FC = () => {
  const { t } = useTranslation();

  const linkColor = useColorModeValue("gray.700", "gray.200");
  const linkHoverColor = useColorModeValue("gray.900", "white");
  const popoverContentBgColor = useColorModeValue(
    "rgb(241,241,241)",
    "gray.800"
  );

  return (
    <Stack direction={"row"} spacing={{ md: 5, lg: 5, xl: 14 }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={{ md: "1.5rem", lg: "1.5rem", xl: "1.8rem" }}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {t(navItem.label)}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNavItem: React.FC<NavItem> = ({
  label,
  children,
  href,
}: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {t(label)}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {t(child.label)}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav: React.FC = () => {
  return (
    <Stack
      bg={useColorModeValue("rgb(241,241,241)", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const NavBar2: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsNavVisible(currentPosition < scrollPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

  return (
    <Box
      bg={useColorModeValue("rgb(241,241,241)", "black")}
      py={{ base: "0.5rem" }}
      px={{ base: "1rem" }}
      position="sticky"
      zIndex="999"
      top={isNavVisible ? "0" : "-100px"}
      transition="top 0.3s"
    >
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            pr={3}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Link
            as={RouterLink}
            to={"/"}
            // target="_blank"
            cursor="pointer"
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              <HStack>
                <Image src={logo} boxSize={{ base: "35px", lg: "70px" }} />
                <Image src={tedxImg} width={{ base: 160, lg: 300 }} />
              </HStack>
            </Flex>
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <HStack spacing={5}>
          <LanguageSwitcher />
          <ColorModeSwitch />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default NavBar2;
