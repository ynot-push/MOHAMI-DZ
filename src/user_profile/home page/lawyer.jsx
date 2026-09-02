import React from "react";
import "./lawyer.css";
import { Link } from 'react-router-dom';
function Lawyer(props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="cardD">
      <div className="card">
        <div className="box"></div>
        <Link  className="link_to" to="/Detail_App">
        <div className="card-contennt">
          <div className="image">
            <img src={props.img} alt="Lawyer Image" />
          </div>
          <div className="name-spec">
            <span className="name">{props.name}</span>
            <span className="spec">{props.spec}</span>
          </div>
          <div className="rating">
            {renderStars()}
          </div>
          <hr className="line" /> {/* Line between rating and contact */}
          <div className="contact">
            <div>
              <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
              <span className="tel">
                Tel: {props.phone}
              </span>
            </div>
            <span className="e_mail">
              {props.mail}
            </span>
            <div>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>
              <span className="location">
                {props.Location}
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Lawyer;
