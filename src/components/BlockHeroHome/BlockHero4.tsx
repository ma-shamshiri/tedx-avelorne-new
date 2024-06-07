import React, { useEffect, useState } from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import heroimage from "../assets/images/heroimage.webp";
import heroimage7 from "../assets/images/heroImage7.webp";
import event2024 from "../assets/images/event2024.jpg";
import { useTranslation } from "react-i18next";
import HeroEventCard from "./HeroEventCard";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const BlockHero4: React.FC = () => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const numElements = 2;

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  const handleLearnMoreButtonClick = () => {
    window.open(
      "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
      "_blank"
    );
  };

  const handleAveLorneButtonClick = () => {
    window.open("https://www.ted.com/tedx/events/53037", "_blank");
  };

  const eventStartTime = new Date("2023-09-30T09:00:00-05:00");

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // This effect runs when boxLoaded state changes
  }, [boxLoaded]);

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

  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      {/* <AnimatingNumber value={12345} /> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box
          className="block block--dark"
          padding="6rem 2rem 6rem 2rem"
          // paddingBottom="10rem"
          bg={useColorModeValue("#F1F1F1", "#000")}
          color="#7b858b"
          display={{ base: "none", xl: "block" }}
          // _hover={{ bg: "red" }}
          // transition="background 0.3s ease-in-out"
        >
          <Box
            className="block__header container"
            textAlign="left"
            maxWidth="1140px"
            margin="0 auto"
          >
            <Text
              className="h2 block__heading"
              color={useColorModeValue("#FF3A2D", "#fff")}
              marginBottom="1rem"
              marginTop="0"
              fontSize="4rem"
              fontWeight="bold"
              lineHeight="1.1"
            >
              {t("heroTitle")}
            </Text>
            <Text
              className="p"
              marginTop={10}
              color={useColorModeValue("gray.800", "#FF3A2D")}
            >
              {t("heroSubTitle")}
            </Text>
          </Box>
        </Box>
      </motion.div>

      <Box position="relative">
        <Box
          justifyContent="center"
          bgImage={heroimage7}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          height="1000px"
          width="100%"
          position="fixed"
          top="0"
          left="0"
          zIndex={-1}
          objectFit={"fill"}
        />

        {/* <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100vh"
          zIndex={-1}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={v6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box> */}

        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh"
          zIndex={1}
        ></Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={handleBoxLoad}
        >
          <Flex
            justifyContent="center"
            position="absolute"
            top={{
              sm: "3.5%",
              base: "3.5%",
              md: "6%",
              lg: "15%",
              xl: "40%",
            }}
            transform="translateY(-50%)"
            width="100%"
          >
            <HeroEventCard
              isHovered={isHoveredArray[1]}
              handleHover={() => handleHover(1)}
              handleUnhover={() => handleUnhover(1)}
              eventPageHref={"/event/2023"}
              eventImageHref={heroimage}
              titleText={"Step Into the Past:"}
              subtitleText={"2023 Edition!"}
              topBorderColor={
                "linear-gradient(to left, transparent, #7560F9 ,#4BFD85)"
              }
              bottomBorderColor={
                "linear-gradient(to left, #4BFD85, #7560F9, transparent)"
              }
              rightBorderColor={
                "linear-gradient(to bottom, transparent, #7560F9, #4BFD85)"
              }
              leftBorderColor={
                "linear-gradient(to bottom, #4BFD85, #7560F9, transparent)"
              }
              topBorderPosition={"-0.9rem"}
              bottomBorderPosition={"-0.9rem"}
              rightBorderPosition={"-0.9rem"}
              leftBorderPosition={"-0.9rem"}
              topBorderWidth={"100%"}
              bottomBorderWidth={"100%"}
              rightBorderWidth={"1.2rem"}
              leftBorderWidth={"1.2rem"}
              topBorderHeight={"1.2rem"}
              bottomBorderHeight={"1.2rem"}
              rightBorderHeight={"100%"}
              leftBorderHeight={"100%"}
              marginRight={{
                sm: "",
                base: "3rem",
                md: "7rem",
                lg: "",
                xl: "",
              }}
            />

            <HeroEventCard
              isHovered={isHoveredArray[2]}
              handleHover={() => handleHover(2)}
              handleUnhover={() => handleUnhover(2)}
              eventPageHref={"/event/2023"}
              eventImageHref={event2024}
              titleText={"Unlock the Future:"}
              subtitleText={"2024 Edition!"}
              topBorderColor={
                "linear-gradient(to left, transparent, #6322BF, #F226AA)"
              }
              bottomBorderColor={
                "linear-gradient(to left, #F226AA, #6322BF, transparent)"
              }
              rightBorderColor={
                "linear-gradient(to bottom, transparent, #6322BF, #F226AA)"
              }
              leftBorderColor={
                "linear-gradient(to bottom, #F226AA, #6322BF, transparent)"
              }
              topBorderPosition={"-0.9rem"}
              bottomBorderPosition={"-0.9rem"}
              rightBorderPosition={"-0.9rem"}
              leftBorderPosition={"-0.9rem"}
              topBorderWidth={"100%"}
              bottomBorderWidth={"100%"}
              rightBorderWidth={"1.2rem"}
              leftBorderWidth={"1.2rem"}
              topBorderHeight={"1.2rem"}
              bottomBorderHeight={"1.2rem"}
              rightBorderHeight={"100%"}
              leftBorderHeight={"100%"}
              marginRight={{}}
            />
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default BlockHero4;
