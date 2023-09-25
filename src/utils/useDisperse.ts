import React, { useCallback, useContext, useState } from "react";
import { InputType } from "../type";
import { Context } from "./Context";
import {
  combineBalanceDuplicates,
  groupData,
  keepFirstDuplicates,
  validationCheck,
} from "../helper/DisperseLogic";

// useDisperse Custom Hook

export const useDisperse = () => {
  const { store, setStore } = useContext(Context);

  const [tokenList, setTokenList] = useState<InputType[]>([
    { lineNo: 1, address: "", amount: "", splitingOperater: "" },
  ]);

  const keepFirst = useCallback(() => {
    const validatedToken = keepFirstDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setTokenList(validatedToken);
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  }, [store, setStore]);

  const combineBalance = useCallback(() => {
    const validatedToken = combineBalanceDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setTokenList(validatedToken);
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  }, [store, setStore]);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const filteredTokens = tokenList.filter(
        (token) => token.address !== "" && token.address !== ""
      );
      const errors = groupData(validationCheck(filteredTokens));

      let error = !!errors.length;

      setStore({
        ...store,
        errors,
        preview: error === false ? true : false,
        validatedToken: filteredTokens,
      });
    },
    [tokenList, store, setStore]
  );

  return {
    tokenList,
    setTokenList,
    submit,
    keepFirst,
    combineBalance,
  };
};
