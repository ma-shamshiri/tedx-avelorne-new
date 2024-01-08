import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Zahra.webp";
import badgeSrc from "../../assets/images/badge-content-creator.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ZahraAhmadi: React.FC = () => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  return (
    <>
      '
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <NavBar2 />
        <BlockTeamProfiles
          name="Zahra Ahmadi"
          title="Multimedia Editing Coordinator | Genetec Inc."
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/zahra-1997"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("zahraQuote")}
        />
        <BlockFooter />
      </motion.div>
      '
    </>
  );
};

export default ZahraAhmadi;
