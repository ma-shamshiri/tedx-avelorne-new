import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import arash from "../assets/images/Arash.webp";
import cafe from "../assets/images/Cafe.webp";
import medad from "../assets/images/Medad.webp";
import poulet from "../assets/images/Poulet.webp";
import dental from "../assets/images/Dental.webp";
// import SpeakerCard from "./SpeakerCard";
import SponsorCard from "./SponsorCard";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

const BlockSponsors: React.FC = () => {
  const numElements = 6;

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
      paddingTop={{ base: "5rem", lg: "10rem" }}
      paddingBottom={{ base: "5rem", lg: "10rem" }}
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
          Our Generous Sponsors
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.600", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize={{ base: "2.0rem", lg: "2.8rem" }}
          lineHeight="1.5"
        >
          Honoring the Outstanding Contributions of Our Event's Valued Sponsors
        </Text>
        <Center>
          <Box className="grid grid--3x3" marginTop="6rem">
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
              //   spacing={{ base: 20, lg: 30 }}
              spacingX={{ base: "5rem", md: "18rem", lg: "15rem", xl: "22rem" }}
              spacingY={{ base: "1rem", md: "1rem", lg: "5rem" }}
            >
              {/* ======================== MÉDAD ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={medad}
                // name="Kira Dolhan"
                // title="Search and Rescue Volunteer"
                // brandName="MÉDAD E-Magazine"
                // brandName="MÉDAD"
              />

              {/* ======================== CAFÉ AUNJA ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={cafe}
                // name="Flore Deshayes"
                // title="Social worker"
                // imageMarginTop="-5rem"
                // brandName="CAFÉ AUNJA"
              />

              {/* ======================== ARASH & SHIRIN ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[3]}
                handleHover={() => handleHover(3)}
                handleUnhover={() => handleUnhover(3)}
                src={arash}
                // name="Leila Kosseim"
                // title="Professor in Computer Science | Concordia University"
                // brandName="ARASH & SHIRIN"
              />

              {/* ======================== POULET ROUGE ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[4]}
                handleHover={() => handleHover(4)}
                handleUnhover={() => handleUnhover(4)}
                src={poulet}
                // name="Andrew Churchil"
                // title="Carolyn Jack MD | Professor | Start-Up Entrepreneur"
                // brandName="POULET ROUGE"
              />

              {/* ======================== Janet Perlman ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={dental}
                // name="Janet Perlman"
                // title="Animator and Children's Book Author"
                // brandName="POULET ROUGE"
              />
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockSponsors;
