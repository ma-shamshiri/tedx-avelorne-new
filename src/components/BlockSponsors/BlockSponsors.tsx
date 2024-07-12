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

export const BlockSponsors: React.FC = () => {
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
      bg={useColorModeValue("#EFE8D6", "#0D1224")}
      color="#16F8B6"
      // data-aos="fade-up"
      // data-aos-duration="500"
      overflow={"hidden"}
    >
      <Box
        className="block__header container aos-animate"
        textAlign="center"
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

        <BlockSponsorsCarousel />

      </Box>
    </Box>
  );
};

// export default BlockSponsors;