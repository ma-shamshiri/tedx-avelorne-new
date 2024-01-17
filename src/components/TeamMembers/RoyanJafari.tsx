import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FcBiotech } from "react-icons/fc";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Royan.webp";
import imageSrc from "../../assets/images/Royan-removedBG.webp";
import badgeSrc from "../../assets/images/badge-content-creator.webp";

const RoyanJafari: React.FC = () => {
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
          name="Royan Jafari"
          title="M.Eng. Biological & Biomedical Engineering | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/royan-jafari"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Royan"
          lastName="Jafari"
          fullName="Royan Jafari"
          title="M.Eng. Biological & Biomedical Engineering | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/royan-jafari"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote")}
          icon={FcBiotech}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default RoyanJafari;
