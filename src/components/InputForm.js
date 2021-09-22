import React from 'react';

class InputForm extends React.Component {

  render() {
    const handleSubmit = e => {
      e.preventDefault();

      let input = e.target.elements.todo.value;

      if (input.trim() !== '') {
        let newList = {
          id: Date.now(),
          value: e.target.elements.todo.value,
          isComplete: false
        };

        this.props.onSubmit(newList)
      }
     
      e.target.elements.todo.value = "";
    }

    return (
      <form className='input-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a todo' name='todo' />
        <button>Add</button>
      </form>
    )
  }
}

export default InputForm