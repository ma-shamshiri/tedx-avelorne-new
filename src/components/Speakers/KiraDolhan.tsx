import React, { useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { kira } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";

const KiraDolhan: React.FC = () => {
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
          name="Kira Dolhan"
          position="Search and Rescue Volunteer"
          imageSrc={kira}
          talkTopic={t("comingSoon")}
          videoSrc=""
        // videoSrc="https://www.dailymotion.com/embed/video/x8wkz08"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default KiraDolhan;
