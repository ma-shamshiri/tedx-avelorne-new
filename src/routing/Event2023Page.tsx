import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockHero2023 } from "../components/BlockHero2023";
import { BlockSponsors } from "../components/BlockSponsors";
import { Navigationbar } from "../components/Navigationbar";
import { motion } from 'framer-motion';

const Event2023Page: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Navigationbar />
        <BlockHero2023 />
        <BlockSponsors />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default Event2023Page;
