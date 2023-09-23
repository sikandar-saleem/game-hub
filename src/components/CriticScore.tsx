import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export default function CriticScore({ score }: Props) {
  const color = score > 90 ? "green" : "red";
  return (
    <Badge colorScheme={color} fontSize={16} paddingX={4} borderRadius={4}>
      {score}
    </Badge>
  );
}
