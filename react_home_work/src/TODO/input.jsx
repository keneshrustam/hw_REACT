import React from 'react';

const TodoList = () => {

    const todos = [
        {
            title: 'Go to School!',
            isCompleted: false
        },
        {
            title: 'Buy milk!',
            isCompleted: true
        },
        {
            title: 'Drive a Car!',
            isCompleted: false
        },
    ]

    return (
        <div>           
            <ul>           
            {todos.map((todo, index) => (               
                <li key={index}>
                <span>{todo.title}</span>
                <input type="checkbox" checked={todo.isCompleted} readOnly />               
                </li>
                ))}
                </ul>
        </div>
    );
};

export default TodoList;
