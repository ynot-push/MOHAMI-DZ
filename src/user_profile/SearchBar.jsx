import React, { useState } from "react";
import exemple from "./exemple.json";
import Person from "./person";

//hada component ta3 search bar ta3 wilaya (special wilaya)

const SearchBar = ({ placeholder }) => {
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
    // Filter data based on the search term (location)
    const filteredResults = exemple.filter(
      (item) => item.location.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log(filteredResults); // Add this line to debug

    // Extract names from the filtered results
    //const names = filteredResults.map((result) => result.name);

    // Update state with the names
    //setSearchResults(names);
    // Exclude 'id' from each filtered result
    const formattedResults = filteredResults.map(({ id, ...rest }) => rest);

    // Update state with the formatted results
    setSearchResults(formattedResults);
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
            <h5>Lawyers in {searchTerm}:</h5>
            <div className="layers-found">
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <Person
                      img={result.picture} // Use imported images
                      name={result.name}
                      category={result.category.join(", ")}
                      location={result.location}
                    ></Person>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
