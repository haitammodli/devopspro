import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    fullName: 'John Doe',
    role: 'Patient',
    email: 'john.doe@example.com',
    phone: '+212 600-000000',
    location: 'Casablanca, Morocco',
    profileImage: 'https://via.placeholder.com/150',
    memberSince: 'March 2023',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        <h2>{user.fullName}</h2>
        <p className="role">{user.role}</p>
        <div className="info-group">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Member since:</strong> {user.memberSince}</p>
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
