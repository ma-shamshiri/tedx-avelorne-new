import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiMusicalNotes } from "react-icons/gi";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Pegah.webp";
import imageSrc from "../../assets/images/Pegah-removedBG.webp";
import badgeSrc from "../../assets/images/badge-creativity.webp";

const PegahEinakchi: React.FC = () => {
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
          name="Pegah Einakchi"
          title="Vocal Coach | Private"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("pegahQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Pegah"
          lastName="Einakchi"
          fullName="Pegah Einakchi"
          title="Vocal Coach | Private"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("pegahQuote")}
          icon={GiMusicalNotes}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default PegahEinakchi;
