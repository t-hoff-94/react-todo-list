import React, { Component } from 'react';
import ToDoLogo from './ToDoLogo';

class ToDoList extends Component {
  render () {
    let status;
    if (this.props.numItems === 0) {
      status = 'You have nothing todoo..'
    }
    else if (this.props.numItems === 1) {
      status = 'You have one thing todoo.';
    } else {
      status = `You have ${this.props.numItems} things todoo!`;
    }

    return (
      <div className="todoListMain">
        <div className="header">
          < ToDoLogo
          stroke='orange'/>
          <h1>Things ToDoo</h1>
          <form onSubmit={this.props.addItem}>
            <input
             placeholder="Thing"
             ref={this.props.inputElement}
             value={this.props.currentItem.text}
             onChange={this.props.handleInput}/>
           <button type="submit"> Add Thing </button>
          </form>
          <h3>{status}</h3>
        </div>
      </div>
    );
  }
}

export default ToDoList;
