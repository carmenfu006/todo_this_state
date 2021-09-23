import React from 'react';
import InputForm from './InputForm'
import Todo from './Todo'

class TodoList extends React.Component {

  constructor() {
    super()
    this.state = {
      lists: []
    }
  }

  render() {

    const addTodo = todo => {
      this.setState((prevState) => {
        return { 
          lists: prevState.lists.concat(todo) 
        };
      });
    }

    const completeTodo = id => {
      this.state.lists.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo
      })

      this.setState( { lists: this.state.lists } )
    }

    const removeTodo = id => {
      let filteredTodos = this.state.lists.filter(todo => todo.id !== id);
  
      this.setState( { lists: filteredTodos } )
    }

    const updateTodo = (TodoID, updatedTodo) => {
      this.state.lists.map(todo => {
        if (todo.id === TodoID) {
          todo.value = updatedTodo;
        }
        return todo
      })

      this.setState( { lists: this.state.lists } )
    }

    return (
      <div>
        <h1>My Todo List</h1>
        <InputForm onSubmit={addTodo}/>
        <Todo todos={this.state.lists} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </div>
    )
  }
}

export default TodoList