import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

export default function GenreList() {
  const { data: genres, error, isLoading } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={genre.image_background}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
