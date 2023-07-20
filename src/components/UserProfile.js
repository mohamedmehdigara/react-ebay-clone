import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      {/* Display other user information here */}
    </div>
  );
};

export default UserProfile;
