import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import NumberCard from "./NumberCard";
import { useTranslation } from "react-i18next";

const BlockStatistics: React.FC = () => {
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
      padding="4rem 4rem"
      //   bg={useColorModeValue("gray.800", "#16F8B6")}
      //   bg={useColorModeValue("#ACD1B4", "#23214A")}
      bg={useColorModeValue(
        "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "#23214A"
      )}
      color="#16F8B6"
      // data-aos="fade-up"
      // data-aos-duration="500"
      overflow={"hidden"}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box
          className="block__header container aos-animate"
          textAlign="center"
          maxWidth="100rem"
          // margin="0 auto"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Text
            className="h2"
            color={useColorModeValue("white", "#16F8B6")}
            marginBottom="2rem"
            fontSize={{ base: "4rem", lg: "6rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {t("statisticsTitle")}
          </Text>

          <Text
            className="p"
            color={useColorModeValue("gray.100", "white")}
            //   marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "2.0rem", lg: "2.5rem" }}
            lineHeight="1.1"
          >
            {t("statisticsSubTitle")}
          </Text>
          <Center>
            <SimpleGrid
              className="aos-animate"
              columns={{ sm: 2, base: 2, md: 2, lg: 2, xl: 4 }}
              spacing={{ base: "3rem", lg: "10rem" }}
              padding="5rem 0"
              alignItems="center"
              data-aos="fade-up"
              data-aos-duration="500"
              width="100%"
            >
              {/* ======================== Myra Virgil ======================== */}
              <NumberCard
                width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
                height={{
                  base: "20rem",
                  md: "20rem",
                  lg: "20rem",
                  xl: "17rem",
                }}
                endNumber={20}
                hasPlusSign={false}
                text={t("coreTeam")}
                textSize={{
                  base: "2rem",
                  md: "2.8rem",
                  lg: "2.8rem",
                  xl: "2.5rem",
                }}
                textColor="white"
                numberFontSize={{
                  base: "4.5rem",
                  md: "4rem",
                  lg: "5rem",
                  xl: "4rem",
                }}
                borderColor="linear-gradient(to left, transparent, #409F8F, transparent)"
                numberColor="#4CCFAF"
              />

              {/* ======================== Myra Virgil ======================== */}
              <NumberCard
                width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
                height={{
                  base: "20rem",
                  md: "20rem",
                  lg: "20rem",
                  xl: "17rem",
                }}
                endNumber={8}
                text={t("speakers")}
                textSize={{
                  base: "2rem",
                  md: "2.8rem",
                  lg: "2.8rem",
                  xl: "2.5rem",
                }}
                textColor="white"
                numberFontSize={{
                  base: "4.5rem",
                  md: "4rem",
                  lg: "5rem",
                  xl: "4rem",
                }}
                borderColor="linear-gradient(to left, transparent, #EF40BA, transparent)"
                numberColor="#FF5FCC"
              />

              <NumberCard
                width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
                height={{
                  base: "20rem",
                  md: "20rem",
                  lg: "20rem",
                  xl: "17rem",
                }}
                endNumber={100}
                hasPlusSign={true}
                text={t("attendees")}
                textSize={{
                  base: "2rem",
                  md: "2.8rem",
                  lg: "2.8rem",
                  xl: "2.5rem",
                }}
                textColor="white"
                numberFontSize={{
                  base: "4.5rem",
                  md: "4rem",
                  lg: "5rem",
                  xl: "4rem",
                }}
                numberColor="#A679FF"
                // width={{ base: "20rem", md: "20rem", lg: "20rem", xl: "20rem" }}
                // height={{ base: "15rem", md: "15rem", lg: "15rem", xl: "15rem" }}
                // backgroundColor="#11152C"
                // borderColor="linear-gradient(to left, transparent, #7F43FB, transparent)"
              />

              {/* ======================== Myra Virgil ======================== */}
              <NumberCard
                width={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
                height={{
                  base: "20rem",
                  md: "20rem",
                  lg: "20rem",
                  xl: "17rem",
                }}
                endNumber={8}
                text={t("sponsors")}
                textSize={{
                  base: "2.3rem",
                  md: "2.8rem",
                  lg: "2.8rem",
                  xl: "2.5rem",
                }}
                textColor="white"
                numberFontSize={{
                  base: "5rem",
                  md: "4rem",
                  lg: "5rem",
                  xl: "4rem",
                }}
                borderColor="linear-gradient(to left, transparent, #FF9F24, transparent)"
                numberColor="#FF9F24"
              />
            </SimpleGrid>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlockStatistics;
