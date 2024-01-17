import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiMining } from "react-icons/gi";

import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Hamidreza.webp";
import imageSrc from "../../assets/images/Hamidreza-removedBG.webp";
import badgeSrc from "../../assets/images/badge-curation.webp";

const HamidrezaErmagan: React.FC = () => {
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
        {/* <BlockTeamProfiles
          name="Hamidreza Ermagan"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/hrermagan"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("hamidrezaQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Hamidreza"
          lastName="Ermagan"
          fullName="Hamidreza Ermagan"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/hrermagan"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("hamidrezaQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default HamidrezaErmagan;
