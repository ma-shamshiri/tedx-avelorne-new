import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { SiProtondb } from "react-icons/si";
// import { IoLogoElectron } from "react-icons/io5";
import { SiNeutralinojs } from "react-icons/si";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "..//BlockFooter";

// import imageSrc from "../../assets/images/Samin.webp";
import imageSrc from "../../assets/images/Samin-removedBG.webp";
import badgeSrc from "../../assets/images/badge-organizer.webp";

const SaminMajidi: React.FC = () => {
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
          name="Samin Majidi"
          title="Ph.D. Student in Physics | McGill"
          role="Organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Samin"
          lastName="Majidi"
          fullName="Samin Majidi"
          title="Ph.D. Student in Physics | McGill"
          role="Organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote")}
          icon={SiNeutralinojs}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default SaminMajidi;
