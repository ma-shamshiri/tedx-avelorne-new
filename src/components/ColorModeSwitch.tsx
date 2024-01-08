// import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// const ColorModeSwitch = () => {
//   const { toggleColorMode, colorMode } = useColorMode();

//   return (
//     <Button
//       onClick={toggleColorMode}
//       boxSize="4rem"
//       bg={useColorModeValue("gray.200", "gray.700")}
//       _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
//     >
//       {colorMode === "light" ? (
//         <MoonIcon color="black" boxSize="1.5rem" />
//       ) : (
//         <SunIcon boxSize="1.8rem" />
//       )}
//     </Button>
//   );
// };

// export default ColorModeSwitch;

import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isLightMode = colorMode === "light";

  return (
    <Button
      onClick={toggleColorMode}
      borderRadius="full"
      p={1}
      transition="background 0.4s, color 0.3s"
      _hover={{
        bg: isLightMode ? "#2220ba" : "gold",
        color: isLightMode ? "white" : "black",
      }}
      bg={isLightMode ? "gray.300" : "gray.600"}
      color={isLightMode ? "black" : "white"}
      boxSize="4rem"
    >
      {isLightMode ? (
        <LuMoonStar size="1.5rem" />
      ) : (
        <SunIcon boxSize="1.5rem" />
      )}
    </Button>
  );
};

export default ColorModeSwitch;
