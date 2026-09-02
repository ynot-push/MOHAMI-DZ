import React, { useState } from "react";
import "./edit_profile.css";

function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="profile-form">
        <h1>Edit Profile</h1>
        <div className="form-group">
          <div className="inline-fields">
            <div className="form-inline-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" className="input-field" name="First_name" required />
            </div>
            <div className="form-inline-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" className="input-field" name="last_name" required/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="inline-fields">
            <div className="form-inline-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="input-field" name="Email" required/>
            </div>
            <div className="form-inline-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" className="input-field" name="phone" required/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="inline-fields">
            <div className="form-inline-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="input-field" />
            </div>
            <div className="form-inline-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                className="input-field"
              />
            </div>
          </div>
        </div>
        <div className="form-group image-upload">
          <label htmlFor="coverImage">Cover Image:</label>
          <div className="browse-section">
            <input
              type="file"
              id="coverImage"
              onChange={handleImageChange}
              accept="image/*"
            />
               {selectedImage && (
            <img src={selectedImage} alt="Selected" className="edited-img" />
          )}
          <button className="Edit_button" type="submit"> Edit </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
