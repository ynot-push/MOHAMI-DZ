import React from "react";
// hada mat7tajoche
const ResultPage = ({ searchResults }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;
