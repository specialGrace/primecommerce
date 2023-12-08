import React from 'react';
import { useSelector } from 'react-redux'; // or your state management library

const CustomerProfile = () => {
  // Assuming you have a user object in your state after login
  const user = useSelector((state) => state.user);

  // You can add additional fields from the user object as needed
  const { name, email, avatar, bio } = user.profile;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={avatar} alt={`${name}'s Avatar`} className="profile-avatar" />
        <h1 className="profile-name">{name}</h1>
      </div>
      <div className="profile-details">
        <p className="profile-email">{email}</p>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default CustomerProfile;
