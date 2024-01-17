import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import HeroEventCard from "./HeroEventCard";

import heroimage from "../assets/images/heroimage.webp";
import event2024 from "../assets/images/event2024.jpg";
import mountainsImage from "../assets/images/mountains.webp";
import planetsImage from "../assets/images/planets.webp";
import sunImage from "../assets/images/sun.webp";
import starsImage from "../assets/images/stars.webp";

const BlockHero6: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const planetImg = isDarkMode ? planetsImage : sunImage;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "500%"]
  );

  const yBg: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

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

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {}, [boxLoaded]);

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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box
          className="block block--dark"
          padding="6rem 2rem 6rem 2rem"
          //   bg={useColorModeValue("#F1F1F1", "#000")}
          bg={useColorModeValue(
            "#6868F7",
            "linear-gradient(180deg, #000, #0E0E29)"
          )}

          //   display={{ base: "none", xl: "block" }}
        >
          <Box
            className="block__header container"
            textAlign="left"
            maxWidth="1140px"
            margin="0 auto"
          >
            <Text
              className="h2 block__heading"
              //   color={useColorModeValue("#FF3A2D", "#fff")}
              color={useColorModeValue("#fff", "#fff")}
              marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "3rem", md: "4rem", lg: "4rem", xl: "4rem" }}
              fontWeight="bold"
              lineHeight="1.5"
              textAlign={{ base: "center", lg: "initial" }}
            >
              {t("heroTitle")}
            </Text>
            <Text
              className="p"
              fontSize={{ base: "1.8rem", md: "2.2rem", lg: "2.4rem" }}
              marginTop={10}
              color={useColorModeValue("gray.300", "#FF3A2D")}
              textAlign={{ base: "center", lg: "initial" }}
              lineHeight="1.5"
            >
              {t("heroSubTitle")}
            </Text>
          </Box>
        </Box>

        <Box
          // className="parallax"
          width="100%"
          height={{ base: "55vh", md: "80vh", lg: "100vh", xl: "110vh" }}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          ref={ref}
          background={useColorModeValue(
            "linear-gradient(180deg, #6868f7, #6868f7, #a6a6ff, #a6a6ff)",
            "linear-gradient(180deg, #0e0e29, #0e0e29, #272763, #272763)"
          )}
        >
          <Flex
            className="blockBelowHero"
            justifyContent="center"
            position="absolute"
            top={{
              // sm: "1%",
              base: "35%",
              md: "40%",
              lg: "35%",
              xl: "35%",
            }}
            transform="translateY(-50%)"
            width="100%"
            zIndex={4}
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
          {/* <Text
            // as={"h1"}
            fontSize={{ base: "72px", lg: "100px" }}
            textAlign={{ base: "center", lg: "initial" }}
            color="white"
          >
            <motion.div style={{ y: yText }}>What We Do?</motion.div>
          </Text> */}
          <Box
            // className="mountains"
            backgroundImage={mountainsImage}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundRepeat={{ base: "no-repeat", lg: "initial" }}
            width="100%"
            height="100%"
            position="absolute"
            zIndex="3"
          ></Box>
          <Box
            // className="planets"
            as={motion.div}
            style={{
              y: yBg,
            }}
            backgroundImage={planetsImage}
            // backgroundImage={planetImg}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundRepeat={{ base: "no-repeat", lg: "initial" }}
            opacity={1}
            width="125%"
            height="100%"
            position="absolute"
            zIndex="2"
          ></Box>
          <Box
            // className="stars"
            as={motion.div}
            style={{
              x: yBg,
            }}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundImage={starsImage}
            width="100%"
            height="100%"
            position="absolute"
            zIndex="1"
          ></Box>
        </Box>
      </motion.div>
    </>
  );
};

export default BlockHero6;
