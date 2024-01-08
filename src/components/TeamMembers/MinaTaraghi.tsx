import React, { useState } from "react";
import BlockFooter from "..//BlockFooter";
import NavBar2 from "../NavBar2";
import BlockTeamProfiles from "../BlockTeamProfiles";

import imageSrc from "../../assets/images/Mina.webp";
import badgeSrc from "../../assets/images/badge-marketing.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MinaTaraghi: React.FC = () => {
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
        <BlockTeamProfiles
          name="Mina Taraghi"
          title="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MinaTaraghi;
