import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import AvatarIcon from "../components/AvatarIcon";
import BlurColor from "../components/BlurColor";
import NavBar2 from "../components/NavBar2";
import BlockFooter from "../components/BlockFooter";
import BlockJoinusSponsor from "../components/BlockJoinusSponsor";
import heroimage7 from "../assets/images/heroImage7.jpg";
import sponsorBG from "../assets/images/sponsor-page-bg.jpg";
import sponsorBG2 from "../assets/images/sponsor-page-bg2.jpg";
import sponsorBG3 from "../assets/images/event2023.png";

const BlockHero2024: React.FC = () => {
  return (
    <>
      <NavBar2 />
      <Box
        opacity="0.2"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        backgroundImage={sponsorBG3}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        objectFit="cover"
      />
      <BlockJoinusSponsor />
      <BlockFooter />
    </>
  );
};
export default BlockHero2024;
