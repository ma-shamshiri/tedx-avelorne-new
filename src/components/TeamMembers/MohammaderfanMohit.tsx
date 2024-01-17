import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiMining } from "react-icons/gi";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Erfan.webp";
import imageSrc from "../../assets/images/Erfan-removedBG.webp";
import badgeSrc from "../../assets/images/badge-operation.webp";

const MohammaderfanMohit: React.FC = () => {
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
          name="Mohammaderfan Mohit"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Mohammaderfan"
          lastName="Mohit"
          fullName="Mohammaderfan Mohit"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MohammaderfanMohit;
