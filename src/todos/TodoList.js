import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, doneTodo } from "./actions";
import { connect } from "react-redux";
import './Todolist.css'

const TodoList = ({todos = [], onRemovePressed, onDonePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onDonePressed={onDonePressed}/>)}
    </div>
    
);
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onDonePressed: text => dispatch(doneTodo(text))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);