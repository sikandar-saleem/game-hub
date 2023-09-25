import { Genre } from './useGenre';
import useData from "./useData";
import { Platform } from './usePlatform';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}

const useGame = (
  genre: Genre | null,
  platform: Platform | null
) => useData<Game>(
  '/games',
  {
    params: {
      genre: genre?.id,
      platform: platform?.id
    }
  },
  [genre?.id, platform?.id]
);

export default useGame;