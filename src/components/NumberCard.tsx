import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";
import AnimatingNumber from "./AnimatingNumber";

interface NumberCardProps {
  // ----------- ContainerProperties -----------
  width?: {
    sm?: string;
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  height?: {
    sm?: string;
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  backgroundColor?: string;
  borderColor?: string;
  // ----------- TextProperties -----------
  text?: string;
  textColor?: string;
  textSize?: {
    sm?: string;
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  // ----------- NumberProperties -----------
  startNumber?: number;
  endNumber: number;
  duration?: number;
  delay?: number;
  numberFontSize?: {
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  numberColor?: string;
  hasPlusSign?: boolean;
}

const NumberCard: React.FC<NumberCardProps> = ({
  width = { lg: "20rem" },
  height = { lg: "15rem" },
  backgroundColor = "#11152C",
  borderColor = "linear-gradient(to left, transparent, #7F43FB, transparent)",
  text,
  textColor = "white",
  textSize,
  startNumber = 0,
  endNumber,
  duration = 3,
  delay = 0.2,
  numberFontSize,
  numberColor = "white",
  hasPlusSign = false,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        position="relative"
        width={width}
        height={height}
        bg={backgroundColor}
        borderRadius={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="2rem"
        // margin="2rem"
        overflow="hidden"
        boxShadow="0 0 30px 1px black"
      >
        <Box
          position="absolute"
          top="0rem"
          left="0"
          width="100%"
          height="0.2rem"
          style={{
            background: borderColor,
            opacity: 1,
          }}
        ></Box>
        <VStack>
          <AnimatingNumber
            // fontSize={{ base: "10rem", md: "3rem", lg: "3rem", xl: "34rem" }}
            fontSize={{
              base: numberFontSize?.base || "2rem",
              md: numberFontSize?.md || "2rem",
              lg: numberFontSize?.lg || "2rem",
              xl: numberFontSize?.xl || "2rem",
            }}
            color={numberColor}
            value={endNumber}
            start={startNumber}
            duration={duration}
            delay={delay}
            hasPlusSign={hasPlusSign}
          />
          <Text fontSize={textSize} fontWeight={"bold"} color={textColor}>
            {text}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default NumberCard;
