import React, { Component } from 'react';
import './App.scss';
import ToDoList from './ToDoList';
import ToDoItems from './ToDoItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      numItems: 0,
      items: [{text: 'everything', key: 1},{text: 'something', key: 2}],
      currentItem: {
        text: '',
        key: '',
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    const num = this.state.items.length;
    this.setState({numItems: num});
  }

  handleInput(e) {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };

    this.setState({
      currentItem: currentItem,
    });
  }

  addItem(e) {
    e.preventDefault();
    const numItems = this.state.numItems + 1;
    const newItem = [this.state.currentItem];

    if (newItem[0].text !== '') {
      const items = this.state.items.concat(newItem);
      this.setState({
        numItems: numItems,
        items: items,
        currentItem: { text: '', key: ''},
      });
    }
  }

  deleteItem(key){
    const filteredList = this.state.items.filter((item) => {
      return item.key !== key
    });
    const numItems = this.state.numItems - 1;
    this.setState({
      numItems: numItems,
      items: filteredList,
    });
  }

  render() {
    return (
      <div className='App'>
        <ToDoList
          numItems={this.state.numItems}
          addItem={this.addItem}
          handleInput={this.handleInput}
          inputElement={this.inputElement}
          currentItem={this.state.currentItem} />
            <ToDoItems
              entries={this.state.items}
              deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
