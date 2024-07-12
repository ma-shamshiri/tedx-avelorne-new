import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { arash, cafe, medad, poulet, dental, ark, shaygraphy, zproduction } from "../../assets";
import SponsorCard from "./SponsorCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { BlockSponsorsCarousel } from "../BlockSponsorsCarousel";

export const BlockSponsorsTemp: React.FC = () => {
  const { t } = useTranslation();

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
      bg={useColorModeValue("#EFE8D6", "#0D1224")}
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
          fontSize={{ base: "2.8rem", lg: "4rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("sponsorPageTitle")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.600", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          lineHeight="1.5"
        >
          {t("sponsorPageSubTitle")}
        </Text>

        {/* <BlockSponsorsCarousel/> */}
        <Center>
          <Box className="grid grid--2x4" marginTop="6rem">
            <SimpleGrid
              columns={{ base: 2, md: 2, lg: 2, xl: 4 }}
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

              {/* ======================== Dental Clinique ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={dental}
              // name="Janet Perlman"
              // title="Animator and Children's Book Author"
              // brandName="POULET ROUGE"
              />

              {/* ======================== Shaygraphy ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={shaygraphy}
              // name="Janet Perlman"
              // title="Animator and Children's Book Author"
              // brandName="POULET ROUGE"
              />

              {/* ======================== Z Production ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={zproduction}
              // name="Janet Perlman"
              // title="Animator and Children's Book Author"
              // brandName="POULET ROUGE"
              />

              {/* ======================== ARK ======================== */}
              <SponsorCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={ark}
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

// export default BlockSponsorsTemp;