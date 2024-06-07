import React, { useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { peggy } from "../../assets";
import { useTranslation } from "react-i18next";

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
        <Navigationbar />
        <BlockSpeakerProfiles
          name="Peggy Bell"
          position="Founder | Principal Consultant"
          imageSrc={peggy}
          talkTopic={t("comingSoon")}
          // videoSrc=""
          videoSrc="https://www.dailymotion.com/embed/video/x8wkyzw"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default PeggyBell;
