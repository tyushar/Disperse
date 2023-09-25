import { createContext } from "react";
import { ContextType } from "./type";
import { initialStore } from "./store";

export const Context = createContext<ContextType>({
    store: initialStore,
    setStore: () => { }
})