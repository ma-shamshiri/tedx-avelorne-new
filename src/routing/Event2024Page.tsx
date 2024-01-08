import React, { useEffect, useState } from "react";
import BlockHero from "../components/BlockHero";
import BlockFeatures from "../components/BlockFeatures";
import { Box, Spinner, chakra } from "@chakra-ui/react";
// import LoadingAnimation from "../components/LoadingAnimation";
import BlockFooter from "../components/BlockFooter";
import Navbar from "../components/Navbar";
import NavBar2 from "../components/NavBar2";
import BlockHero2 from "../components/BlockHero2";
import BlockEvent from "../components/BlockEvent";
import BlockSpeakers from "../components/BlockSpeakers";
import BlockShowcase from "../components/BlockShowcase";
import BlockPlans from "../components/BlockPlans";
import BlockSponsors from "../components/BlockSponsors";
import BlockTestimonials from "../components/BlockTestimonials";
import BlockStatistics from "../components/BlockStatistics";
import BlockHero5 from "../components/BlockHero5";

const LoadingContainer = chakra("div", {
  baseStyle: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
  },
});

const Event2024Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <>
      {/* <AnimatingNumber value={123} /> */}
      <NavBar2 />
      <BlockHero5 />
      <BlockFooter />
    </>
  );
};

export default Event2024Page;
