// src/contexts/FetchDataContext.tsx
import { createContext, useContext } from "react";

interface IFetchDataContext {
  fetchData: () => Promise<void>;
}

export const FetchDataContext = createContext<IFetchDataContext | undefined>(undefined);

export const useFetchData = () => {
  const context = useContext(FetchDataContext);
  if (!context) {
    throw new Error("useFetchData deve ser usado dentro de um FetchDataProvider");
  }
  return context;
};
