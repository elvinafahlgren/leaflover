import React, { useState } from 'react';
import '../styles/DailyTasks.css'; // Assume you'll create this CSS file for styling

const DailyTasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Water the indoor plants', completed: false },
        { id: 2, text: 'Check plant soil moisture', completed: false },
        { id: 3, text: 'Prune dead leaves', completed: false },
        { id: 4, text: 'Water the palm outside', completed: false },
        // Add more tasks as needed
    ]);

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="daily-tasks">
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''} onClick={() => toggleTask(task.id)}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DailyTasks;
