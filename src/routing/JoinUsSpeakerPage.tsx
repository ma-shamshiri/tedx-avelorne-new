import React, { useState } from "react";
import NavBar2 from "../components/NavBar2";
import BlockFooter from "../components/BlockFooter";
import BlockJoinusSpeaker from "../components/BlockJoinusSpeaker";
import { motion } from "framer-motion";

const JoinUsSpeakerPage: React.FC = () => {
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
        <BlockJoinusSpeaker />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default JoinUsSpeakerPage;
