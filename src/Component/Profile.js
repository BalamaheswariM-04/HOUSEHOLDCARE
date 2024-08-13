import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <button className="close-button">X</button>
                <h2>Profile</h2>
            </div>
            <div className="profile-content">
                <div className="profile-icon">
                    <span>👤</span>
                </div>
                <div className="profile-info">
                    <p><strong>Name:</strong> Pooja</p>
                    <p><strong>Email:</strong> Pooja2004@gmail.com</p>
                    <p><strong>Phone:</strong> 6383193421</p>
                    <p><strong>Location:</strong> Bangalore</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
