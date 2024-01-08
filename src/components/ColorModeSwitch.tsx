import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
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
