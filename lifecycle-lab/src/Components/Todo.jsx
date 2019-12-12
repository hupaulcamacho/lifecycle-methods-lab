import React from 'react'

const Todo = (props) => {
    return (
        <li>
            {props.text}<span></span><button id={`${props.id}`} onClick={props.removeTodo}>remove</button>
        </li>
    )
}

export default Todo;