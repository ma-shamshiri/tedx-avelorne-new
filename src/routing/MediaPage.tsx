import React, { useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockGallery } from "../components/BlockGallery";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";

const MediaPage: React.FC = () => {
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
        <Navigationbar />
        <BlockGallery />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default MediaPage;
