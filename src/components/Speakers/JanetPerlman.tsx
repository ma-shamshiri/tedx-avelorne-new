import React, { useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { janet } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";

const JanetPerlman: React.FC = () => {
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
        <Navigationbar />
        <BlockSpeakerProfiles
          name="Janet Perlman"
          position="Animator and Children's Book Author"
          imageSrc={janet}
          talkTopic={t("comingSoon")}
          videoSrc=""
        // videoSrc="https://www.dailymotion.com/embed/video/x8wkz04"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default JanetPerlman;
