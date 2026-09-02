import React, { useState } from "react";
import exemple from "./exemple.json";

// hada search bar ta3 practise area mzl (khsha chwiy khdma mais khaliha kima raha younes aw 3arf wach ydir f l video)
const SearchBarPractiseArea = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    setSearchResults(null);
  };

  const handleSearchClick = () => {
    // Filter data based on the search term (category)
    const filteredResults = exemple.filter((item) =>
      item.category.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    // Extract names from the filtered results
    const names = filteredResults.map((result) => result.name);

    // Update state with the names
    setSearchResults(names);
  };

  return (
    <div className="search-bar-container">
      <div className="first-child">
        {/* 
        <div className="search-icon" onClick={handleSearchClick}>
          <FaSearch />
        </div>
        */}
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <div className="clear-icon" onClick={handleClearClick}>
            {/* <FaTimes /> */}
          </div>
        )}
      </div>

      <div className="second-child">
        {searchResults && (
          <div className="search-results">
            <h5>Lawyers matching "{searchTerm}":</h5>
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarPractiseArea;

