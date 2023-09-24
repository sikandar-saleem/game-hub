import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

interface Genre{
  id: number;
  name: string;
}

interface FetchGenreResponse{
  count: number;
  results: Genre[]
}

const useGenre = () => {
  const[genres, seteGenres] = useState<Genre[]>([])
  const[error, setError] = useState('')
  const[isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal }).then((res) => {
      seteGenres(res.data.results)
      setIsLoading(false);
    }).catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
    });
    return () => controller.abort();
  }, [])
  
  return { genres, error, isLoading }
}

export default useGenre;