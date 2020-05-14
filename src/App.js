import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Controls from './components/Controls'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    stateItems: [
      {
        id: uuidv4(),
        title: "Milk",
        num: 3
      },
      {
        id: uuidv4(),
        title: "Bread",
        num: 1
      },
      {
        id: uuidv4(),
        title: "Coke",
        num: 2
      }
    ]
  }

  // add shopping list item
  addItem = (title, num) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      num: num
    }
    this.setState({
      stateItems: [...this.state.stateItems, newItem]
    })
  }

  // delete shopping list item
  deleteItem = (id) => {
    this.setState({
      stateItems: [...this.state.stateItems.filter(item => {
        return item.id !== id
      })]
    })

  }

  // delete all items from list
  clearAll = () => {
    this.setState({
      stateItems: []
    })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Controls addItem={this.addItem} />
        <h4>Your Shopping List:</h4>
        <List itemsFromApp = {this.state.stateItems} delItem={this.deleteItem} />
        <button className="btnClearList" onClick={this.clearAll}>Empty Basket</button>
      </div>
    );
  }
  
}

export default App;
