import React, { useState, useEffect } from 'react';
import Plants from '../components/Plants';
import AddPlant from '../components/AddPlant';
import '../styles/Profile.css';

const Profile = ({ user, plants }) => {
    // State to manage the user's plants, initially set to the plants prop
    const [userPlants, setUserPlants] = useState([]);

    // Use useEffect to set the initial plants from props
    useEffect(() => {
        setUserPlants(plants);
    }, [plants]); // Dependency array ensures this runs only when plants prop changes

    const addPlant = (plant) => {
        setUserPlants([...userPlants, plant]);
    };

    return (
        <div className="profile">
            <h2>User Profile</h2>
            <div className="user-info">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>{user.bio}</p>
                {/* You can add more user details here */}
            </div>
            <div className="user-plants">
                <h3>Your Plants</h3>
                <Plants plants={userPlants} /> {/* Use the updated state variable here */}
            </div>
            <AddPlant onAddPlant={addPlant} />
        </div>
    );
};

export default Profile;
