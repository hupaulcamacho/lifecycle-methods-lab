import React from 'react';
import Todo from './Todo'

const TodosList = (props) => {
    let todos = props.todos
    const todosList = todos.map((todo) => {
        let id = todos.indexOf(todo)
        console.log(todo)
        return(
            <Todo 
            id={id}
            text={todo.text}
            removeTodo={props.removeTodo}
            />
        )
    })

    return (
        <div className='todos-list'>
            <ul>
                {todosList}
            </ul>
        </div>
    )
}

export default TodosList;