import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  useColorModeValue,
  Flex,
  VStack,
  useColorMode,
  useBreakpointValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import AvatarIcon from "./AvatarIcon";
import BlurColor from "./BlurColor";
import SponsorForm from "./Forms/SponsorForm";
import { motion } from "framer-motion";
import TeamForm from "./Forms/TeamForm";
import sponsorBackgroundImage from "../assets/images/sponsor-page-bg.jpg";

const BlockJoinusSponsor: React.FC = () => {
  // const { colorMode } = useColorMode();
  // const displayValue = useBreakpointValue({ base: "none", xl: "block" });

  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const { colorMode } = useColorMode();

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  return (
    <>
      <Box position={"relative"}>
        <Box
          className="block block--dark block--skewed-right block-showcase aos-animate"
          //   bg={useColorModeValue("gray.800", "#16F8B6")}
          //   bg={useColorModeValue("#ACD1B4", "#23214A")}
          bg={useColorModeValue("gray.100", "#1A202C")}
          overflow={"hidden"}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={handleBoxLoad}
          >
            <Box
              className="block block--dark"
              padding="6rem 2rem 6rem 2rem"
              //   marginBottom={{ base: "5rem", lg: "10rem" }}
              // paddingBottom="10rem"
              //   bg={useColorModeValue(
              //     "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
              //     "linear-gradient(45deg, #44000B, #E0455F, #44000B, #E0455F, #44000B, #44000B)"
              //   )}

              bg={useColorModeValue(
                "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                "linear-gradient(80deg, #000C14, #F8002F)"
              )}

              //   display={{ base: "none", xl: "block" }}
              // _hover={{ bg: "red" }}
              // transition="background 0.3s ease-in-out"
            >
              <Box
                className="block__header container"
                textAlign={{ base: "center", lg: "center" }}
                maxWidth="1140px"
                margin="0 auto"
              >
                <Text
                  className="h2 block__heading"
                  color={useColorModeValue("#F1F1F1", "#fff")}
                  fontSize="4rem"
                  fontWeight="bold"
                  lineHeight="1.1"
                >
                  {t("joinUsSponsorPageTitle")}
                </Text>
                <Text
                  className="p"
                  marginTop={10}
                  color={useColorModeValue("gray.100", "gray.100")}
                  fontSize={{ lg: "2.3rem" }}
                >
                  {t("joinUsSponsorPageSubTitle")}
                </Text>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={handleBoxLoad}
          >
            <Stack
              direction={{ base: "column", md: "column", xl: "row" }}
              width="100%"
              height="100%"
              spacing={0}
            >
              {/* Left Box */}
              <Box
                flex={{ base: "1", lg: "1.5" }}
                //   backgroundColor={useColorModeValue("black", "gray.800")}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                >
                  <Image
                    src={sponsorBackgroundImage}
                    width="100%"
                    height="100%"
                    objectFit="fill"
                    opacity={colorMode === "dark" ? 0.8 : 1}
                    //   style={{ filter: "blur(1px)" }}
                  />
                </Box>
              </Box>

              {/* Right Box */}
              <Box
                flex="1"
                //   backgroundColor={useColorModeValue("#747679", "#747679")}
                backgroundColor={useColorModeValue("white", "gray.900")}
                display="flex"
                justifyContent="center"
                //   alignItems="center"
              >
                <Box display="flex" justifyContent="center" padding={50}>
                  <SponsorForm />
                </Box>
              </Box>
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default BlockJoinusSponsor;
