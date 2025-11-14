import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { reducer } from "./reducer";
import data from "../../data.json";
import type { ContextType } from "../types/contexTypes";
import useLocalStorage from "../hooks/useLocalStorage";

const StateDataContext = createContext<ContextType | null>(null);

export default function StateDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [value, setValue] = useLocalStorage("comments-state", data);
  const [state, dispatch] = useReducer(reducer, value);

  useEffect(() => {
    setValue(state);
  }, [setValue, state]);
  return (
    <StateDataContext.Provider value={{ state, dispatch }}>
      {children}
    </StateDataContext.Provider>
  );
}

//eslint-disable-next-line
export function useStateData() {
  const context = useContext(StateDataContext);

  if (!context) throw new Error("Context called outside the provider");

  return context;
}
