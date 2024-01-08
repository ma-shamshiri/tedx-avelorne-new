import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";
import ImageGrid from "./ImageGrid";

import "yet-another-react-lightbox/styles.css";
import { slides } from "./data";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const BlockGallery: React.FC = () => {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  const { t } = useTranslation();

  const [index, setIndex] = useState<number>(-1);

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box
          className="block block--dark block--skewed-right block-showcase aos-animate"
          padding="6rem 4rem"
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
          <Box
            className="block__header container aos-animate"
            textAlign="center"
            // maxWidth="100rem"
            data-aos="fade-up"
            data-aos-duration="500"
            marginBottom="10rem"
          >
            <Text
              className="h2"
              color={useColorModeValue("white", "#16F8B6")}
              marginBottom="2rem"
              fontSize={{ base: "4rem", lg: "6rem" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              {t("mediaPageTitle")}
            </Text>

            <Text
              className="p"
              color={useColorModeValue("gray.100", "white")}
              //   marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "2.0rem", lg: "2.5rem" }}
              lineHeight="1.1"
            >
              {t("mediaPageSubTitle")}
            </Text>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width="100%">
              <ImageGrid
                data={slides}
                onClick={(currentIndex) => {
                  setIndex(currentIndex);
                }}
              />

              <Lightbox
                plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                captions={{
                  showToggle: true,
                  descriptionTextAlign: "center",
                }}
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default BlockGallery;
