import { useInitialStates } from "../hooks/useInitialStates";
import { useSearchFunctions } from "../utils/searchFunctions";


function Search(){

const { availableItems, setAvailableItems, inputValue, setInputValue, chips,
      setChips,setSelectedChipsCount,latestChipIndex,
      setLatestChipIndex, focused,setFocused, } = useInitialStates();
 
      const {
            onFocus,
            handleInputChange,
            handleBackspace,
            handleItemClick,
            handleChipRemove,
          } = useSearchFunctions(
            setFocused,
            setInputValue,
            setChips,
            setAvailableItems,
            setSelectedChipsCount,
            latestChipIndex,
            setLatestChipIndex,
            inputValue,
            chips,
            availableItems
          );

  return (
    <div className="container mx-auto mt-2">
      <div className="flex justify-center">
        <div className="flex flex-col">

      {/* Display selected element */}
        <div className={`grid grid-cols-3`}>
          {chips.map((chip) => (
            <div
              key={chip.id}
              className={`flex items-center w-fit text-black rounded m-1 p-1 ${
                chip.id === latestChipIndex ? "bg-yellow-300" : "bg-gray-300"
              }`}
            >
              <img
                className="mr-2 rounded-full w-4 h-4"
                src={chip.image}
                alt={chip.name}
              />
              <p className="font-bold"> {chip.name}</p>
              <i
                onClick={() => handleChipRemove(chip)}
                className="fa-solid fa-xl ml-2 mr-3 cursor-pointer fa-xmark"
              ></i>
            </div>
          ))}
        </div>

      {/*  Take input for searching functionality */}
        <input
          type="text"
          value={inputValue}
          onFocus={onFocus}
          onKeyDown={(e) => e.key === "Backspace" && handleBackspace()}
          onChange={handleInputChange}
          placeholder="Type to search..."
          className="w-full px-4 border border-x-0 border-t-0 py-2 focus:outline-none focus:border-blue-500"
        />

      {/* Display available element */}
        {focused && (
          <div className= "w-full bg-white border border-gray-300 rounded mt-1">
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
      {/*  */}
        </div>
       
      </div>
    </div>
  );
}

export default Search;




