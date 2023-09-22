// import { ImQuotesLeft } from "react-icons/im";
// import { AiOutlineLine } from "react-icons/ai";

// import testimonial from "../assets/images/testimonial.jpg";

// const BlockTestimonials = () => {
//   return (
//     <section className="block">
//       <header className="block__header">
//         <h2>What our Customers are Saying</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
//         </p>
//       </header>
//       <div className="container">
//         <div className="card testimonial">
//           <div className="grid grid--1x2">
//             <div className="testimonial__image">
//               <img src={testimonial} alt="A happy, smiling customer" />
//               <span className="icon-container icon-container--accent">
//                 <ImQuotesLeft className="icon icon--white icon--small" />
//               </span>
//             </div>
//             <blockquote className="quote">
//               <p className="quote__text">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Incidunt optio officiis dolore earum error eaque perferendis
//                 laudantium sed praesentium dolorum.
//               </p>
//               <footer>
//                 <div className="media">
//                   <div className="media__image">
//                     <AiOutlineLine className="icon icon--primary quote__line" />
//                   </div>
//                   <div className="media__body">
//                     <h3 className="media__title quote__author">John Smith</h3>
//                     <p className="quote__organization">ABC Company</p>
//                   </div>
//                 </div>
//               </footer>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };







// export default BlockTestimonials;
import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Grid,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState } from "react";

import { AiOutlineLine } from "react-icons/ai";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";

import Amin from "../assets/images/Amin.webp";
import Aryana from "../assets/images/Aryana.webp";
import Baharan from "../assets/images/Baharan.webp";
import Erfan from "../assets/images/Erfan.webp";
import Fatemeh from "../assets/images/Fatemeh.webp";
import Fathima from "../assets/images/Fathima.webp";
import Hamidreza from "../assets/images/Hamidreza.webp";
import Melika from "../assets/images/Melika.webp";
import Mina from "../assets/images/Mina.webp";
import Mohammad from "../assets/images/Mohammad.webp";
import Motahareh from "../assets/images/Motahareh.webp";
import Pegah from "../assets/images/Pegah.webp";
import Reihaneh from "../assets/images/Reihaneh.webp";
import Samin from "../assets/images/Samin.webp";
// import testimonial from "../assets/images/testimonial.jpg";
import unknownBoyProfile from "../assets/images/unknownBoyProfile.jpg";
import unknownGirlProfile from "../assets/images/unknownGirlProfile.jpg";

import {
  BsFillChatLeftQuoteFill,
  BsFillChatQuoteFill,
  BsFillChatRightQuoteFill,
} from "react-icons/bs";

import { SiTed } from "react-icons/si";

import { transform } from "framer-motion";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

// const BlockTestimonials = () => {

