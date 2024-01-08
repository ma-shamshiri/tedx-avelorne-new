import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Samin.webp";
import badgeSrc from "../../assets/images/badge-organizer.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const SaminMajidi: React.FC = () => {
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
          name="Samin Majidi"
          title="Ph.D. Student in Physics | McGill"
          role="Organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default SaminMajidi;
