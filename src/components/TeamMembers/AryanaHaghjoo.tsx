import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";
import { IoLogoElectron } from "react-icons/io5";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Aryana.webp";
import imageSrc from "../../assets/images/Aryana-removedBG.webp";
import badgeSrc from "../../assets/images/badge-curation.webp";

const AryanaHaghjoo: React.FC = () => {
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
          name="Aryana Haghjoo"
          title="M.Sc. Student in Physics | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/AryanaHaghjoo"
          tedHref="https://www.ted.com/profiles/44809246"
          quoteText={t("aryanaQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Aryana"
          lastName="Haghjoo"
          fullName="Aryana Haghjoo"
          title="M.Sc. Student in Physics | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/AryanaHaghjoo"
          tedHref="https://www.ted.com/profiles/44809246"
          quoteText={t("aryanaQuote")}
          icon={IoLogoElectron}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default AryanaHaghjoo;
