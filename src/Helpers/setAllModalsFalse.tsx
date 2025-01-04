import { Dispatch, SetStateAction } from "react";

export const setAllModalsFalse = (
  setState: Dispatch<SetStateAction<{ [key: string]: boolean }>>
) => [
  setState((prevState: { [key: string]: boolean }) => {
    const newMapped = Object.keys(prevState).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as { [key: string]: boolean });

    return newMapped;
  }),
];
