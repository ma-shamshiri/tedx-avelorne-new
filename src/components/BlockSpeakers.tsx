import React, { useEffect, useState } from "react";
import { Box, Center, Grid, Text, useColorModeValue } from "@chakra-ui/react";

import alina from "../assets/images/Alina.webp";
import andrew from "../assets/images/Andrew.webp";
import flore from "../assets/images/Flore.webp";
import janet from "../assets/images/Janet.webp";
import kira from "../assets/images/Kira.webp";
import leila from "../assets/images/Leila.webp";
import miriam from "../assets/images/Miriam.webp";
import myra from "../assets/images/Myra.webp";
import peggy from "../assets/images/Peggy.webp";
import vincent from "../assets/images/Vincent.webp";
import SpeakerCard from "./SpeakerCard";

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
  const numElements = 8;

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
      className="block block--dark block--skewed-right block-showcase aos-animate"
      padding="6rem 2rem"
      paddingBottom="10rem"
      // bg={useColorModeValue("gray.800", "#16F8B6")}
      // bg={useColorModeValue("gray.800", "#0B0E37")}
      // bg={useColorModeValue("gray.800", "#374550")}
      bg={useColorModeValue("#ACD1B4", "#0D1224")}
      color="#16F8B6"
      // data-aos="fade-up"
      // data-aos-duration="500"
      overflow={"hidden"}
    >
      <Box
        className="block__header container aos-animate"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Text
          className="h2"
          color={useColorModeValue("gray.700", "#16F8B6")}
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
          color={useColorModeValue("gray.600", "white")}
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
              className="aos-animate"
              display="grid"
              templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
              templateRows={["repeat(4, 1fr)", null, null, "repeat(2, 1fr)"]}
              rowGap={"10rem"}
              columnGap={{ base: "5rem", lg: "13rem" }}
              padding="10rem 0"
              alignItems="center"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {/* ======================== Vincent Lariviere ======================== */}
              {/* <SpeakerCard
                src={vincent}
                name="Vincent Lariviere"
                title="Professor, Faculty of Arts & Science, Université de Montréal"
                imageMarginTop="5rem"
              /> */}

              {/* ======================== Myra Virgil ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={myra}
                name="Myra Virgil"
                title="Philanthropy Executive | Strategist | Storyteller"
                imageMarginBottom="0rem"
                nameMarginTop="2rem"
                titleMarginBottom="-2rem"
              />

              {/* ======================== Kira Dolhan ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={kira}
                name="Kira Dolhan"
                title="Search and Rescue Volunteer"
              />

              {/* ======================== Miriam Han ======================== */}
              {/* <SpeakerCard
                src={miriam}
                name="Miriam Han"
                title="M.Sc Neuroscience Candidate, McGill University"
              /> */}

              {/* ======================== Flore Deshayes ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[3]}
                handleHover={() => handleHover(3)}
                handleUnhover={() => handleUnhover(3)}
                src={flore}
                name="Flore Deshayes"
                title="Social worker"
                // imageMarginTop="-5rem"
              />

              {/* ======================== Leila Kosseim ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[4]}
                handleHover={() => handleHover(4)}
                handleUnhover={() => handleUnhover(4)}
                src={leila}
                name="Leila Kosseim"
                title="Professor in Computer Science | Concordia University"
              />

              {/* ======================== Andrew Churchil ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={andrew}
                name="Andrew Churchil"
                title="Carolyn Jack MD | Professor | Start-Up Entrepreneur"
              />

              {/* ======================== Janet Perlman ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[6]}
                handleHover={() => handleHover(6)}
                handleUnhover={() => handleUnhover(6)}
                src={janet}
                name="Janet Perlman"
                title="Animator and Children's Book Author"
              />

              {/* ======================== Peggy Bell ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[7]}
                handleHover={() => handleHover(7)}
                handleUnhover={() => handleUnhover(7)}
                src={peggy}
                name="Peggy Bell"
                title="Founder | Principal Consultant"
              />

              {/* ======================== Alina Gutierrez Mejia ======================== */}
              <SpeakerCard
                isHovered={isHoveredArray[8]}
                handleHover={() => handleHover(8)}
                handleUnhover={() => handleUnhover(8)}
                src={alina}
                name="Alina Gutierrez Mejia"
                title="Graphic Facilitator | Creative Consultant"
              />
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockSpeakers;
