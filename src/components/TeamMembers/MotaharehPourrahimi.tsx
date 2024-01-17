import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LuBrainCircuit } from "react-icons/lu";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Motahareh.webp";
import imageSrc from "../../assets/images/Motahareh-removedBG.webp";
import badgeSrc from "../../assets/images/badge-curation.webp";

const MotaharehPourrahimi: React.FC = () => {
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
          name="Motahareh Pourrahimi"
          title="Ph.D. Student in Neuroscience | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("motaharehQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Motahareh"
          lastName="Pourrahimi"
          fullName="Motahareh Pourrahimi"
          title="Ph.D. Student in Neuroscience | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("motaharehQuote")}
          icon={LuBrainCircuit}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MotaharehPourrahimi;
