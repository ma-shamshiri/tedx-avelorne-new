import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Fathima.webp";
import imageSrc from "../../assets/images/Fathima-removedBG.webp";
import badgeSrc from "../../assets/images/badge-operation.webp";

const FathimaNihathaLathiff: React.FC = () => {
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
          name="Fathima Nihatha Lathiff"
          title="M.Sc. Student in Computer Science | Concordia"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/nihatha"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("fathimaQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Fathima Nihatha"
          lastName="Lathiff"
          fullName="Fathima Nihatha Lathiff"
          title="M.Sc. Student in Computer Science | Concordia"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/nihatha"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("fathimaQuote")}
          icon={FaComputer}
        />

        <BlockFooter />
      </motion.div>
    </>
  );
};

export default FathimaNihathaLathiff;
