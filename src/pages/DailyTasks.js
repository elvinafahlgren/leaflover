import React, { useState } from 'react';
import '../styles/DailyTasks.css';

const DailyTasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Water the indoor plants', completed: false },
        { id: 2, text: 'Check plant soil moisture', completed: false },
        { id: 3, text: 'Repot violet', completed: false },
        { id: 4, text: 'Water the palm outside', completed: false },
        { id: 5, text: 'Fertilize the avocado pot', completed: false },
        // Add more tasks as needed
    ]);

    const [newTaskText, setNewTaskText] = useState('');

    const [searchText, setSearchText] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const toggleTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                text: newTaskText,
                completed: false
            };
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTaskText('');
        }
    };
    
   return (
        <div className="daily-tasks">
            <h2>Daily Tasks</h2>
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-task"
            />
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id} className={task.completed ? 'task-wrapper completed' : 'task-wrapper'}>
                    <span className="task-text">{task.text}</span>
                    {task.completed ? (
                            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                        ) : (
                            <button className="done-btn" onClick={() => toggleTask(task.id)}>Done</button>
                        )}
                    </li>
                ))}
            </ul>
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Enter new task"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                />
                <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
};

export default DailyTasks;
