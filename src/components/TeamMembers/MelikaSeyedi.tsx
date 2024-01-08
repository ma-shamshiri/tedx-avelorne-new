import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Melika.webp";
import badgeSrc from "../../assets/images/badge-sponsorship.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MelikaSeyedi: React.FC = () => {
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
          name="Melika Seyedi"
          title="Ph.D. Student in Computer Engineering | Concordia"
          role="Sponsorship"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/melika-seyedi-048416140"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("melikaQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MelikaSeyedi;
