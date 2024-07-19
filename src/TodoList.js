import React, { useState } from 'react';
import './TodoList.css'

const initialState = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
    {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
    },
    {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
    },
    {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
    },
    {
        userId: 1,
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: true
    },
    {
        userId: 1,
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: true
    },
    {
        userId: 1,
        id: 13,
        title: "et doloremque nulla",
        completed: false
    },
    {
        userId: 1,
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: true
    },
    {
        userId: 1,
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: true
    },
    {
        userId: 1,
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: true
    },
    {
        userId: 1,
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: true
    },
    {
        userId: 1,
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: false
    },
    {
        userId: 1,
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: true
    },
    {
        userId: 1,
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: true
    }
];

function App() {
    const [tasks, setTasks] = useState(initialState);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskTitle, setEditingTaskTitle] = useState('');

    const handleAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            const newTask = {
                userId: 1,
                id: tasks.length + 1,
                title: newTaskTitle,
                completed: false
            };
            setTasks([newTask, ...tasks]);
            setNewTaskTitle('');
        }
    };

    const handleToggleCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEditTask = (task) => {
        setEditingTaskId(task.id);
        setEditingTaskTitle(task.title);
    };

    const handleSaveTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: editingTaskTitle } : task
        ));
        setEditingTaskId(null);
    };

    return (
        <div className="todo-list">
            <h1>Create Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add task"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleCompletion(task.id)}
                        />
                        {editingTaskId === task.id ? (
                            <input
                                type="text"
                                value={editingTaskTitle}
                                onChange={(e) => setEditingTaskTitle(e.target.value)}
                            />
                        ) : (
                            <span>{task.title}</span>
                        )}
                        {editingTaskId === task.id ? (
                            <button onClick={() => handleSaveTask(task.id)}>Save</button>
                        ) : (
                            <button onClick={() => handleEditTask(task)}>Edit</button>
                        )}
                        <button className = "delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
