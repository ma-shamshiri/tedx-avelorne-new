import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  ResponsiveValue,
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import QuoteCard from "./QuoteCard";
import { motion } from "framer-motion";

import TeamProfileCard from "./TeamProfileCard";
import { useTranslation } from "react-i18next";

interface BlockTeamProfilesProps {
  name: string;
  title: string;
  role: string;
  imageSrc: string;
  badgeSrc: string;
  linkedinHref: string;
  twitterHref: string;
  tedHref: string;
  quoteText: string;
  quoteTopMargin?: ResponsiveValue<string>;
  pageHeight?: ResponsiveValue<string>;

  // isHovered?: boolean;
  // handleHover?: () => void;
  // handleUnhover?: () => void;
}

const BlockTeamProfiles: React.FC<BlockTeamProfilesProps> = ({
  name,
  title,
  role,
  imageSrc,
  badgeSrc,
  linkedinHref,
  twitterHref,
  tedHref,
  quoteText,
  quoteTopMargin,
  pageHeight = { base: "115vh", lg: "105vh" },
}) => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const numElements = 20;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleBoxLoad}
    >
      <Flex
        direction="column"
        height={pageHeight}
        width="100%"
        overflow="hidden"
        position="relative"
      >
        {/* Top Section */}
        <Box
          className="top-section"
          flex="1"
          bg={useColorModeValue("#e0c27e", "gray.800")}
          // bg={useColorModeValue(
          //   "linear-gradient(45deg, #c9ab67, #f5eabc, #c9ab67, #f5eabc, #c9ab67,#f5eabc)",
          //   "gray.800"
          // )}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Box>

        {/* Bottom Section */}
        <Box
          className="bottom-section"
          flex="3"
          backgroundColor={useColorModeValue("#FFFDD1", "gray.600")}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Box>

        {/* Middle Box */}
        <Box width="100%" position="absolute" top="25%" left="50%">
          <Box
            className="profile-card"
            width={{ base: "90%", lg: "71rem" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="translate(-50%, -50%)"
            zIndex="1"
            marginBottom={{ base: "30rem", md: "5rem", lg: "5rem" }}
          >
            <TeamProfileCard
              name={name}
              title={title}
              role={role}
              imageSrc={imageSrc}
              badgeSrc={badgeSrc}
              linkedinHref={linkedinHref}
              twitterHref={twitterHref}
              tedHref={tedHref}
              isHovered={isHoveredArray[1]}
              handleHover={() => handleHover(1)}
              handleUnhover={() => handleUnhover(1)}
            />
          </Box>
          <Box
            className="quote-card"
            width={{ base: "70%", lg: "71rem" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="translate(-50%, -50%)"
            zIndex="1"
            marginTop={quoteTopMargin}
          >
            <QuoteCard
              width={{ base: "100%", lg: "80%" }}
              height={{ lg: "90%" }}
              quoteText={quoteText}
            />
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default BlockTeamProfiles;
