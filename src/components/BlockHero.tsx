// import bannerWebp from "../assets/images/banner.webp";
// import bannerWebp2x from "../assets/images/banner@2x.webp";
// import bannerPng from "../assets/images/banner.png";
// import bannerPng2x from "../assets/images/banner@2x.png";

// import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

// const BlockHero = () => {
//   return (
//     <section className="block block--dark block--skewed-left hero">
//       <div className="container grid grid--1x2">
//         <header className="block__header hero__content">
//           <h1 className="block__heading">
//             TED Talks: Inspire, Engage, and Discover
//           </h1>
//           <p className="hero__tagline">
//             Deploy your websites in less than 60 seconds.
//           </p>
//           <a className="btn btn--accent btn--stretched">Get Started</a>
//         </header>
//         <picture>
//           <source
//             type="image/webp"
//             srcSet={`${bannerWebp} 1x, ${bannerWebp2x} 2x`}
//           />
//           <source
//             type="image/png"
//             srcSet={`${bannerPng} 1x, ${bannerPng2x} 2x`}
//           />
//           <img className="hero__image" src={bannerPng} alt="" />
//         </picture>
//       </div>
//     </section>
//   );
// };

// export default BlockHero;

// import bannerPng from "../assets/images/banner.png";
// import bannerWebp from "../assets/images/banner.webp";
// import bannerPng2x from "../assets/images/banner@2x.png";
// import bannerWebp2x from "../assets/images/banner@2x.webp";

// import posterPng from "../assets/images/poster.png";

import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

import heroimage from "../assets/images/heroimage.jpg";

import CountdownTimer from "./CountdownTimer";

// import homePageImage from "../assets/images/homepage.jpg";
// import homePageVideo from "../assets/images/homepagevideo.mp4";

// const BlockHero = () => {
//   return (
//     <Box
//       className="block block--dark block--skewed-left hero"
//       // padding="6rem 2rem"
//       // paddingBottom="10rem"
//       // paddingTop={{ lg: "0" }}
//       bg="#000"
//       color="#7b858b"
//       clipPath="polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
//     >
//       <Box
//         className="container grid grid--1x2"
//         textAlign="center"
//         maxWidth="1140px"
//         // margin="0 auto"
//       >
//         <Grid display="grid" templateColumns={["1fr", null, null, "1fr"]}>
//           <Box as="picture">
//             {/* <source
//               type="image/webp"
//               srcSet={`${bannerWebp} 1x, ${bannerWebp2x} 2x`}
//             />
//             <source
//               type="image/png"
//               srcSet={`${bannerPng} 1x, ${bannerPng2x} 2x`}
//             /> */}
//             <Image
//               className="hero__image"
//               src={posterPng}
//               alt="logo"
//               width="50%"
//               opacity={"0.1"}
//             />
//           </Box>
//           <Box
//             className="block__header hero__content"
//             textAlign={{ lg: "left" }}
//             alignSelf={{ lg: "center" }}
//           >
//             <Text
//               className="h1 block__heading"
//               color="#fff"
//               marginBottom="1rem"
//               marginTop="0"
//               fontSize={{ base: "6rem", lg: "4.5rem" }}
//               fontWeight="bold"
//               lineHeight="1.1"
//             >
//               TED Talks: Inspire, Engage, and Discover
//             </Text>
//             <Text
//               className="p hero__tagline"
//               marginTop="0"
//               fontSize="2rem"
//               color="b9c3cf"
//               letterSpacing="1px"
//               margin="2rem 0 5rem"
//             >
//               Deploy your websites in less than 60 seconds.
//             </Text>
//             <Button
//               className="btn btn--accent"
//               border="0"
//               borderRadius="40px"
//               cursor="pointer"
//               fontSize={{ base: "1.8rem", lg: "1.5rem" }}
//               fontWeight="600"
//               margin="1rem 0"
//               outline="0"
//               padding="3rem 4vw"
//               textAlign="center"
//               textTransform="uppercase"
//               whiteSpace="nowrap"
//               bg="var(--color-accent)"
//               paddingLeft="6rem"
//               paddingRight="6rem"
//               color="#fff"
//               _hover={{ bg: "#ec3000" }}
//             >
//               Buy Now
//             </Button>
//           </Box>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default BlockHero;

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

const BlockHero: React.FC = () => {
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

  return (
    <Box
      className="block block--dark"
      // padding="6rem 30rem"
      // paddingBottom="10rem"
      bg="#000"
      // color="#7b858b"
      // width="100%"
      // width="100vw"
      // overflow={"hidden"}
    >
      <Flex width={"100%"} justifyContent="center">
        <Image
          src={heroimage}
          width="100%"
          // objectFit="cover"
          opacity="0.99"
        />
      </Flex>
      <Box
        display="flex"
        position="absolute"
        width="100%"
        height={{ base: "15rem", lg: "25rem" }}
        top={{ base: "14.5rem", md: "25rem", lg: "26rem" }}
        bgGradient="linear(to-r, gray.700, transparent)"
        // justifyContent="center"
        alignItems="center"
      >
        <VStack
          spacing={{ base: "2rem", lg: "4rem" }}
          marginLeft={{ base: "2rem", lg: "10rem" }}
        >
          <Text
            color={"white"}
            fontWeight="bold"
            fontSize={useBreakpointValue({
              base: "2rem",
              md: "2rem",
              lg: "4rem",
            })}
            // marginLeft="10rem"
          >
            TED Talks: Inspire, Engage, and Discover
          </Text>
          <HStack spacing="2rem">
            <Button
              fontSize={{ base: "1.3rem", lg: "1.5rem" }}
              width={{ base: "10rem", lg: "13rem" }}
              height="4rem"
              background="blue.400"
              rounded="full"
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={handleLearnMoreButtonClick}
            >
              Learn More
            </Button>
            <Button
              fontSize={{ base: "1.2rem", lg: "1.5rem" }}
              width={{ base: "10rem", lg: "13rem" }}
              height="4rem"
              background="whiteAlpha.300"
              rounded="full"
              color="white"
              _hover={{ bg: "whiteAlpha.500" }}
              onClick={handleAveLorneButtonClick}
            >
              TED<SuperscriptX>x</SuperscriptX>A
              <LowercaseSpan>ve</LowercaseSpan>L
              <LowercaseSpan>orne</LowercaseSpan>
            </Button>
          </HStack>
        </VStack>
      </Box>
      <Flex
        display="flex"
        position="absolute"
        width="100%"
        top={{ base: "7rem", md: "10rem", lg: "53rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <CountdownTimer eventStartTime={eventStartTime} />
      </Flex>
    </Box>
  );
};

export default BlockHero;
