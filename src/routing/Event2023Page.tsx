import React from "react";
import BlockHero from "../components/BlockHero";
import BlockFooter from "../components/BlockFooter";
import NavBar2 from "../components/NavBar2";
import BlockSponsors from "../components/BlockSponsors";
import BlockStatistics from "../components/BlockStatistics";

const Event2023Page: React.FC = () => {
  return (
    <>
      <NavBar2 />
      <BlockHero />
      {/* <BlockStatistics /> */}
      <BlockSponsors />
      <BlockFooter />
    </>
  );
};

export default Event2023Page;
