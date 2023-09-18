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
import Royan from "../assets/images/Royan.webp";
import Gezal from "../assets/images/Gezal.webp";
import Edwin from "../assets/images/Edwin.webp";
import Zahra from "../assets/images/Zahra.webp";

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

const BlockTestimonials: React.FC = () => {
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
  const [isHovered18, setIsHovered18] = useState(false);

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

  const handleHover18 = () => {
    setIsHovered18(true);
  };

  const handleUnhover18 = () => {
    setIsHovered18(false);
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
      padding="6rem 4rem"
      // paddingBottom="10rem"
      bg={useColorModeValue("gray.800", "gray.800")}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="block__header container"
        padding="0rem 2rem"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
      >
        <Box data-aos="fade-up" data-aos-duration="500">
          <Text
            className="h2 block__heading"
            color="var(--color-white)"
            marginBottom="3rem"
            marginTop="0"
            fontSize={{ base: "4.0rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            The People Behind TEDxAveLorne
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.300", "gray.300")}
            marginBottom="10rem"
            marginTop="0"
            fontSize={{ base: "2.0rem", lg: "2.8rem" }}
            lineHeight="1.1"
          >
            Introducing the TEDxAveLorne Team: Meet the Diverse Group of Experts
            Who shape Inspirational Moments
          </Text>
        </Box>
      </Box>
      <Box
        className="container"
        // maxWidth="900px"
        // maxWidth="100%"
        margin="0 auto"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 20, lg: 20 }}
        >
          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    href="https://ca.linkedin.com/in/samin-majidi-05b77a250"
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
                    // href=""
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Student in Physics | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  I'm a physics student who enjoys discovering new, interesting
                  things. I became the organizer of TEDxAveLorne to share and
                  learn from others. After being a team member at TEDxZanjan, I
                  took on the role of leading the team, valuing teamwork and new
                  opportunities.
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Fatemeh}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    href="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
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
                    // href=""
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
                      // opacity="0.3"
                      opacity="1"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Student in Mining Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Studying mining engineering might help me to find the
                  treasures I am always looking for in people's words. I am here
                  to experience and enjoy working in a non-profit organization
                  and let unwritten books get read.
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Reihaneh}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    href="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
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
                    // href=""
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        M.Sc. Student in Electrical Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  As an enthusiastic electrical engineering master's student at
                  McGill University, I bring a unique blend of technical
                  expertise and a profound passion for storytelling.
                  Volunteering at TEDx AveLorne is my platform for empowering
                  normal people to share their unique stories, bringing about
                  positive changes through the magic of ideas.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.ted.com/profiles/41859284"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Mohammaderfan Mohit
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "1.6rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        Ph.D. Student in Mining Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Being a student for a long time, I have always been excited to
                  hear novel ideas. Working with the TEDxAveLorne team has been
                  an incredible opportunity to not only absorb fresh
                  perspectives but also contribute to the spread of
                  groundbreaking ideas. It has been a rewarding journey of
                  growth, learning, and inspiration!
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Zahra}
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
                  //   marginBottom="1rem"
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
                  <Box
                    as="a"
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.ted.com/profiles/43881649"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Multimedia Editing Coordinator | Genetec Inc.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  I always believe in the power of words. I think a TED talk is
                  a great place to let powerful words incline people's minds to
                  move, act, or make a new life-saving decision!
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
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
                  <Box
                    as="a"
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        ABC Position at University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
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
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.ted.com/profiles/44509018"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Student in Mining Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  So excited to be part of the TEDxAveLorne team! I'm passionate
                  about both communicating science to a broad audience and being
                  part of the committees and clubs that promotes it. Look
                  forward to sharing innovative ideas for a more sustainable
                  world.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
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
                  <Box
                    as="a"
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Baharan Nouriinanloo
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        M.Sc. Student in Computer Engineering | Polytechnique
                        Montreal
                        {/* PolyMTL */}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  I am a Deep Learning-focused Software Engineer on a quest for
                  innovative patterns and ideas. I enjoy sharing knowledge and
                  am eager to inspire at TEDx events. Let's embark on this
                  journey of ideas together.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
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
                  <Box
                    as="a"
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Student in Computer Engineering | Concordia
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  As a Concordia University PhD student in Computer Engineering,
                  I'm excited to lead TEDxAvelorne's marketing for sponsorships,
                  merging tech passion with networking skills to enhance
                  partnerships and create memorable experiences for our audience
                  and sponsors.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        ABC Position at University/Company
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  To share my skills and help friends in creating something
                  meaningful.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.ted.com/profiles/44654445"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Student in Computer Engineering | Polytechnique
                        Montreal
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  To meet new people, new ideas, new opportunities and
                  contribute to my community in Montreal!
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Ph.D. Candidate in Neuroscience | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  TED greatly affected my career trajectory. Watching a TED talk
                  on expanding human senses turned my interest from the galaxies
                  of stars above my head to the galaxies of neurons inside it.
                  So, I joined TEDxAveLorne as a curator to help craft talks
                  that could similarly inspire and impact others.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        M.Sc. Student in Physics | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
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
                  give effective talks and keep my audience engaged. Therefore,
                  I joined the TEDxAveLorne curation team to help the speakers
                  on their journey to prepare their talks!
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
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
                        Vocal Coach | Private
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  To be part of a group of people interested in spreading ideas
                  despite all the difficulties.
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={handleHover15}
            onMouseLeave={handleUnhover15}
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Royan}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Royan Jafari
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        M.Sc. Student in Biomedical Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Coming soon.. Stay tuned for an intriguing biography!
                </Text>
              </Box>
            </Grid>
          </Box>

          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={handleHover16}
            onMouseLeave={handleUnhover16}
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
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Edwin}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Edwin Meriaux
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        M.Sc. Student in Electrical Engineering | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Coming soon.. Stay tuned for an intriguing biography!
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={handleHover17}
            onMouseLeave={handleUnhover17}
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
                opacity: isHovered17 ? 1 : 0,
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
                opacity: isHovered17 ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            ></Box>
            <Grid
              className="grid grid--1x2"
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
              >
                <Image
                  src={Gezal}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    // href="#"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    as="a"
                    // href="https://www.ted.com/profiles/19449036/about"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Gezal Najafi
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        M.Sc. Student in Clinical Nutriotion | McGill
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "120%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Coming soon.. Stay tuned for an intriguing biography!
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box
            width="100%"
            height="99%"
            className="card testimonial"
            padding="2.5rem 2rem 2rem 2rem"
            // marginBottom="4rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={handleHover18}
            onMouseLeave={handleUnhover18}
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
                opacity: isHovered18 ? 1 : 0,
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
                opacity: isHovered18 ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            ></Box>
            <Grid
              className="grid grid--1x2"
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
              templateRows="auto 1fr" // Define two rows, the first is auto-sized
              gap={4} // Adjust gap as needed
            >
              {/* -------------------- First row with two columns -------------------- */}
              <Box
                className="testimonial__image"
                position="relative"
                margin={{ base: "0 3rem", lg: "0" }}
                gridColumn={["1", null, null, "span 1"]}
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
                  //   marginBottom="1rem"
                >
                  <Box
                    as="a"
                    href="https://ca.linkedin.com/in/ma-shamshiri"
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
                    // href="#"
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
                      // opacity="0.3"
                      opacity="1"
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
              <Flex
                className="testimonial__title"
                gridColumn={["2", null, null, "span 1"]}
                alignItems="center" // Center vertically
                justifyContent="center" // Center horizontally
                flexDirection="column" // Stack items vertically
              >
                <Box
                  className="testimonial__title"
                  gridColumn={["2", null, null, "span 1"]}
                >
                  <Flex
                  // className="media"
                  // marginBottom="4rem"
                  >
                    {/* <Box
                      //   className="media__image"
                      marginTop="1rem"
                    >
                      <Icon
                        className="icon icon--primary quote__line"
                        as={AiOutlineLine}
                        width="40px"
                        height="40px"
                        color="var(--color-primary)"
                        position="relative"
                        bottom="10px"
                      />
                    </Box> */}
                    <Box
                      className="media__body"
                      margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                    >
                      <Text
                        className="media__title quote__author"
                        fontSize={{ base: "1.8rem", lg: "2.4rem" }}
                        fontWeight="500"
                        fontStyle="normal"
                        marginTop="0"
                        marginBottom="1rem"
                        color="white"
                      >
                        Mohammad Amin Shamshiri
                      </Text>
                      <Text
                        className="quote__organization"
                        color="#48F380"
                        // opacity="0.4"
                        fontSize={{ base: "2rem", lg: "1.6rem" }}
                        fontStyle="normal"
                      >
                        Software Engineer | EnerZam Inc.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              {/* -------------------- Second row with one column -------------------- */}
              <Box
                className="quote"
                as="blockquote"
                fontSize={{ base: "110%", lg: "110%" }}
                fontStyle="italic"
                color="var(--color-body-darker)"
                lineHeight={{ base: "1.3", lg: "1.5" }}
                gridColumn={["span 2", null, null, "span 2"]}
                margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
              >
                <Text
                  className="quote__text"
                  textAlign="left"
                  _before={{ content: "open-quote" }}
                  _after={{ content: "close-quote" }}
                  color="gray.400"
                >
                  Graduating from Concordia University with a master's in
                  computer science, I'm here at TEDxAvelorne to bring my tech
                  know-how to the table. Being a member of this team allows me
                  to merge my love for technology with my desire to inspire and
                  collaborate on groundbreaking ideas. As the mind behind the
                  event's website, I strived to create a digital platform that
                  reflects the innovation and inspiration that TEDxAvelorne
                  represents. Together, we'll create a great experience for our
                  audience and speakers.
                </Text>
              </Box>
            </Grid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BlockTestimonials;
