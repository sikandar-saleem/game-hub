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
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortFilter,
      search: gameQuery.searchText
    }
  },
  [gameQuery]
);

export default useGame;