import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiMining } from "react-icons/gi";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Fatemeh.webp";
import imageSrc from "../../assets/images/Fatemeh-removedBG.webp";
import badgeSrc from "../../assets/images/badge-coorganizer.webp";

const FatemehTavanaei: React.FC = () => {
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
          name="Fatemeh Tavanaei"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Co-organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/38189071/about"
          quoteText={t("fatemehQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Fatemeh"
          lastName="Tavanaei"
          fullName="Fatemeh Tavanaei"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Co-organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/38189071/about"
          quoteText={t("fatemehQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default FatemehTavanaei;
