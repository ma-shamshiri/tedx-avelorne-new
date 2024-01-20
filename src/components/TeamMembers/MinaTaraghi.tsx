import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiLaptop } from "react-icons/gi";
import NavBar2 from "../NavBar2";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import BlockTeamProfiles2 from "../BlockTeamProfiles2";
import BlockFooter from "../BlockFooter";

// import imageSrc from "../../assets/images/Mina.webp";
import imageSrc from "../../assets/images/Mina-removedBG.webp";
import badgeSrc from "../../assets/images/badge-marketing.webp";

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
        {/* <BlockTeamProfiles
          name="Mina Taraghi"
          title="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote")}
        /> */}
        <BlockTeamProfiles2
          firstName="Mina"
          lastName="Taraghi"
          fullName="Mina Taraghi"
          title="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default MinaTaraghi;
