import React, { Component } from 'react';
import './List.css';
import Item from './Item.js';

class List extends Component {
  render() {
    return (
      <div className="List">
        My List:
        <ul><Item text={'sample item'}/></ul>
      </div>
    );
  }
}

export default List;