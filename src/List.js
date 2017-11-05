import React, { Component } from 'react';
import './List.css';
import Item from './Item.js';

class List extends Component {
  render() {
    const itemElements = [];
    let counter = 0;
    this.props.list.forEach((item) => {
      counter++;
      itemElements.push(<Item key={counter} text={item} />);
    });
    return (
      <div className="List">
        My List:
        <ul>{itemElements}</ul>
      </div>
    );
  }
}

export default List;