import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Fathima.webp";
import badgeSrc from "../../assets/images/badge-operation.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const FathimaNihathaLathiff: React.FC = () => {
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
          name="Fathima Nihatha Lathiff"
          title="M.Sc. Student in Computer Science | Concordia"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/nihatha"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("fathimaQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default FathimaNihathaLathiff;
