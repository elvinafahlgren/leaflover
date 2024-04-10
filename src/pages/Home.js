import React, { useState } from 'react';
import '../styles/Home.css';

const Home = ({ user }) => {
    const [tasks, setTasks] = useState({
        dailyProgress: 76,
        watering: { new: 5, total: 15 },
        fertilizing: { new: 3, total: 18 },
        repoting: { new: 2, total: 4 },
        urgent: { new: 5, total: 24 },
    });

    return (
        <>
            <div className="home">
                <h1>Hello, {user.name}!</h1>
                {/* Progress bar */}
                <div className="progress">
                    <div className="progress-bar" style={{ width: `${tasks.dailyProgress}%` }}>
                        {tasks.dailyProgress}%
                    </div>
                </div>
                {/* Task Categories */}
                <div className="categories">
                    {Object.entries(tasks).filter(([key,]) => key !== 'dailyProgress').map(([key, task]) => (
                        <div key={key} className="category">
                            <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                            <span>{task.new} new tasks</span>
                            <div className="task-progress">
                                <div className="task-progress-bar" style={{ width: `${(task.total / 24) * 100}%` }}>
                                    {task.total}/{24}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
