import React, { useState } from "react";
// hada ta3 lawyer dyrectory
import SearchBar from "../SearchBar";
import { Link } from 'react-router-dom';
import SearchBarPractiseArea from "../SearchbarPractisearea";
import "./lawyerdirectory.css";

function Lawyerdirectory() {
  return (
    <div className="lawyer-dic">
      <div className="experienced-lawyers">
        <h1>Experienced lawyers</h1>
        <h1>are ready for help</h1>
      </div>
      <div className="layer-search">
        <div className="ti">
        <h3>Find a lawyer</h3>
        <hr />
        </div>
      
        <div className="find-lawyer">
          <div className="city">
            <SearchBar placeholder="Search by Wilaya" />
          </div>
          <div className="type">
            <SearchBarPractiseArea placeholder="Search by Practise area" />
          </div>
          <div>
      <Link to="/result">  <button className="search_button">
          Search
        </button></Link>
      </div>
        </div>
      
      </div>
   
    </div>
  );
}

export default Lawyerdirectory;
