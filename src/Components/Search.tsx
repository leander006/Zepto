import React, { useState } from "react";

interface Chip {
  id: number;
  name: string;
  image: string;
}

function Search(){
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [latestChipIndex, setLatestChipIndex] = useState<number | null>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [availableItems, setAvailableItems] = useState<Chip[]>([
    { id: 1, name: "Jone Doe", image: "./src/assets/pro1.jpeg" },
    { id: 2, name: "Aryan Khan", image: "./src/assets/pro2.jpeg" },
    { id: 3, name: "Jan Doe", image: "./src/assets/pro3.png" },
    { id: 4, name: "Salman Khan", image: "./src/assets/pro4.png" },
    { id: 5, name: "John Miller", image: "./src/assets/pro5.jpeg" },
    { id: 6, name: "Rohit Sharma", image: "./src/assets/pro6.jpeg" },
    { id: 7, name: "Miya Kapoor", image: "./src/assets/pro7.jpeg" },
  ]);

  const onFocus = (): void => setFocused(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item: Chip): void => {
    const updatedChips = [...chips, item];
    const updatedAvailableItems = availableItems.filter((i) => i !== item);

    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
    setInputValue("");
  };

  const handleChipRemove = (chip: Chip): void => {
    const updatedChips = chips.filter((c) => c !== chip);
    const updatedAvailableItems: Chip[] = [...availableItems, chip];
  
    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
  };
  const handleBackspace = (): void => {
    console.log(latestChipIndex);
    
    if (inputValue === "" && chips.length > 0) {
      if (latestChipIndex === null) {
        let idx =chips[chips.length - 1]
        setLatestChipIndex(idx.id);
      } else {
        let idx =chips[chips.length - 1]
        handleChipRemove(idx);
        setLatestChipIndex(null);
      }
    }
  };

  return (
    <div className="container mx-auto mt-2">
      <div className="relative flex border items-center border-gray-300 rounded ">
        <div className="flex items-center ">
          {chips.map((chip) => (
            <div
              key={chip.id}
              className={`flex items-center text-black rounded m-1 p-1 ${
                chip.id === latestChipIndex ? "bg-yellow-300" : "bg-gray-300"
              }`}
            >
              <img
                className="mr-2 rounded-full w-4 h-4"
                src={chip.image}
                alt={chip.name}
              />
              <p className="font-bold text-xs w-fit "> {chip.name}</p>
              <i
                onClick={() => handleChipRemove(chip)}
                className="fa-solid fa-xl ml-2 mr-3 cursor-pointer fa-xmark"
              ></i>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onFocus={onFocus}
          onKeyDown={(e) => e.key === "Backspace" && handleBackspace()}
          onChange={handleInputChange}
          placeholder="Type to search..."
          className="w-full px-4 rounded py-2 focus:outline-none focus:border-blue-500"
        />
        {focused && (
          <div className="absolute top-12 w-full bg-white border border-gray-300 rounded mt-1">
            {availableItems
              .filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="p-2 flex items-center cursor-pointer hover:bg-blue-100"
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    className="mr-2 rounded-full w-8 h-8"
                    src={item.image}
                    alt={item.name}
                  />
                  <h1 className="font-bold"> {item.name}</h1>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;




