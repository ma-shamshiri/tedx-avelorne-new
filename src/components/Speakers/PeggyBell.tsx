import React, { useState } from "react";
import NavBar2 from "../NavBar2";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import BlockFooter from "../BlockFooter";
import imageSrc from "../../assets/images/Peggy.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const PeggyBell: React.FC = () => {
  const { t } = useTranslation();

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
        <BlockSpeakerProfiles
          name="Peggy Bell"
          position="Founder | Principal Consultant"
          imageSrc={imageSrc}
          talkTopic="Coming Soon ..."
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default PeggyBell;
