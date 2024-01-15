import React, { useEffect, useState } from "react";
import BlockFeatures from "../components/BlockFeatures";
import BlockFooter from "../components/BlockFooter";
import NavBar2 from "../components/NavBar2";
import BlockStatistics from "../components/BlockStatistics";
import BlockHero3 from "../components/BlockHero3";
import BlockHero6 from "../components/BlockHero6";

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
      <NavBar2 />
      {/* <BlockHero3 /> */}
      <BlockHero6 />
      <BlockStatistics />
      <BlockFeatures />
      <BlockFooter />
    </>
  );
};

export default HomePage;
