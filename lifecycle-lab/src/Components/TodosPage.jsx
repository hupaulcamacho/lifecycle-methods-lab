import React, { Component } from 'react';
import TodosList from './TodosList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class TodosPage extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: []
        };
    };

    handleTodoChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { todo, todos } = this.state;
        
        
        if(this.allFieldsValid()) {
            toast(`New todo added: ${todo}`)
            let todosCopy = [...todos];
            todosCopy.push({
                text: todo
            });
            console.log(todosCopy)
            this.setState({
                todo: '',
                todos: todosCopy
            })
        } else {
            alert('Todo cannot be blank...')
        };
    };

    allFieldsValid = () => {
        return (
          this.state.todo
        );
    };

    removeTodo = (event) => {
        console.log('button clicked')
        event.preventDefault()
        const { todos } = this.state
        
        let todosCopy = [...todos]
        let todoId = event.target.id
        toast(`Todo deleted: ${todos[todoId].text}`)
        console.log(todoId)
        
        let todoRemovedArr = todosCopy.filter(todo => todosCopy.indexOf(todo) !== parseInt(todoId))
        
        this.setState({
            todos: todoRemovedArr
        })
    }

    render () {
        const { id, todo, todos } = this.state
        return (
            <div className='todos-page'>
                <h1>TodosList</h1>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type='text' placeholder='Enter todo' value={todo} onChange={this.handleTodoChange} />
                    </form>
                </div>
                <TodosList 
                id={id}
                todos={todos}
                removeTodo={this.removeTodo}
                />
            </div>
        )
    }
}

export default TodosPage;