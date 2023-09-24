import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      boxSize="4rem"
      bg={useColorModeValue("gray.200", "gray.700")}
      _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
    >
      {colorMode === "light" ? (
        <MoonIcon color="black" boxSize="1.5rem" />
      ) : (
        <SunIcon boxSize="1.8rem" />
      )}
    </Button>
  );
};

export default ColorModeSwitch;
