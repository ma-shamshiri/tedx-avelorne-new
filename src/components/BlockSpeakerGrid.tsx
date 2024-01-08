import React, { useEffect, useState } from "react";
import { Box, Center, Grid, Text, useColorModeValue } from "@chakra-ui/react";

import alina from "../assets/images/Alina.webp";
import andrew from "../assets/images/Andrew.webp";
import flore from "../assets/images/Flore.webp";
import janet from "../assets/images/Janet.webp";
import kira from "../assets/images/Kira.webp";
import leila from "../assets/images/Leila.webp";
import myra from "../assets/images/Myra.webp";
import peggy from "../assets/images/Peggy.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import SpeakerGridCard from "./SpeakerGridCard";

// const BlockSpeakers: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockSpeakerGrid: React.FC = () => {
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
      // bg={useColorModeValue("#ACD1B4", "#1E2142")}
      bg={useColorModeValue(
        "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "#1E2142"
      )}
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
          color={useColorModeValue("gray.100", "#16F8B6")}
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
          color={useColorModeValue("gray.200", "white")}
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
              {/* ======================== Myra Virgil ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={myra}
                name="Myra Virgil"
                title="Philanthropy Executive | Strategist | Storyteller"
                // imageMarginBottom="0rem"
                // nameMarginTop="2rem"
                // titleMarginBottom="-2rem"
                buttonSrc="/speakers/myra-virgil/"
              />

              {/* ======================== Kira Dolhan ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={kira}
                name="Kira Dolhan"
                title="Search and Rescue Volunteer"
                buttonSrc="/speakers/kira-dolhan/"
              />

              {/* ======================== Flore Deshayes ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[3]}
                handleHover={() => handleHover(3)}
                handleUnhover={() => handleUnhover(3)}
                src={flore}
                name="Flore Deshayes"
                title="Social worker"
                // imageMarginTop="-5rem"
                buttonSrc="/speakers/flore-deshayes/"
              />

              {/* ======================== Leila Kosseim ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[4]}
                handleHover={() => handleHover(4)}
                handleUnhover={() => handleUnhover(4)}
                src={leila}
                name="Leila Kosseim"
                title="Professor in Computer Science | Concordia University"
                buttonSrc="/speakers/leila-kosseim/"
              />

              {/* ======================== Andrew Churchil ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={andrew}
                name="Andrew Churchil"
                title="Carolyn Jack MD | Professor | Start-Up Entrepreneur"
                buttonSrc="/speakers/andrew-churchil/"
              />

              {/* ======================== Janet Perlman ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[6]}
                handleHover={() => handleHover(6)}
                handleUnhover={() => handleUnhover(6)}
                src={janet}
                name="Janet Perlman"
                title="Animator and Children's Book Author"
                buttonSrc="/speakers/janet-perlman/"
              />

              {/* ======================== Peggy Bell ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[7]}
                handleHover={() => handleHover(7)}
                handleUnhover={() => handleUnhover(7)}
                src={peggy}
                name="Peggy Bell"
                title="Founder | Principal Consultant"
                buttonSrc="/speakers/peggy-bell/"
              />

              {/* ======================== Alina Gutierrez Mejia ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[8]}
                handleHover={() => handleHover(8)}
                handleUnhover={() => handleUnhover(8)}
                src={alina}
                name="Alina Gutierrez Mejia"
                title="Graphic Facilitator | Creative Consultant"
                buttonSrc="/speakers/alina-gutierrez-mejia/"
              />
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockSpeakerGrid;
