import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [focused, setFocused] = useState(false);
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Jone",
      image: "./src/assets/pro1.jpeg",
    },
    {
      id: 2,
      name: "Ab",
      image: "./src/assets/pro2.jpeg",
    },
    {
      id: 3,
      name: "Jan",
      image: "./src/assets/pro3.png",
    },
    {
      id: 4,
      name: "Knock",
      image: "./src/assets/pro4.png",
    },
    {
      id: 5,
      name: "Frog",
      image: "./src/assets/pro5.jpeg",
    },
    {
      id: 6,
      name: "Tiya",
      image: "./src/assets/pro6.jpeg",
    },
    {
      id: 7,
      name: "Miya",
      image: "./src/assets/pro7.jpeg",
    },
  ]);

  const onFocus = () => setFocused(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    const updatedChips = [...chips, item];
    const updatedAvailableItems = availableItems.filter((i) => i !== item);

    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
    setInputValue("");
  };
  console.log(chips, "chips");
  const handleChipRemove = (chip) => {
    const updatedChips = chips.filter((c) => c !== chip);
    const updatedAvailableItems = [...availableItems, chip];

    setChips(updatedChips);
    setAvailableItems(updatedAvailableItems);
  };

  const handleBackspace = () => {
    if (inputValue === "" && chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      handleChipRemove(lastChip);
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col w-64">
        <div className="relative">
          <input
            type="text"
            onFocus={onFocus}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Backspace" && handleBackspace()}
            placeholder="Type to search..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
        <div className="flex flex-wrap mt-2">
          {chips.map((chip) => (
            <div
              key={chip.id}
              className="flex items-center bg-blue-500 text-white rounded m-1 p-2"
            >
              {chip.name}
              <button onClick={() => handleChipRemove(chip)} className="ml-2">
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
