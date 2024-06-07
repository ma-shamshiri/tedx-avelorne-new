import React, { useState } from "react";
import { andrew } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";

const AndrewChurchil: React.FC = () => {
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
          name="Andrew Churchil"
          position="Carolyn Jack MD | Professor | Start-Up Entrepreneur"
          imageSrc={andrew}
          talkTopic={t("comingSoon")}
          videoSrc=""
        // videoSrc="https://www.dailymotion.com/embed/video/x8wkyzu"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default AndrewChurchil;
