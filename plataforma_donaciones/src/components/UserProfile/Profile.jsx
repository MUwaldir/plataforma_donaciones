import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.bio}</p>
        </div>
    );
}

export default Profile;
