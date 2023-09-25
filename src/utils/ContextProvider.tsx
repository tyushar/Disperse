import React, { useState } from 'react';
import { Context } from './Context';
import { StoreType } from './type';
import { initialStore } from './store';

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [store, setStore] = useState<StoreType>(initialStore);
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
