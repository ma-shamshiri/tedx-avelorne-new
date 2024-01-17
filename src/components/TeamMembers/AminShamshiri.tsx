import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Amin.webp";
import imageSrc from "../../assets/images/Amin-removedBG.webp";
import badgeSrc from "../../assets/images/badge-webmaster.webp";

const AminShamshiri: React.FC = () => {
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
          name="Amin Shamshiri"
          title="Software Engineer | EnerZam Inc."
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          // quoteTopMargin={{ base: "50rem", lg: "8rem" }}
          quoteText={t("aminQuote")}
        /> */}

        <BlockTeamProfiles2
          firstName="Mohammad Amin"
          lastName="Shamshiri"
          fullName="Mohammad Amin Shamshiri"
          title="Software Engineer | EnerZam Inc."
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          quoteText={t("aminQuote")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default AminShamshiri;
