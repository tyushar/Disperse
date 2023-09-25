import React, { useContext, useEffect, useState } from 'react';
import { InputType } from '../../type';
import { Context } from '../../utils/Context';
import { getSymbols } from '../../helper/DisperseLogic';

interface InputBoxContainerProps {
  inputList: InputType[];
  setInputList: React.Dispatch<React.SetStateAction<InputType[]>>;
}

const InputBoxContainer: React.FC<InputBoxContainerProps> = ({
  inputList,
  setInputList,
}) => {
  const [inputText, setInputText] = useState('');
  const { store } = useContext(Context);

  useEffect(() => {
    const updatedInputText = store.validatedToken
      .map(
        ({ address, splitingOperater, amount }) =>
          `${address}${splitingOperater}${amount}`
      )
      .join('\n');
    setInputText(updatedInputText);
  }, [store.validatedToken]);

  const handleInputChange = (e: any) => {
    const newText = e.target.value;
    setInputText(newText);
    const lines = newText.split('\n');
    const parsedLines = lines.map((line: any, index: number) => {
      let [address, amount] = line.split(/\s|,|=/);
      address = address ? address.trim() : '';
      amount = amount ? amount.trim() : '';
      return {
        lineNo: index + 1,
        address,
        amount,
        splitingOperater: getSymbols(line),
      };
    });

    setInputList(parsedLines);
  };

  return (
    <div className="space-y-2">
      <p className="dark:text-slate-400">Addresses with Amounts</p>
      <div className="flex justify-between bg-gray-100 rounded w-full min-h-[260px] px-8 py-4 dark:bg-black">
        <div className="px-2 border-r">
          <ul>
            {inputList.map((item: any) => (
              <li key={item.lineNo} className="dark:text-slate-400 font-bold">
                {item.lineNo}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full px-2 dark:text-white">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            className="focus:outline-none font-semibold w-full h-full resize-none scrollbar-hide bg-transparent caret-gray-400"
          />
        </div>
      </div>
      <p className="dark:text-slate-400">Separated by ',' or ' ' or '='</p>
    </div>
  );
};

export default InputBoxContainer;
