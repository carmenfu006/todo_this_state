import React from 'react';

class InputForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.edit ? this.props.edit : ''
    }
  }

  render() {

    const handleChange = e => {
      this.setState({ value: e.target.value })
    }

    const handleSubmit = e => {
      e.preventDefault();

      let input = this.state.value;

      if (input.trim() !== '') {
        let newList = {
          id: Date.now(),
          value: input,
          isComplete: false
        };

        this.props.onSubmit(newList)
      }
     
      this.setState( { value: '' } );
    }

    return (
      <form className='input-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a todo' name='todo' value={this.state.value} onChange={handleChange} />
        <button>{this.props.edit ? 'Update' : 'Add'}</button>
      </form>
    )
  }
}

export default InputForm