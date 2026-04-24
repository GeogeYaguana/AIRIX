import { useCallback, useEffect, useRef, useState } from "react";

type UseFetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

type UseFetchOptions = {
  immediate?: boolean;
};

type UseFetchReturn<T> = {
  state: UseFetchState<T>;
  refetch: () => Promise<void>;
  reset: () => void;
};

export function useFetch<T>(
  url: string,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const { immediate = true } = options;

  const [state, setState] = useState<UseFetchState<T>>({ status: "idle" });
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setState({ status: "loading" });

    try {
      const response = await fetch(url, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data: T = await response.json();

      setState({
        status: "success",
        data,
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          return;
        }

        setState({
          status: "error",
          error: error.message,
        });
        return;
      }

      setState({
        status: "error",
        error: "Unknown error",
      });
    }
  }, [url]);

  const reset = useCallback(() => {
    abortControllerRef.current?.abort();
    setState({ status: "idle" });
  }, []);

  useEffect(() => {
    if (!immediate) return;

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchData, immediate]);

  return {
    state,
    refetch: fetchData,
    reset,
  };
}