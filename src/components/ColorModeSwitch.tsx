import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  // These are defined variable and metod in this hook
  // that automatically toggle between light/dark mode

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Text>
    </HStack>
  );
}
