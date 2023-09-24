import { Genre } from './useGenre';
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform}[]
  metacritic: number;
}

const useGame = (genre: Genre | null) => useData<Game>('/games', { params: { genre: genre?.id}}, [genre?.id])

export default useGame;