// const Badges = () => {
//   return (
//     <>
//       <span className="badge badge--primary">10% Off</span>
//       <span className="badge badge--secondary">10% Off</span>
//       <span className="badge badge--primary badge-small">10% Off</span>
//     </>
//   );
// };

// export default Badges;

import { Badge, Box } from "@chakra-ui/react";

const Badges = () => {
  return (
    <>
      {/* ************* badge--primary ************* */}
      <Badge
        className="badge badge--primary"
        borderRadius="20px"
        fontSize={{ base: "2rem", lg: "1.5rem" }}
        fontWeight="600"
        padding="0.5rem 2rem"
        whiteSpace="nowrap"
        bg="#2584ff"
        color="#fff"
      >
        10% Off
      </Badge>

      {/* ************* badge--secondary ************* */}
      <Badge
        className="badge badge--secondary"
        borderRadius="20px"
        fontSize={{ base: "2rem", lg: "1.5rem" }}
        fontWeight="600"
        padding="0.5rem 2rem"
        whiteSpace="nowrap"
        bg="#00d9ff"
        color="#fff"
      >
        10% Off
      </Badge>

      {/* ************* badge--small (primary) ************* */}
      <Badge
        className="badge badge--primary badge--small"
        as={Box} // Render as a Box component
        borderRadius="20px"
        fontSize={{ base: "1.6rem", lg: "1.2rem" }}
        fontWeight="600"
        padding={"0.5rem 1.5rem"}
        whiteSpace="nowrap"
        bg="#2584ff"
        color="#fff"
        // sx={{
        //   "@media screen and (min-width: 1024px)": {
        //     fontSize: "1.2rem",
        //   },
        // }}
      >
        10% Off
      </Badge>
    </>
  );
};

export default Badges;
