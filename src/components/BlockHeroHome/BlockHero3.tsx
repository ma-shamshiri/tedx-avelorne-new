import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Text,
  chakra,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typed from "react-typed";

import heroimage from "../assets/images/heroimage.webp";
import heroimage7 from "../assets/images/heroImage7.webp";
import heroimage10 from "../assets/images/heroImage7.webp";
import event2024 from "../assets/images/event2024.jpg";
import { useTranslation } from "react-i18next";
import HeroEventCard from "./HeroEventCard";

const SuperscriptX = chakra("sup", {
  baseStyle: {
    fontSize: "0.6em",
    top: "-0.5em",
    position: "relative",
  },
});

const LowercaseSpan = chakra("span", {
  baseStyle: {
    textTransform: "lowercase",
  },
});

const BlockHero3: React.FC = () => {
  const { t } = useTranslation();

  const { colorMode } = useColorMode();
  const [heroImg, setHeroImg] = useState(
    colorMode === "dark" ? heroimage7 : heroimage10
  );

  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 0);
  };

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

  // const imageStyle = {
  //   width: "50%",
  //   // height: "100%",
  //   // border: "4px solid transparent",
  //   borderImage:
  //     "linear-gradient(45deg, #000, transparent, transparent, #000) 1",
  //   borderImageSlice: 1,
  // };

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
    // You can add additional logic here if needed
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

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth >= 1024);
  //   };

  //   const handleColorModeChange = () => {
  //     const newHeroImg = colorMode === "dark" ? heroimage7 : heroimage10;
  //     setHeroImg(newHeroImg);

  //     // You can adjust the transition duration based on your preference
  //     const transitionDuration = 1000; // in milliseconds

  //     // Smoothly fade out the current image
  //     const currentImage = document.getElementById(
  //       "heroImage"
  //     ) as HTMLImageElement;
  //     if (currentImage) {
  //       currentImage.style.opacity = "0";

  //       // Wait for the fade-out transition to complete before changing the image source
  //       setTimeout(() => {
  //         currentImage.src = newHeroImg;

  //         // Smoothly fade in the new image
  //         currentImage.style.opacity = "0.8";
  //       }, transitionDuration);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("colorModeChange", handleColorModeChange);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("colorModeChange", handleColorModeChange);
  //   };
  // }, [colorMode]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box className="block block--dark" bg="#000">
          <Box
            className="block block--dark"
            padding="6rem 2rem 6rem 2rem"
            bg={useColorModeValue("#F1F1F1", "#000")}
            color="#7b858b"
            display={{ base: "none", xl: "block" }}
            // _hover={{ bg: "red" }}
            // transition="background 0.3s ease-in-out" // Adjust the duration and easing function as needed
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

          <Flex
            className="heroImageContainer"
            width={"100%"}
            justifyContent="center"
            position="relative"
            alignItems="center"
          >
            <Skeleton
              isLoaded={imageLoaded}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                className="heroImage"
                src={heroimage7}
                width="100%"
                objectFit="fill"
                opacity="0"
                style={{ transition: "opacity 1s ease-in-out" }}
                onLoad={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  handleImageLoad();
                }}
              />
            </Skeleton>
          </Flex>
          <Flex
            className="blockBelowHero"
            justifyContent="center"
            position="absolute"
            top={{
              // sm: "1%",
              base: "3%",
              md: "5%",
              lg: "9%",
              xl: "15%",
            }}
            transform="translateY(-50%)"
            width="100%"
          >
            <HeroEventCard
              isHovered={isHoveredArray[1]}
              handleHover={() => handleHover(1)}
              handleUnhover={() => handleUnhover(1)}
              eventPageHref={"/tedx-2023/"}
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
              eventPageHref={"/tedx-2024/"}
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
        </Box>
      </motion.div>
    </>
  );
};

export default BlockHero3;
