// import React, { useState } from "react";

// import { BsChevronDown } from "react-icons/bs";

// const Collapsibles = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className={`collapsible ${expanded ? "collapsible--expanded" : ""}`}>
//       <header className="collapsible__header" onClick={handleToggle}>
//         <h2 className="collapsible__heading">Item 1</h2>
//         <BsChevronDown
//           className={`icon icon--white collapsible__chevron ${
//             expanded ? "collapsible--expanded" : ""
//           }`}
//         />
//       </header>
//       <div className="collapsible__content">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
//         accusamus.
//       </div>
//     </div>
//   );
// };

// export default Collapsibles;

import { Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Collapsibles = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={`collapsible ${expanded ? "collapsible--expanded" : ""}`}>
      <Box
        className="collapsible__header"
        display="flex"
        justifyContent="space-between"
        onClick={handleToggle}
      >
        <Text
          className="h2 collapsible__heading"
          color="var(--color-headings)"
          marginBottom="1rem"
          fontSize="3rem"
          fontWeight="bold"
          lineHeight="1.1"
          marginTop="0"
        >
          Item 1
        </Text>

        <Icon
          className={`icon icon--white collapsible__chevron ${
            expanded ? "collapsible--expanded" : ""
          }`}
          as={IoIosArrowDropdownCircle}
          width="40px"
          height="40px"
          color="var(--color-white)"
          style={{
            transform: expanded ? "rotate(0)" : "rotate(-90deg)",
            transition: "transform 0.3s",
          }}
        />
      </Box>
      <Box
        className="collapsible__content"
        style={{
          maxHeight: expanded ? "1000px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s, opacity 0.3s",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        accusamus.
      </Box>
    </Box>
  );
};

export default Collapsibles;
