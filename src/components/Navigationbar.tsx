import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  Flex,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
// import { Link as RouterLink, useLocation } from "react-router-dom";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/images/logo.png";
import tedxWhite from "../assets/images/tedxWhite.png";
import tedxBlack from "../assets/images/tedxBlack.png";

const Navigationbar = () => {
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

  const navStyle = {
    transition: "top 0.3s",
    top: isNavVisible ? "0" : "-100px",
  };

  // const Navigationbar = () => {
  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

  return (
    <Flex
      bg={useColorModeValue("rgb(241,241,241)", "black")}
      py={{ base: "0.5rem" }}
      px={{ base: "1rem" }}
      position="sticky"
      top="0"
      zIndex="999"
      style={navStyle}
    >
      <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
        <Link
        // as={RouterLink}
        // to="/"
        >
          <HStack>
            <Image src={logo} boxSize={{ base: "50px", lg: "70px" }} />
            <Image src={tedxImg} width={{ base: 200, lg: 300 }} />
          </HStack>
        </Link>
      </Flex>
      {/* <Flex justifyContent="center" alignItems="center">
        <ColorModeSwitch />
      </Flex> */}
    </Flex>
  );
};

export default Navigationbar;
