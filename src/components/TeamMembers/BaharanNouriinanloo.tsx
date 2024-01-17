import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import { GiElectricalResistance } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Baharan.webp";
import imageSrc from "../../assets/images/Baharan-removedBG.webp";
import badgeSrc from "../../assets/images/badge-marketing.webp";

const BaharanNouriinanloo: React.FC = () => {
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
          name="Baharan Nouriinanloo"
          title="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
          role="Marketing"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Baharan"
          lastName="Nouriinanloo"
          fullName="Baharan Nouriinanloo"
          title="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
          role="Marketing"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default BaharanNouriinanloo;
