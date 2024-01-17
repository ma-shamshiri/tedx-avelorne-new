import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IoNutritionSharp } from "react-icons/io5";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Gezal.webp";
import imageSrc from "../../assets/images/Gezal-removedBG.webp";
import badgeSrc from "../../assets/images/badge-operation.webp";

const GezalNajafi: React.FC = () => {
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
          name="Gezal Najafi"
          title="M.Sc. Student in Clinical Nutrition | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("gezalQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Gezal"
          lastName="Najafi"
          fullName="Gezal Najafi"
          title="M.Sc. Student in Clinical Nutrition | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("gezalQuote")}
          icon={IoNutritionSharp}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default GezalNajafi;
