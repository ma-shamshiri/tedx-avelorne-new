import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ImFilm } from "react-icons/im";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "..//BlockFooter";

// import imageSrc from "../../assets/images/Zahra.webp";
import imageSrc from "../../assets/images/Zahra-removedBG.webp";
import badgeSrc from "../../assets/images/badge-content-creator.webp";

const ZahraAhmadi: React.FC = () => {
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
          name="Zahra Ahmadi"
          title="Multimedia Editing Coordinator | Genetec Inc."
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/zahra-1997"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("zahraQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Zahra"
          lastName="Ahmadi"
          fullName="Zahra Ahmadi"
          title="Multimedia Editing Coordinator | Genetec Inc."
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/zahra-1997"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("zahraQuote")}
          icon={ImFilm}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default ZahraAhmadi;
