import { useEffect, useState } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const API = "https://jsonplaceholder.typicode.com/posts";

  const refetch = async ({ params = {} } = {}) => {
    const url = params._limit ? `${API}?_limit=3` : API;

    try {
      let response = await fetch(url);
      let posts = await response.json();
      setData(posts);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch(API);
  }, []);

  return { data, isLoading, error, refetch };
};
