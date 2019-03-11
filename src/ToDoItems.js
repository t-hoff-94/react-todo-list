import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ToDoBtn from './ToDoBtn';

class ToDoItems extends Component {
  componentDidUpdate() {
    //console.log(this);
  }

  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map( (entry)=> {
      return (
        <li
         className="list-item"
         key={entry.key}>
          <span>{entry.text}</span>
          <button
            type='text'
            onClick={() => this.props.deleteItem(entry.key)}>
              < ToDoBtn stroke='orange' />
          </button>
        </li>
      );
    });
    return (
          <ul className="todo-list">
            <ReactCSSTransitionGroup
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionName="list-trans"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {listItems}
            </ReactCSSTransitionGroup>
          </ul>
    )
  }
}

export default ToDoItems;
