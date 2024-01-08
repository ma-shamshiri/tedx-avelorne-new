import React, { useEffect, useState } from "react";
import { Box, Center, Grid, Text, useColorModeValue } from "@chakra-ui/react";

import myra from "../assets/images/Myra.webp";
import Amin from "../assets/images/Amin.webp";
import Aryana from "../assets/images/Aryana.webp";
import Baharan from "../assets/images/Baharan.webp";
import Erfan from "../assets/images/Erfan.webp";
import Fatemeh from "../assets/images/Fatemeh.webp";
import Fathima from "../assets/images/Fathima.webp";
import Hamidreza from "../assets/images/Hamidreza.webp";
import Melika from "../assets/images/Melika.webp";
import Mina from "../assets/images/Mina.webp";
import Mohammad from "../assets/images/Mohammad.webp";
import Motahareh from "../assets/images/Motahareh.webp";
import Pegah from "../assets/images/Pegah.webp";
import Reihaneh from "../assets/images/Reihaneh.webp";
import Samin from "../assets/images/Samin.webp";
import Royan from "../assets/images/Royan.webp";
import Gezal from "../assets/images/Gezal.webp";
import Edwin from "../assets/images/Edwin.webp";
import Zahra from "../assets/images/Zahra.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import SpeakerGridCard from "./SpeakerGridCard";
import TeamGridCard from "./TeamGridCard";
import { useTranslation } from "react-i18next";

// const BlockSpeakers: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });
//   }, []);

const BlockTeamGrid: React.FC = () => {
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
      padding="6rem 2rem"
      paddingBottom="10rem"
      bg={useColorModeValue(
        "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "#1E2142"
      )}
      color="#16F8B6"
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
          fontSize={{ base: "4.5rem", lg: "6rem" }}
          fontWeight="bold"
          lineHeight="1.5"
        >
          {t("teamPageTitle")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.200", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize={{ base: "2.0rem", lg: "2.5rem" }}
          lineHeight="1.5"
        >
          {t("teamPageSubTitle")}
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
              {/* ======================== Samin Majidi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={Samin}
                name="Samin Majidi"
                buttonSrc="/team/samin-majidi/"
                imageMarginTop={{ base: "1rem", lg: "4rem" }}
              />

              {/* ======================== Fatemeh Tavanaei ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={Fatemeh}
                name="Fatemeh Tavanaei"
                buttonSrc="/team/fatemeh-tavanaei/"
              />

              {/* ======================== Reihaneh Ghoroghchian ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[3]}
                handleHover={() => handleHover(3)}
                handleUnhover={() => handleUnhover(3)}
                src={Reihaneh}
                name="Reihaneh Ghoroghchian"
                buttonSrc="/team/reihaneh-ghoroghchian/"
              />

              {/* ======================== Mohammaderfan Mohit ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[4]}
                handleHover={() => handleHover(4)}
                handleUnhover={() => handleUnhover(4)}
                src={Erfan}
                name="Mohammaderfan Mohit"
                buttonSrc="/team/mohammaderfan-mohit/"
              />

              {/* ======================== Zahra Ahmadi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={Zahra}
                name="Zahra Ahmadi"
                buttonSrc="/team/zahra-ahmadi/"
                imageMarginTop={{ base: "3rem", lg: "4rem" }}
              />

              {/* ======================== Fathima Nihatha Lathiff ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[6]}
                handleHover={() => handleHover(6)}
                handleUnhover={() => handleUnhover(6)}
                src={Fathima}
                name="Fathima Nihatha Lathiff"
                buttonSrc="/team/fathima-nihatha-lathiff/"
              />

              {/* ======================== Hamidreza Ermagan ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[7]}
                handleHover={() => handleHover(7)}
                handleUnhover={() => handleUnhover(7)}
                src={Hamidreza}
                name="Hamidreza Ermagan"
                buttonSrc="/team/hamidreza-ermagan/"
              />

              {/* ======================== Baharan Nouriinanloo ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[8]}
                handleHover={() => handleHover(8)}
                handleUnhover={() => handleUnhover(8)}
                src={Baharan}
                name="Baharan Nouriinanloo"
                buttonSrc="/team/baharan-nouriinanloo/"
              />

              {/* ======================== Melika Seyedi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[9]}
                handleHover={() => handleHover(9)}
                handleUnhover={() => handleUnhover(9)}
                src={Melika}
                name="Melika Seyedi"
                buttonSrc="/team/melika-seyedi/"
              />

              {/* ======================== Mohammad Zaid ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[10]}
                handleHover={() => handleHover(10)}
                handleUnhover={() => handleUnhover(10)}
                src={Mohammad}
                name="Mohammad Zaid"
                buttonSrc="/team/mohammad-zaid/"
              />

              {/* ======================== Mina Taraghi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[11]}
                handleHover={() => handleHover(11)}
                handleUnhover={() => handleUnhover(11)}
                src={Mina}
                name="Mina Taraghi"
                buttonSrc="/team/mina-taraghi/"
              />

              {/* ======================== Motahareh Pourrahimi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[12]}
                handleHover={() => handleHover(12)}
                handleUnhover={() => handleUnhover(12)}
                src={Motahareh}
                name="Motahareh Pourrahimi"
                buttonSrc="/team/motahareh-pourrahimi/"
              />

              {/* ======================== Aryana Haghjoo ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[13]}
                handleHover={() => handleHover(13)}
                handleUnhover={() => handleUnhover(13)}
                src={Aryana}
                name="Aryana Haghjoo"
                buttonSrc="/team/aryana-haghjoo/"
              />

              {/* ======================== Pegah Einakchi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[14]}
                handleHover={() => handleHover(14)}
                handleUnhover={() => handleUnhover(14)}
                src={Pegah}
                name="Pegah Einakchi"
                buttonSrc="/team/pegah-einakchi/"
              />

              {/* ======================== Royan Jafari ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[15]}
                handleHover={() => handleHover(15)}
                handleUnhover={() => handleUnhover(15)}
                src={Royan}
                name="Royan Jafari"
                buttonSrc="/team/royan-jafari/"
              />

              {/* ======================== Edwin Meriaux ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[16]}
                handleHover={() => handleHover(16)}
                handleUnhover={() => handleUnhover(16)}
                src={Edwin}
                name="Edwin Meriaux"
                buttonSrc="/team/edwin-meriaux/"
              />

              {/* ======================== Gezal Najafi ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[17]}
                handleHover={() => handleHover(17)}
                handleUnhover={() => handleUnhover(17)}
                src={Gezal}
                name="Gezal Najafi"
                buttonSrc="/team/gezal-najafi/"
              />

              {/* ======================== Amin Shamshiri ======================== */}
              <TeamGridCard
                isHovered={isHoveredArray[18]}
                handleHover={() => handleHover(18)}
                handleUnhover={() => handleUnhover(18)}
                src={Amin}
                name="Amin Shamshiri"
                buttonSrc="/team/amin-shamshiri/"
              />
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default BlockTeamGrid;
