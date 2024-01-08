import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Mohammad.webp";
import badgeSrc from "../../assets/images/badge-content-creator.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MohammadZaid: React.FC = () => {
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
          name="Mohammad Zaid"
          title="Graduate Research Assistant | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MohammadZaid;
