import React, { useState } from "react";
//import img1 from "./images/two.webp";
import exemple from "./exemple.json";
function Person({ name, category, location }) {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <div className="Person">
      {/*<img className="photo-profile" src={img} alt="Description of the image" />*/}
      <div className="information">
        <a href="" rel="noopener noreferrer">
          {name}
        </a>
        <h5>{category}</h5>
        <h5>{location}</h5>
        <h5> {name}@gmail.com</h5>
        {/* <div className="etoil">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? "#ffc107" : "#e4e5e9"}
              size={24}
              onClick={() => handleStarClick(index + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>*/}
        {/* <p>Selected Rating: {rating}</p>*/}
      </div>
    </div>
  );
}

export default Person;
