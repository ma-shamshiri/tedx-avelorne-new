import React, { useState } from "react";
import BlockJoinusTeam from "../components/BlockJoinusTeam";
import NavBar2 from "../components/NavBar2";
import BlockFooter from "../components/BlockFooter";
import { motion } from "framer-motion";

const JoinUsTeamPage: React.FC = () => {
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
        <BlockJoinusTeam />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default JoinUsTeamPage;
