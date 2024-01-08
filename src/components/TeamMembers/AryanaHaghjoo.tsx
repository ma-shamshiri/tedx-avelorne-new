import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Aryana.webp";
import badgeSrc from "../../assets/images/badge-curation.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AryanaHaghjoo: React.FC = () => {
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
        <BlockTeamProfiles
          name="Aryana Haghjoo"
          title="M.Sc. Student in Physics | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/AryanaHaghjoo"
          tedHref="https://www.ted.com/profiles/44809246"
          quoteText={t("aryanaQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default AryanaHaghjoo;
