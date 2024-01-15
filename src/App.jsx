import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [latestChipIndex, setLatestChipIndex] = useState(null);
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
  const handleChipRemove = (index) => {
    const updatedChips = chips.filter((_, i) => i !== index);
    setChips(updatedChips);
    setLatestChipIndex(null);
  };

  const handleBackspace = () => {
    if (inputValue === "" && chips.length > 0) {
      if (latestChipIndex === null) {
        // First Backspace Press: Change color of the latest element
        setLatestChipIndex(chips.length - 1);
      } else {
        // Second Backspace Press: Remove the latest element
        handleChipRemove(latestChipIndex);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="relative flex border items-center border-gray-300 rounded ">
        <div className="flex items-center ">
          {chips.map((chip) => (
            <div
              key={chip.id}
              className={`flex items-center bg-gray-500 text-white rounded m-1 p-1 ${
                chip.id === latestChipIndex ? "bg-yellow-300" : ""
              }`}
            >
              <img
                className="mr-2 rounded-full w-4 h-4"
                src={chip.image}
                alt={chip.name}
              />
              <h1 className=""> {chip.name}</h1>
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
          className="w-full px-4 py-2 focus:outline-none focus:border-blue-500"
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

export default App;
