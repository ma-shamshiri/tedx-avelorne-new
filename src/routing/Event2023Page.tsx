import React, { useEffect, useState } from "react";
import BlockHero from "../components/BlockHero";
import { Box, Spinner, chakra } from "@chakra-ui/react";
import BlockFooter from "../components/BlockFooter";
import NavBar2 from "../components/NavBar2";
import BlockShowcase from "../components/BlockShowcase";
import BlockSponsors from "../components/BlockSponsors";
import BlockStatistics from "../components/BlockStatistics";

const Event2023Page: React.FC = () => {
  return (
    <>
      <NavBar2 />
      <BlockHero />
      <BlockStatistics />
      <BlockSponsors />
      <BlockFooter />
    </>
  );
};

export default Event2023Page;
