import React from "react";
import './TodoListItem.css'

const TodoListItem = ({todo, onRemovePressed, onDonePressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
           { todo.isCompleted 
           ? null
           : <button 
           onClick= {() => onDonePressed(todo.text)}
           className="completed-button">Mark As Complete</button>}
        <button
        onClick={() => onRemovePressed(todo.text)} 
        className="remove-button">Remove</button>
        </div>
    </div>
);

export	default TodoListItem;