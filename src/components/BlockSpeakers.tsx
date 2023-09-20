import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import vincent from "../assets/images/Vincent.webp";
import myra from "../assets/images/Myra.webp";
import kira from "../assets/images/Kira.webp";
import miriam from "../assets/images/Miriam.webp";
import flore from "../assets/images/Flore.webp";
import leila from "../assets/images/Leila.webp";
import andrew from "../assets/images/Andrew.webp";
import janet from "../assets/images/Janet.webp";
import peggy from "../assets/images/Peggy.webp";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

// const Speakers = () => {
//   return (
//     <Box
//       className="block block--dark block--skewed-right block-showcase"
//       padding="6rem 2rem"
//       paddingBottom="10rem"
//       bg={useColorModeValue("gray.800", "#edebdd")}
//       color="#7b858b"
//       //   clipPath="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
//     >
//       <Box
//         className="block__header container"
//         textAlign="center"
//         maxWidth="750px"
//         margin="0 auto"
//       >
//         <Text
//           className="h2"
//           color={useColorModeValue("black", "gray.700")}
//           marginBottom="2rem"
//           marginTop="0"
//           fontSize="4rem"
//           fontWeight="bold"
//           lineHeight="1.1"
//         >
//           Our Speakers
//         </Text>

//         <Text
//           className="h3"
//           color={useColorModeValue("red", "gray.600")}
//           marginBottom="1rem"
//           marginTop="0"
//           fontSize="2.5rem"
//           lineHeight="1.1"
//         >
//           Elevate Your Thinking: Get to Know Our TEDxAveLorne Speakers
//         </Text>
//         <Center>
//           <Box className="grid grid--2x8">
//             <Grid
//               display="grid"
//               templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
//               templateRows={["repeat(4, 1fr)", null, null, "repeat(2, 1fr)"]}
//               rowGap={"20rem"}
//               columnGap={"17rem"}
//               padding="10rem 0"
//             >
//               {/* <Box width="15rem" height="15rem" borderRadius="100%">
//                 <Image src={mcgillImage} width={"100%"} height={"100%"} />
//               </Box> */}
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//               <Box
//                 width="15rem"
//                 height="15rem"
//                 backgroundImage={mcgillImage}
//                 backgroundSize={"cover"}
//                 borderRadius={"100%"}
//               ></Box>
//             </Grid>
//           </Box>
//         </Center>
//       </Box>
//     </Box>
//   );
// };

// export default Speakers;

// const BlockSpeakers: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockSpeakers: React.FC = () => {
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
      className="block block--dark block--skewed-right block-showcase"
      padding="6rem 2rem"
      paddingBottom="10rem"
      // bg={useColorModeValue("gray.800", "#16F8B6")}
      // bg={useColorModeValue("gray.800", "#0B0E37")}
      // bg={useColorModeValue("gray.800", "#374550")}
      bg={useColorModeValue("#0D1224", "#0D1224")}
      color="#16F8B6"
      // data-aos="fade-up"
      // data-aos-duration="500"
      overflow={"hidden"}
    >
      <Box
        className="block__header container"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Text
          className="h2"
          color={useColorModeValue("#16F8B6", "#16F8B6")}
          marginBottom="2rem"
          marginTop="0"
          fontSize={{ base: "5.5rem", lg: "7rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          Our Speakers
        </Text>

        <Text
          className="p"
          color={useColorModeValue("white", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize={{ base: "2.0rem", lg: "2.8rem" }}
          lineHeight="1.1"
        >
          Elevate Your Thinking: Get to Know Our TEDxAveLorne Speakers
        </Text>
        <Center>
          <Box className="grid grid--3x3">
            <Grid
              display="grid"
              templateColumns={["repeat(2, 1fr)", null, null, "repeat(3, 1fr)"]}
              templateRows={["repeat(4, 1fr)", null, null, "repeat(3, 1fr)"]}
              rowGap={"10rem"}
              columnGap={{ base: "5rem", lg: "13rem" }}
              padding="10rem 0"
              alignItems="center"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop="5rem"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={vincent}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Vincent Lariviere
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Professor, Faculty of Arts & Science, Université de Montréal
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="0rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={myra}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text
                  fontWeight="bold"
                  color="#F8F0C6"
                  fontSize="2.3rem"
                  marginTop="2rem"
                >
                  Myra Virgil
                </Text>
                <Text fontSize="1.4rem" color="#48F380" marginBottom="-2rem">
                  Philanthropy Executive | Strategist | Storyteller
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={kira}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Kira Dolhan
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Search and Rescue Volunteer
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={miriam}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Miriam Han
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  M.Sc Neuroscience Candidate, McGill University
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                marginTop="-5rem"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={flore}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Flore Deshayes
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Social worker
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={leila}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontSize="2.3rem" fontWeight="bold" color="#F8F0C6">
                  Leila Kosseim
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Professor, Computer Science & Software Engineering Dept,
                  Concordia University
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={andrew}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontSize="2.3rem" fontWeight="bold" color="#F8F0C6">
                  Andrew Churchil
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Carolyn Jack MD | Professor | Start-Up Entrepreneur
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={janet}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Janet Perlman
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Animator and Children's Book Author
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  width={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  height={{ base: "15rem", md: "18rem", lg: "18rem" }}
                  bg="white"
                  borderRadius="100%"
                  marginBottom="2rem"
                  overflow="hidden"
                  border="2px solid transparent"
                  transition="border-color 0.2s ease-out"
                  _hover={{
                    borderColor: "#16F8B6",
                  }}
                >
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bg="black"
                    opacity="0"
                    zIndex="1"
                    _hover={{
                      opacity: "0.2",
                    }}
                    transition="opacity 0.2s ease-out"
                  ></Box>
                  <Image
                    src={peggy}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Peggy Bell
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
                  Founder | Principal Consultant
                </Text>
              </Flex>
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockSpeakers;
