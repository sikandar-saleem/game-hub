import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
}
