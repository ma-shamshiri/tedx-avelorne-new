import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navigationbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" margin="10px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navigationbar;
