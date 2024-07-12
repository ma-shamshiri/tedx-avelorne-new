import React, { useEffect, useRef, useState } from "react";
import { Box, chakra, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EventSlider from "./EventSlider";
import { BlockScrollingTeamImage } from "../BlockScrollingTeamImage";

const initialVariants: { [key: string]: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

export const BlockHero2023: React.FC = () => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const [isHoveredButton, setIsHoveredButton] = useState(false);

  const handleHoverButton = () => {
    setIsHoveredButton(true);
  };

  const handleUnHoverButton = () => {
    setIsHoveredButton(false);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleBoxLoad}
    >
      <Box
        className="block block--dark"
        width="100%"
        height="100%"
        overflow="hidden"
      >
        {/* --------------- EVENT SLIDER --------------- */}
        <EventSlider />

        {/* --------------- SCROLLING HEADER --------------- */}
        <Box
          className="block__header"
          width="100%"
          bg={useColorModeValue("white", "black")}
          textAlign="center"
          padding="6rem 0rem"
          overflow={"hidden"}
        >
          <Text
            className="h2"
            color={useColorModeValue("gray.800", "gray.100")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "2.8rem", lg: "4rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {t("scrollingTeamTitle")}
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          >
            {t("scrollingTeamSubTitle")}
          </Text>
        </Box>

        {/* --------------- SCROLLING IMAGE --------------- */}
        <Box
          className="block__header"
          bg={useColorModeValue("white", "black")}
          paddingBottom="6rem"
        >
          <BlockScrollingTeamImage />
        </Box>

        <Flex
          bg={useColorModeValue("white", "black")}
          justifyContent="center"
          alignItems="center"
          paddingBottom="4rem"
        >
          <Link
            position="relative"
            className="btn btn--secondary btn--block"
            href="/team/"
            target="_blank"
            rel="noopener noreferrer"
            border="2px solid #F04E2D"
            borderRadius="15px"
            cursor="pointer"
            fontSize={{ base: "1.8rem", lg: "2rem" }}
            margin="1.5rem 1rem"
            padding="1.5rem"
            textAlign="center"
            whiteSpace="nowrap"
            bg="#f04e2d"
            color="#fff"
            boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
            display="inline-block"
            width={{ base: "20rem", lg: "20rem" }}
            _hover={{
              border: "0.2rem solid #f75540",
              bg: "transparent",
              color: "#f04e2d",
              boxShadow:
                "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
            }}
            transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
            onMouseEnter={handleHoverButton}
            onMouseLeave={handleUnHoverButton}
          >
            <Text>{t("scrollingTeamButtonLabel")}</Text>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

// export default BlockHero;
