import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface FetchedResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // When we visit a page and initiate a API request but we move to next page,
  // API still waiting for response so in this case we need to cancel this 
  // API request during unmounting of component
  useEffect(() => {
    const controller = new AbortController();
   
    setIsLoading(true)
    apiClient
      .get<FetchedResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false);
      })
      .catch((err) => { 
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

      return () => controller.abort();
  }, []);

  return { data, error, isLoading }
}

export default useData;