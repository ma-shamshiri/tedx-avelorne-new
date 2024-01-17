import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { GiMining } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";

import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Mohammad.webp";
import imageSrc from "../../assets/images/Mohammad-removedBG.webp";
import badgeSrc from "../../assets/images/badge-content-creator.webp";

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
        {/* <BlockTeamProfiles
          name="Mohammad Zaid"
          title="Graduate Research Assistant | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Mohammad"
          lastName="Zaid"
          fullName="Mohammad Zaid"
          title="Graduate Research Assistant | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadQuote")}
          icon={GiGraduateCap}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MohammadZaid;
