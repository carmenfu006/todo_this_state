import React from 'react';

class Todo extends React.Component {

  render() {

    const editTodo = (id, value) => {
      this.props.updateTodo(id, value)
    };

    return this.props.todos.map((todo, index) => (
      <div key={todo.id} className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'}>
        <div id={todo.id}> {todo.value} </div>
        <div className='action-button'>
          <button onClick={() => this.props.completeTodo(todo.id)}> {todo.isComplete ? 'Incomplete' : 'Complete'} </button>
          <button onClick={() => editTodo(todo.id, todo.value)}>Edit</button>
          <button onClick={() => this.props.removeTodo(todo.id)}>Remove</button>
        </div>
      </div>
    )); 
  };
}

export default Todo