import React, { useState } from "react";
import './review_lawyer.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profile_img from "../../assets/images/5bfb6f_1cafad56984b4997bd73792b008c6fc3.webp"
const Review = () => {
    const [rating, setRating] = useState(0);
    const [lawyers, setLawyers] = useState([
        { name: "Khaled Kerha", location: "Jijel", study: "ESTIN", image:profile_img, stars: 0 },
    ]);

    const handleRating = (value, lawyerIndex) => {
        setRating(value);
        const updatedLawyers = lawyers.map((lawyer, index) => {
            if (index === lawyerIndex) {
                return { ...lawyer, stars: value };
            }
            return lawyer;
        });
        setLawyers(updatedLawyers);
    };

    const handleMouseLeave = () => {
    
    };

    const stars = Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;
        return (
            <FaStar
                key={index}
                color={filled ? '#ffc107' : '#e4e5e9'}
                size={25}
                className="star"
                onMouseEnter={() => handleRating(index + 1)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleRating(index + 1)}
            />
        );
    });

    return ( 
        <div className="containerjjj">
                 <div className="title">
                <div className="bare"></div>
                <div>
                    <h3>Review your Lawyer</h3>
                </div>
            </div>
            {lawyers.map((lawyer, index) => (
                <div key={index} className="Lawyer_info">
                    <div>
                        <img className="lawyer_imagee" src={lawyer.image} alt="Lawyer Image"/>
                    </div>
                    <div className="infoo">
                        <p className="name">{lawyer.name}</p>
                        <div>
                            <p>Family, Business, Employment </p>
                        </div>
                        <div className="locationn">
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>  
                            <p>{lawyer.location}</p>
                        </div>
                        <div className="education_bio">
                            <i className="fas fa-university" style={{ marginRight: '10px' }}></i>
                            <p>Licensed in {lawyer.study}</p>
                        </div>
                    </div>
                </div>
            ))}

            <Link to="/Detail_App"><p className="profile_back">&lt; profile</p></Link>
            <p className="p2">Select a rating for your Lawyer</p>
            <div className="Stars">{stars}</div>
            <p className="p2">Write your review here</p>
            <textarea placeholder="Write your review here" className="review_text" name="paragraph" rows="4" cols="50"></textarea>
            <div >
                <p className="p2">Would you recommend this lawyer?</p>
                <div className="recommendation">
                    <div className="oprtion"> 
                        <input type="radio" id="option1" name="option" value="option1"/>
                        <label htmlFor="option1">No</label><br/>
                    </div>
                    <div className="oprtion"> 
                        <input type="radio" id="option2" name="option" value="option2"/>
                        <label htmlFor="option2">Yes</label><br/>
                    </div>
                </div>
            </div>
            <button className="submit" type="submit">Submit</button>
        </div>
    );
}

export default Review;