const BlockTestimonials1: React.FC = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);
  const [isHovered13, setIsHovered13] = useState(false);
  const [isHovered14, setIsHovered14] = useState(false);
  const [isHovered15, setIsHovered15] = useState(false);
  const [isHovered16, setIsHovered16] = useState(false);
  const [isHovered17, setIsHovered17] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleUnhover1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleUnhover2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleUnhover3 = () => {
    setIsHovered3(false);
  };

  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleUnhover4 = () => {
    setIsHovered4(false);
  };

  const handleHover5 = () => {
    setIsHovered5(true);
  };

  const handleUnhover5 = () => {
    setIsHovered5(false);
  };

  const handleHover6 = () => {
    setIsHovered6(true);
  };

  const handleUnhover6 = () => {
    setIsHovered6(false);
  };

  const handleHover7 = () => {
    setIsHovered7(true);
  };

  const handleUnhover7 = () => {
    setIsHovered7(false);
  };

  const handleHover8 = () => {
    setIsHovered8(true);
  };

  const handleUnhover8 = () => {
    setIsHovered8(false);
  };

  const handleHover9 = () => {
    setIsHovered9(true);
  };

  const handleUnhover9 = () => {
    setIsHovered9(false);
  };

  const handleHover10 = () => {
    setIsHovered10(true);
  };

  const handleUnhover10 = () => {
    setIsHovered10(false);
  };

  const handleHover11 = () => {
    setIsHovered11(true);
  };

  const handleUnhover11 = () => {
    setIsHovered11(false);
  };

  const handleHover12 = () => {
    setIsHovered12(true);
  };

  const handleUnhover12 = () => {
    setIsHovered12(false);
  };

  const handleHover13 = () => {
    setIsHovered13(true);
  };

  const handleUnhover13 = () => {
    setIsHovered13(false);
  };

  const handleHover14 = () => {
    setIsHovered14(true);
  };

  const handleUnhover14 = () => {
    setIsHovered14(false);
  };

  const handleHover15 = () => {
    setIsHovered15(true);
  };

  const handleUnhover15 = () => {
    setIsHovered15(false);
  };

  const handleHover16 = () => {
    setIsHovered16(true);
  };

  const handleUnhover16 = () => {
    setIsHovered16(false);
  };

  const handleHover17 = () => {
    setIsHovered17(true);
  };

  const handleUnhover17 = () => {
    setIsHovered17(false);
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  return (
    <Box
      className="block block--dark"
      padding="6rem 2rem"
      // paddingBottom="10rem"
      bg={useColorModeValue("gray.800", "gray.800")}
    >
      <Box
        className="block__header container"
        textAlign="center"
        marginBottom="6rem"
        // maxWidth="1140px"
        // margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Text
          className="h2 block__heading"
          color="var(--color-white)"
          marginBottom="4rem"
          marginTop="0"
          fontSize={{ base: "5.5rem", lg: "7rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          The People Behind TEDxAveLorne
        </Text>
        <Text className="p" marginTop="0">
          Introducing the TEDxAveLorne Team: Meet the Diverse Group of Experts
          Who shape Inspirational Moments
        </Text>
      </Box>
      <Box
        className="container"
        maxWidth="900px"
        // maxWidth="100%"
        margin="0 auto"
      >
        {/* <SimpleGrid columns={3} spacing={4}> */}
        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover1}
          onMouseLeave={handleUnhover1}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered1 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered1 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Samin}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
                marginBottom="1rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                    // opacity="0.3"
                    opacity="1"
                  />
                </Box>
                <Box
                  as="a"
                  href="https://www.ted.com/profiles/19449036/about"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                    // opacity="0.3"
                    opacity="1"
                  />
                </Box>
              </Stack>

              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                I enjoyed my previous experience in Iran and like to experience
                it here again!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Samin Majidi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>
        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover2}
          onMouseLeave={handleUnhover2}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered2 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered2 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
            templateRows={["2fr", null, null, "2fr"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Fatemeh}
                width="100%"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box
                  as="a"
                  href="https://www.ted.com/profiles/38189071/about"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Studying mining engineering might help me to find the treasures
                I am always looking for in people's words. I am here to
                experience and enjoy working in a non-profit organization and
                let unwritten books get read.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Fatemeh Tavanaei
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>
        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover3}
          onMouseLeave={handleUnhover3}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered3 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered3 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Reihaneh}
                width="100%"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                To give voice to normal people with unique stories.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Reihaneh Ghoroghchian
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover4}
          onMouseLeave={handleUnhover4}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered4 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered4 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Erfan}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
                // alignItems={"center"}
                // alignContent={"center"}
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Make AveLorne Great Again!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Mohammaderfan Mohit
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover5}
          onMouseLeave={handleUnhover5}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered5 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered5 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={unknownGirlProfile}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
                // alignItems={"center"}
                // alignContent={"center"}
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                I always believe in the power of words. I think a TED talk is a
                great place to let powerful words incline people's minds to
                move, act, or make a new life-saving decision!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Zahra Ahmadi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover6}
          onMouseLeave={handleUnhover6}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered6 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered6 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Fathima}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                To meet, greet, explore and engage!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Fathima Nihatha Lathiff
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover7}
          onMouseLeave={handleUnhover7}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered7 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered7 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Hamidreza}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                You should have a reason for not coming!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Hamidreza Ermagan
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover8}
          onMouseLeave={handleUnhover8}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered8 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered8 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Baharan}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Because I like to help beautiful ideas be heard in my community!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Baharan Nouri
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover9}
          onMouseLeave={handleUnhover9}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered9 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered9 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Melika}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Joining the TEDx team would be a rewarding opportunity to
                enhance my skills while contributing to the empowerment of
                others through meaningful and inspiring initiatives!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Melika Seyedi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover10}
          onMouseLeave={handleUnhover10}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered10 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered10 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Mohammad}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Biography Coming Soon! Check back later for [Name]'s incredible
                life story.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Mohammad Zaid
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover11}
          onMouseLeave={handleUnhover11}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered11 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered11 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Mina}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                To meet new people, new ideas, new opportunities and contribute
                to my community in Montreal!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Mina Taraghi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover12}
          onMouseLeave={handleUnhover12}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered12 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered12 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Motahareh}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
                // alignItems={"center"}
                // alignContent={"center"}
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                I wanted to be the one...
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Motahareh Pourrahimi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover13}
          onMouseLeave={handleUnhover13}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered13 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered13 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Aryana}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
                // alignItems={"center"}
                // alignContent={"center"}
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                As a scientist, I am always eager to hear different ideas in
                diverse fields. Moreover, I am interested in learning how to
                give effective talks and keep my audience engaged. Therefore, I
                joined the TEDxAveLorne curation team to help the speakers on
                their journey to prepare their talks!
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Aryana Haghjoo
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover14}
          onMouseLeave={handleUnhover14}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered14 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered14 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Pegah}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                />
              </Box>
            </Box>

            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "120%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                {/* Biography Coming Soon! Check back later for [Name]'s incredible
                life story. */}
                To be part of a group of people interested in spreading ideas
                despite all the difficulties.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Pegah Einakchi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover15}
          onMouseLeave={handleUnhover15}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
          // bg={"#0D1224"}
          // bg={useColorModeValue(
          //   "",
          //   "linear-gradient(to left, #0D1224, transparent, #0D1224)"
          // )}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered15 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)",
              opacity: isHovered15 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={unknownGirlProfile}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box as="a" href="#" target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "100%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                To embrace new challenges.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Royan Jafari
                      </Text>
                      <Text
                        className="quote__organization"
                        // color="var(--color-headings)"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        ABC University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>

        <Box
          className="card testimonial"
          padding="3rem"
          borderRadius="7px"
          boxShadow="0 0 30px 1px black"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          marginBottom="4rem"
          position="relative"
          onMouseEnter={handleHover16}
          onMouseLeave={handleUnhover16}
          borderWidth={"1rem"}
          borderColor={"transparent"}
          data-aos="fade-up"
          data-aos-duration="500"
          bg={useColorModeValue("gray.800", "gray.800")}
          // bg={"#0D1224"}
          // bg={useColorModeValue(
          //   "",
          //   "linear-gradient(to left, #0D1224, transparent, #0D1224)"
          // )}
        >
          <Box
            position="absolute"
            top="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered16 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Box
            position="absolute"
            bottom="-1rem"
            left="0"
            width="100%"
            height="1.2rem"
            style={{
              background:
                "linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)",
              opacity: isHovered16 ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></Box>
          <Grid
            className="grid grid--1x2"
            display="grid"
            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
          >
            <Box
              className="testimonial__image"
              position="relative"
              margin={{ base: "0 3rem", lg: "0" }}
            >
              <Image
                src={Amin}
                width="100%"
                // width="20rem"
                // height="20rem"
                alt="A happy smiling customer"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                borderRadius="100%"
                // borderRadius="2%"
              />
              <Stack
                display="flex"
                flexDirection="row"
                spacing={6}
                justifyContent={"center"}
                paddingTop="2rem"
              >
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/ma-shamshiri/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#0077b5", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box
                  as="a"
                  href="https://twitter.com/ma_shamshiri"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size="20px" />}
                    _hover={{
                      bg: useColorModeValue("#4DA6E9", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
                <Box
                  as="a"
                  href="https://www.ted.com/profiles/11850053"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    // icon={<BsInstagram size="20px" />}
                    icon={<SiTed size="35px" />}
                    _hover={{
                      bg: useColorModeValue("#E1186C", "gray.200"),
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                    boxSize="4rem"
                  />
                </Box>
              </Stack>
              <Box
                className="icon-container icon-container--accent"
                background="#f3f9fa"
                width="64px"
                height="64px"
                borderRadius="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="3rem"
                right="-32px"
                // right="385px"
                backgroundColor="var(--color-accent)"
              >
                <Icon
                  className="icon icon--white"
                  as={BsFillChatQuoteFill}
                  width="40px"
                  height="40px"
                  color="#fff"
                  // transform="scaleX(-1)"
                />
              </Box>
            </Box>
            <Box
              className="quote"
              as="blockquote"
              fontSize={{ base: "110%", lg: "100%" }}
              fontStyle="italic"
              color="var(--color-body-darker)"
              lineHeight={{ base: "1.3", lg: "1.5" }}
              margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
            >
              <Text
                className="quote__text"
                textAlign="left"
                _before={{ content: "open-quote" }}
                _after={{ content: "close-quote" }}
                color="gray.400"
              >
                Graduating from Concordia University with a Master's in Computer
                Science, I'm here at TEDxAvelorne to bring my tech know-how to
                the table. Being a member of this team allows me to merge my
                love for technology with my desire to inspire and collaborate on
                groundbreaking ideas. As the mind behind the event's website, I
                strived to create a digital platform that reflects the
                innovation and inspiration that TEDxAvelorne represents.
                Together, we'll create a great experience for our audience and
                speakers.
              </Text>
              <footer>
                <Box>
                  <Flex className="media" marginBottom="4rem">
                    <Box className="media__image" marginTop="1rem">
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box>
                    <Box className="media__body" margin="0 2rem">
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "3rem", lg: "2rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="0"
                        color="white"
                      >
                        Mohammad Amin Shamshiri
                      </Text>
                      <Text
                        className="quote__organization"
                        // color="var(--color-headings)"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        Software Engineer | EnerZam Co.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </footer>
            </Box>
          </Grid>
        </Box>
        {/* </SimpleGrid> */}
      </Box>
    </Box>
  );
};

export default BlockTestimonials1;
