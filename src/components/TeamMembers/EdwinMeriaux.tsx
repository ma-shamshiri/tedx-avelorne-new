import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiElectricalResistance } from "react-icons/gi";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Edwin.webp";
import imageSrc from "../../assets/images/Edwin-removedBG.webp";
import badgeSrc from "../../assets/images/badge-curation.webp";

const EdwinMeriaux: React.FC = () => {
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
          name="Edwin Meriaux"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Edwin"
          lastName="Meriaux"
          fullName=" Meriaux"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default EdwinMeriaux;
