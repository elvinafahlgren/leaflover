import React, { useState, useEffect } from 'react';
import Plants from '../components/Plants';
import AddPlant from '../components/AddPlant';
import '../styles/Profile.css';

const Profile = ({ user, plants }) => {
    // State to manage the user's plants, initially set to the plants prop
    const [userPlants, setUserPlants] = useState([]);

    // useEffect to set the initial plants from props
    useEffect(() => {
        setUserPlants(plants);
    }, [plants]); // ensures this runs only when plants prop changes

    // add plant
    const addPlant = (plant) => {
        setUserPlants([...userPlants, plant]);
    };

    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={user.imageUrl} alt={`${user.name}`} className="profile-image" />
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-email">
                    Email: <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <p className="profile-bio">{user.bio}</p>
                <button className="profile-edit-button">Edit profile</button>

                <div className="notifications-container">
                    <span className="notifications-text">Turn on Notifications</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            id="notifications-checkbox"
                            checked={notificationsEnabled}
                            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="invite-container">
                    <span className="notifications-text">Invite People</span>
                    <button className="invite-button">Invite</button>
                </div>
            </div>

            <div className="profile-content">
                <div className="user-plants">
                    <h3>Your Plants</h3>
                    <Plants plants={userPlants} />
                </div>
                <div className="add-plant-section">
                    <AddPlant onAddPlant={addPlant} />
                </div>
                <button className='log-out-button'> Log out</button>
            </div>
        </div>
    );
};

export default Profile;
