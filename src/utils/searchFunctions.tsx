import { Chip } from "../Types/type";

export const useSearchFunctions = (
  setFocused: React.Dispatch<React.SetStateAction<boolean>>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setChips: React.Dispatch<React.SetStateAction<Chip[]>>,
  setAvailableItems: React.Dispatch<React.SetStateAction<Chip[]>>,
  setSelectedChipsCount: React.Dispatch<React.SetStateAction<number>>,
  latestChipIndex: number | null,
  setLatestChipIndex: React.Dispatch<React.SetStateAction<number | null>>,
  inputValue: string,
  chips: Chip[],
  availableItems: Chip[]
) => {
  // To handle focus
  const onFocus = (): void => setFocused(true);

  // To handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(e.target.value);
  };

  // To handle when you click on any item
  const handleItemClick = (item: Chip): void => {
    const updatedChips = [...chips, item];
    const updatedAvailableItems = availableItems.filter((i) => i !== item);

    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
    setSelectedChipsCount((count) => count + 1);
    setInputValue("");
  };

  // To handle when you click on delete icon
  const handleChipRemove = (chip: Chip): void => {
    const updatedChips = chips.filter((c) => c !== chip);
    const updatedAvailableItems: Chip[] = [...availableItems, chip];

    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
  };

  // To handle backspace functionality
  const handleBackspace = (): void => {
    console.log(latestChipIndex);

    if (inputValue === "" && chips.length > 0) {
      if (latestChipIndex === null) {
        let idx = chips[chips.length - 1];
        setLatestChipIndex(idx.id);
      } else {
        let idx = chips[chips.length - 1];
        handleChipRemove(idx);
        setLatestChipIndex(null);
      }
    }
  };

  return {
    onFocus,
    handleInputChange,
    handleItemClick,
    handleChipRemove,
    handleBackspace,
  };
};
