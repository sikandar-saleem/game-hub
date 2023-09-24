import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      width={{
        sm: "480px",
        md: "384px",
        lg: "330px",
        xl: "420px",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}
