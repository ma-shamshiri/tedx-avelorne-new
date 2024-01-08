import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Baharan.webp";
import badgeSrc from "../../assets/images/badge-marketing.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const BaharanNouriinanloo: React.FC = () => {
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
          name="Baharan Nouriinanloo"
          title="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default BaharanNouriinanloo;
