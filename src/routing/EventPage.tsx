import React, { useState } from "react";
import NavBar2 from "../components/NavBar2";
import BlockEvent from "../components/BlockEvent";
import BlockFooter from "../components/BlockFooter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import BlockShowcase from "../components/BlockShowcase";

const EventPage: React.FC = () => {
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
        <BlockEvent />
        <BlockShowcase />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default EventPage;
