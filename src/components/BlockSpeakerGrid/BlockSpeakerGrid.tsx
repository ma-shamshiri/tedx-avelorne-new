import React, { useState } from "react";
import { Box, Center, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SpeakerGridCard from "./SpeakerGridCard";
import { alina, andrew, flore, janet, kira, leila, myra, peggy } from "../../assets";
import { BlockSpeakersCarousel } from "../BlockSpeakersCarousel";

export const BlockSpeakerGrid: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <Box
      className="block block--dark block--skewed-right block-showcase"
      padding="6rem 2rem"
      paddingBottom="10rem"
      // bg={useColorModeValue("gray.800", "#16F8B6")}
      // bg={useColorModeValue("gray.800", "#0B0E37")}
      // bg={useColorModeValue("gray.800", "#374550")}
      // bg={useColorModeValue("#ACD1B4", "#1E2142")}
      bg={useColorModeValue(
        "#faedc3",
        "gray.800"
      )}
      color="#16F8B6"
      overflow={"hidden"}
    >
      <Box
        className="block__header"
        textAlign="center"
        // maxWidth="100rem"
        margin="0 auto"
      >
        <Text
          className="h2"
          color={useColorModeValue("gray.800", "#16F8B6")}
          marginBottom="2rem"
          marginTop="0"
          fontSize={{ base: "2.8rem", lg: "4rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("speakerPageTitle")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.700", "white")}
          marginBottom="4rem"
          marginTop="0"
          fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          lineHeight="1.5"
        >
          {t("speakerPageSubTitle")}
        </Text>
        <BlockSpeakersCarousel />
      </Box>
    </Box>
  );
};

// export default BlockSpeakerGrid;
