
import { useState } from 'react';

import { Chip } from "../Types/type";

export const useInitialStates = () => {

  const [availableItems, setAvailableItems] = useState<Chip[]>([
    { id: 1, name: "Jone Doe", image: "./assets/pro1.jpeg" },
    { id: 2, name: "Aryan Khan", image: "./assets/pro2.jpeg" },
    { id: 3, name: "Jan Doe", image: "./assets/pro3.png" },
    { id: 4, name: "Salman Khan", image: "./assets/pro4.png" },
    { id: 5, name: "John Miller", image: "./assets/pro5.jpeg" },
    { id: 6, name: "Rohit Sharma", image: "./assets/pro6.jpeg" },
    { id: 7, name: "Miya Kapoor", image: "./assets/pro7.jpeg" },
  ]);

  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [selectedChipsCount, setSelectedChipsCount] = useState(0);
  const [latestChipIndex, setLatestChipIndex] = useState<number | null>(null);
  const [focused, setFocused] = useState<boolean>(false);

  return {
    availableItems,
    setAvailableItems,
    inputValue,
    setInputValue,
    chips,
    setChips,
    selectedChipsCount,
    setSelectedChipsCount,
    latestChipIndex,
    setLatestChipIndex,
    focused,
    setFocused,
  };
};
