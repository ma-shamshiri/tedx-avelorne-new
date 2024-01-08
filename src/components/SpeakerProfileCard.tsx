import {
  Box,
  useColorModeValue,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import FlipCardTest3 from "./FlipCardTest3";
import { useState } from "react";
import Typed from "react-typed";
import { SlSpeech } from "react-icons/sl";
import { GiOldMicrophone } from "react-icons/gi";
import { CiMicrophoneOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";

interface SpeakerProfileCardProps {
  name: string;
  position: string;
  talkTopic: string;
  imageSrc: string;
  isHovered?: boolean;
  handleHover?: () => void;
  handleUnhover?: () => void;
}

const SpeakerProfileCard: React.FC<SpeakerProfileCardProps> = ({
  name,
  position,
  talkTopic,
  imageSrc,
  isHovered,
  handleHover,
  handleUnhover,
}) => {
  const { t } = useTranslation();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };

  const iconSize = useBreakpointValue({ base: "1.7rem", lg: "2rem" });
  const tedIconSize = useBreakpointValue({ base: "2.8rem", lg: "3.5rem" });

  return (
    <>
      <Box
        className="profile_image_container"
        position="relative"
        margin="2rem 0"
        width={{ base: "20rem", lg: "35rem" }}
        height={{ base: "20rem", lg: "35rem" }}
        overflow="hidden"
        borderRadius="50%"
        boxShadow="0 0 30px 1px gray"
        border="2px solid transparent"
        _hover={{
          borderColor: "#16F8B6",
        }}
        transition="border-color 0.9s ease-out 0.8s"
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardHover}
      >
        {/* <Image
          className="profile_image"
          src={imageSrc}
          alt="Profile Image"
          objectFit="fill"
          width="100%"
          height="100%"
        /> */}
        <FlipCardTest3
          name={t("talkTopic")}
          title={talkTopic}
          frontImageHref={imageSrc}
          backImageHref={imageSrc}
          objectFit="fill"
          nameColor={useColorModeValue("gray.700", "gray.100")}
          titleColor={useColorModeValue("gray.700", "gray.100")}
          icon={GiOldMicrophone}
          iconColor={useColorModeValue("black", "#F8F0B3")}
          imageBackgroundColor={useColorModeValue("#F8F0C6", "#0E041C")}
        />
      </Box>
      <Text
        fontWeight="bold"
        color={useColorModeValue("gray.600", "#F8F0C6")}
        fontSize={{ base: "3rem", lg: "3.5rem" }}
        marginTop={5}
      >
        {name}
      </Text>
      <Text
        fontSize={{ base: "1.8rem", lg: "1.8rem" }}
        color={useColorModeValue("#F926AE", "#48F380")}
        marginBottom={10}
        maxWidth="35rem"
        textAlign="center"
      >
        {position}
      </Text>
    </>
  );
};

export default SpeakerProfileCard;
