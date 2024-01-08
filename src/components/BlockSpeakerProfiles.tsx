import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import QuoteCard from "./QuoteCard";
import Samin from "../assets/images/Samin.webp";
import badgeOrganizer from "../assets/images/badge-organizer.png";
import bg1 from "../assets/images/speakerbg.jpg";
import vt1 from "../assets/images/videothumbnail1.jpg";
import vt2 from "../assets/images/speakerbg2.jpg";
import vt3 from "../assets/images/speakerbg3.jpg";
import { SlSpeech } from "react-icons/sl";
import { GiOldMicrophone } from "react-icons/gi";
import { CiMicrophoneOn } from "react-icons/ci";

import SpeakerProfileCard from "./SpeakerProfileCard";
import { useTranslation } from "react-i18next";

interface BlockSpeakerProfilesProps {
  name: string;
  position: string;
  talkTopic: string;
  imageSrc: string;
}

const BlockSpeakerProfiles: React.FC<BlockSpeakerProfilesProps> = ({
  name,
  position,
  talkTopic,
  imageSrc,
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
        direction={{ base: "column", md: "column", lg: "row" }}
        height={{ base: "auto", lg: "100vh" }}
        width="100%"
        overflow="hidden"
        position="relative"
      >
        {/* Left Section */}
        <Box
          className="left-section"
          flex="1.5"
          backgroundColor={useColorModeValue("#F1F1F1", "black")}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          minHeight="100%"
          marginTop={{ lg: "-30rem" }}
        >
          {/* Speaker Profile Card */}
          <SpeakerProfileCard
            imageSrc={imageSrc}
            name={name}
            position={position}
            talkTopic={talkTopic}
          />
        </Box>

        {/* Right Section */}
        <Box
          className="right-section"
          flex="3"
          position="relative"
          overflow="hidden"
        >
          <Image
            className="background-image"
            src={bg1}
            alt="Background Image"
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
          />

          <Box
            className="video_image_outer_container"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width={{ base: "90%", lg: "71rem" }}
            zIndex="1"
            overflow="hidden"
            borderRadius="2rem"
            boxShadow="0 0 30px 1px black"
          >
            <Box
              className="video_image_inner_container"
              width="100%"
              height="100%"
              position="relative"
            >
              <Image
                className="vide_thumbnail"
                src={vt2}
                alt="Video Thumbnail Image"
                objectFit="cover"
                opacity="0.5"
              />
              <Box
                className="title_container"
                display="flex"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="white"
                opacity="0.6"
                justifyContent="center"
                alignItems="center"
              >
                <VStack>
                  <Text
                    className="title"
                    fontSize={{ base: "3rem", lg: "5rem" }}
                    fontWeight="bold"
                    color={useColorModeValue("black", "black")}
                  >
                    {t("videoThumbnailTitle")}
                  </Text>
                  <Text
                    className="title"
                    fontSize={{ base: "1.8rem", lg: "3rem" }}
                    fontWeight="bold"
                    color={useColorModeValue("black", "black")}
                  >
                    {t("videoThumbnailSubTitle")}
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default BlockSpeakerProfiles;
