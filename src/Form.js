import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	state= {
		newItem: ''
	};
	handleItemAdded = (e) => {
		e.preventDefault();
		this.props.handleItemAdded(this.state.newItem);
		this.setState({
			newItem: ''
		});
	};
	handleChange = (e) => {
		this.setState({
			newItem: e.target.value
		});
	};
  render() {
    return (
      <div className="Form">
      	<form onSubmit={this.handleItemAdded}>
      	<label>
      		My Form:
      		<input type="text" value={this.state.newItem} onChange={this.handleChange}/>
      	</label>
      	<button>Add to list</button>
      	</form>
      </div>
    );
  }
}

export default Form;