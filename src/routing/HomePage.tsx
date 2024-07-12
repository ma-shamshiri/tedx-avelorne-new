import React, { useEffect, useState } from "react";
import { BlockFeatures } from "../components/BlockFeatures";
import { BlockFooter } from "../components/BlockFooter"
import { BlockHeroHome } from "../components/BlockHeroHome";
import { BlockStatistics } from "../components/BlockStatistics";
import { Navigationbar } from "../components/Navigationbar";
import { BlockScrollingText } from "../components/BlockScrollingText";
import { BlockSponsorsCarousel } from "../components/BlockSponsorsCarousel";

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
      <Navigationbar />
      <BlockHeroHome />
      <BlockStatistics />
      <BlockScrollingText />
      <BlockFeatures />
      <BlockFooter />
    </>
  );
};

export default HomePage;
