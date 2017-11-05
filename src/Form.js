import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	handleAddItem = (e) => {
		e.preventDefault();
		console.log('The form was submitted');
	}
  render() {
    return (
      <div className="Form">
      	<form onSubmit={this.handleAddItem}>
      	<label>
      		My Form:
      		<input type="text" />
      	</label>
      	<button>Add to list</button>
      	</form>
      </div>
    );
  }
}

export default Form;