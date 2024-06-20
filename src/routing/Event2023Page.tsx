import React, { useEffect } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockHero2023 } from "../components/BlockHero2023";
import { BlockSponsors } from "../components/BlockSponsors";
import { Navigationbar } from "../components/Navigationbar";

const Event2023Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigationbar />
      <BlockHero2023 />
      <BlockSponsors />
      <BlockFooter />
    </>
  );
};

export default Event2023Page;
