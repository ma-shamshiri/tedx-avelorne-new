import React, { useEffect, useState } from "react";
import BlockHero from "../components/BlockHero";
import Navigationbar from "../components/Navigationbar";
import BlockFeatures from "../components/BlockFeatures";
import { Box, Flex, HStack, Spinner, Text, chakra } from "@chakra-ui/react";
// import LoadingAnimation from "../components/LoadingAnimation";
import BlockFooter from "../components/BlockFooter";
import Navbar from "../components/Navbar";
import NavBar2 from "../components/NavBar2";
import BlockHero2 from "../components/BlockHero2";
import BlockHero4 from "../components/BlockHero4";
// import IndexPage from "../components/IndexPage";
import NumberCard from "../components/NumberCard";
import BlockStatistics from "../components/BlockStatistics";
import BlockGallery from "../components/BlockGallery";
import BlockJoinus from "../components/BlockJoinusTeam";
import Samin from "../assets/images/Samin.webp";
import BlockProfiles2 from "../components/BlockTeamProfiles";
import TeamForm from "../components/Forms/TeamForm";
import BlockProfiles from "../components/BlockTeamProfiles";
import Event2023page from "./Event2023Page";
import BlockSpeakerProfiles from "../components/BlockSpeakerProfiles";
import Badges from "../components/Badges";
import SpeakerBadge from "../components/SpeakerBadge";
import SpeakerBadgeCard from "../components/SpeakerBadgeCard";
import BlockSpeakers from "../components/BlockSpeakers";
import BlockSpeakerGrid from "../components/BlockSpeakerGrid";
import SaminMajidi from "../components/TeamMembers/SaminMajidi";
import AminShamshiri from "../components/TeamMembers/AminShamshiri";
import AryanaHaghjoo from "../components/TeamMembers/AryanaHaghjoo";
import FathimaNihathaLathiff from "../components/TeamMembers/FathimaNihathaLathiff";
import BlockHero3 from "../components/BlockHero3";

// import IndexPage2 from "../components/IndexPage2";
const LoadingContainer = chakra("div", {
  baseStyle: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
  },
});

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <LoadingContainer>
          <Spinner
            thickness="4px"
            speed="1.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </LoadingContainer>
      ) : (
        // <LoadingAnimation />
        <>
          <Navigationbar />
          <BlockHero />
          <BlockFeatures />
        </>
      )} */}

      {/* <AnimatingNumber value={12345} /> */}
      {/* <IndexPage /> */}
      {/* <IndexPage2 /> */}
      {/* -------------------------------------------------------- */}
      <NavBar2 />
      <BlockHero3 />
      <BlockStatistics />
      <BlockFeatures />
      <BlockFooter />
    </>
  );
};

export default HomePage;
