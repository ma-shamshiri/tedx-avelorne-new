import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Amin.webp";
import badgeSrc from "../../assets/images/badge-webmaster.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AminShamshiri: React.FC = () => {
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
          name="Amin Shamshiri"
          title="Software Engineer | EnerZam Inc."
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          // quoteTopMargin={{ base: "50rem", lg: "8rem" }}
          quoteText={t("aminQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default AminShamshiri;
