import React, { useEffect, useState } from "react";
import { chakra } from "@chakra-ui/react";
import BlockFooter from "../components/BlockFooter";
import NavBar2 from "../components/NavBar2";
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
  }, []);

  return (
    <>
      <NavBar2 />
      <BlockHero5 />
      <BlockFooter />
    </>
  );
};

export default Event2024Page;
