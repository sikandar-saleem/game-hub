import { Game } from "../hooks/useGame";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image height={300} src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            // This simple mapping return array of platform objects
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} marginTop="6px">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
}
