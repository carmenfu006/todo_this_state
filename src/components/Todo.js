import React from 'react';
import InputForm from './InputForm';

class Todo extends React.Component {

  constructor() {
    super()
    this.state = {
      id: null,
      value: ''
    }
  }

  render() {

    const submitUpdate = (list) => {
      this.props.updateTodo(this.state.id, list.value)

      this.setState( { id: null, value: '' } )
    };

    if (this.state.id) {
      return <InputForm edit={this.state.value} onSubmit={submitUpdate}/>
    }

    return this.props.todos.map((todo, index) => (
      <div key={todo.id} className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'}>
        <div id={todo.id}> {todo.value} </div>
        <div className='action-button'>
          <button onClick={() => this.props.completeTodo(todo.id)}> {todo.isComplete ? 'Incomplete' : 'Complete'} </button>
          <button onClick={() => this.setState( { id: todo.id, value: todo.value } )}>Edit</button>
          <button onClick={() => this.props.removeTodo(todo.id)}>Remove</button>
        </div>
      </div>
    )); 
  };
}

export default Todo