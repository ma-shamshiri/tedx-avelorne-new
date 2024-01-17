import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiElectricalResistance } from "react-icons/gi";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Reihaneh.webp";
import imageSrc from "../../assets/images/unknownGirlProfile.jpg";
import badgeSrc from "../../assets/images/badge-creativity.webp";

const ReihanehGhoroghchian: React.FC = () => {
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
          name="Reihaneh Ghoroghchian"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Reihaneh"
          lastName="Ghoroghchian"
          fullName="Reihaneh Ghoroghchian"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Creativity"
          // imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default ReihanehGhoroghchian;
