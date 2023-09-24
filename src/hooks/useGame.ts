import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Platform {
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

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // When we visit a page and initiate a API request but we move to next page,
  // API still waiting for response so in this case we need to cancel this 
  // API request during unmounting of component
  useEffect(() => {
    const controller = new AbortController();
   
    setIsLoading(true)
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false);
      })
      .catch((err) => { 
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

      return () => controller.abort();
  }, []);

  return { games, error, isLoading }
}

export default useGame;