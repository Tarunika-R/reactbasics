import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, age, profileImage }) {
  return (
    <div className="profile-card">
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="profile-card__image"
      />
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__age">Age: {age}</p>
    </div>
  );
}

export default ProfileCard;
