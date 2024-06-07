import React, { useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { motion } from "framer-motion";
import { myra } from "../../assets";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";

const MyraVirgil: React.FC = () => {
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
          name="Myra Virgil"
          position="Philanthropy Executive | Strategist | Storyteller"
          imageSrc={myra}
          talkTopic={t("comingSoon")}
          videoSrc=""
        // videoSrc="https://www.dailymotion.com/embed/video/x8wkz02"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MyraVirgil;
