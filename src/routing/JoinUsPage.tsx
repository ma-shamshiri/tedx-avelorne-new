import React, { useState } from "react";
import NavBar2 from "../components/NavBar2";
import BlockFooter from "../components/BlockFooter";
import BlockPlans from "../components/BlockPlans";
import { motion } from "framer-motion";

const JoinUsPage: React.FC = () => {
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
        <BlockPlans />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default JoinUsPage;
