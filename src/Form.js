import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
      	<form>
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