import { GameQuery } from './../App';
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
  gameQuery: GameQuery,
) => useData<Game>(
  '/games',
  {
    params: {
      genre: gameQuery.genre?.id,
      platform: gameQuery.platform?.id,
      ordering: gameQuery.sortFilter
    }
  },
  [gameQuery]
);

export default useGame;