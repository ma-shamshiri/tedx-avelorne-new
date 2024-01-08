import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Erfan.webp";
import badgeSrc from "../../assets/images/badge-operation.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MohammaderfanMohit: React.FC = () => {
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
          name="Mohammaderfan Mohit"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MohammaderfanMohit;
