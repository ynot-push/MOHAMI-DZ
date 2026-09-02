import React, { useState } from "react";
import "./lawyerinfo.css";
import Person from "../person";
import { Link } from 'react-router-dom';
const Lawyerinfo = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const selectStyle = {
    width: "200px", // Set your desired width
    border: "2px solid #000000", // Set your desired border color
    borderRadius: "px", // Set your desired border radius
    padding: "4px", // Set your desired padding
  };
  const ratingyearsstyle = {};

  return (
    <div className="parent">
      <div className="choices">
        <label htmlFor="choices-cat">Sorted By :</label>
        <select
          name="categories"
          id="categories"
          value={selectedValue}
          onChange={handleSelectChange}
          style={selectStyle}
        >
          <option value="" disabled hidden>
            years licensed
          </option>
          <option value="1">years licensed most to...</option>
          <option value="2">years licensed least to...</option>
          <option value="3">best reviewed</option>
        </select>
      </div>
      <div className="rating-years">
        <div className="review">
          <label htmlFor="stars"></label>
          <select
            name="reviewstars"
            id="reviewstars"
            value={selectedValue}
            onChange={handleSelectChange}
            style={selectStyle}
          >
            <option value="" disabled hidden>
              review reating
            </option>
            <option value="5">4 stars & up</option>
            <option value="6">3 stars & up</option>
            <option value="7">2 stars & up</option>
            <option value="7">1 stars & up</option>
          </select>
        </div>
        <div className="years-experience">
          <label htmlFor="years"></label>
          <select
            name="experience"
            id="experience"
            value={selectedValue}
            onChange={handleSelectChange}
            style={selectStyle}
          >
            <option value="" disabled hidden>
              years licensed
            </option>
            <option value="5">+10 years</option>
            <option value="6">+5 years</option>
            <option value="7">+2 years</option>
          </select>
        </div>
      </div>
      <Link to="/Detail_App">
      <Person /></Link>
    </div>
  );
};

export default Lawyerinfo;
