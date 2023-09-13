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

import speaker1 from "../assets/images/1VincentLariviere.png";
import speaker2 from "../assets/images/2MyraVirgil.png";
import speaker3 from "../assets/images/3KiraDolhan.png";
import speaker4 from "../assets/images/4MiriamHan.png";
import speaker5 from "../assets/images/5FloreDeshayes.png";
import speaker6 from "../assets/images/6LeilaKosseim.png";
import speaker7 from "../assets/images/7AndrewChurchil.png";
import speaker8 from "../assets/images/8JanetPerlman.png";

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
    >
      <Box
        className="block__header container"
        textAlign="center"
        maxWidth="750px"
        margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Text
          className="h2"
          color={useColorModeValue("#16F8B6", "#16F8B6")}
          marginBottom="2rem"
          marginTop="0"
          fontSize="7rem"
          fontWeight="bold"
          lineHeight="1.1"
        >
          Our Speakers
        </Text>

        <Text
          className="h3"
          color={useColorModeValue("white", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize="2.5rem"
          lineHeight="1.1"
        >
          Elevate Your Thinking: Get to Know Our TEDxAveLorne Speakers
        </Text>

        <Center>
          <Box className="grid grid--2x8">
            <Grid
              display="grid"
              templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
              templateRows={["repeat(4, 1fr)", null, null, "repeat(2, 1fr)"]}
              rowGap={"10rem"}
              columnGap={"13rem"}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker1}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker2}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                  />
                </Box>
                <Text fontWeight="bold" color="#F8F0C6" fontSize="2.3rem">
                  Myra Virgil
                </Text>
                <Text fontSize="1.4rem" color="#48F380">
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker3}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker4}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker5}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker6}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker7}
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
                  width="15rem"
                  height="15rem"
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
                    src={speaker8}
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
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockSpeakers;
