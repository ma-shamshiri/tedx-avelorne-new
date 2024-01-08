import React, { useState } from "react";
import NavBar2 from "../components/NavBar2";
import BlockFooter from "../components/BlockFooter";
import BlockJoinusSponsor from "../components/BlockJoinusSponsor";
import { motion } from "framer-motion";

const JoinUsSponsorPage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <NavBar2 />
        <BlockJoinusSponsor />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default JoinUsSponsorPage;
