import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Reihaneh.webp";
import badgeSrc from "../../assets/images/badge-creativity.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ReihanehGhoroghchian: React.FC = () => {
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
          name="Reihaneh Ghoroghchian"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default ReihanehGhoroghchian;
