import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';

const items = [
                { name : 'Apple', quantity : 1 },
                {  name : 'Orange', quantity : 2 },
                {  name : 'Mango', quantity : 3},
                {  name : 'Banana', quantity : 4},
                {  name : 'Grapes', quantity : 5}
             ];


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items : items,
        doneList : [],
        name : '',
        quantity : '',
      }
    }

onRemove = (arr, i) =>{
    this.setState({
      [arr]: this.state[arr].filter((item, index) => index !== i)
    })
  }

onMove = (from, to, i) => {
  const clickedItem = this.state[from][i];
  const newFrom = this.state[from].filter((item, index) => index !== i);
  const newTo = this.state[to].concat([clickedItem]);


   this.setState({
     [from]: newFrom,
     [to]: newTo
   });
}

change = (e) => {
  this.setState ({
    [e.target.name]: e.target.value
  });
}

onSubmit = (e) => {
  e.preventDefault();
  const items = this.state.items.concat({
    name: this.state.name,
    quantity: this.state.quantity

  });
  this.setState({
    items
  });
}

  render() {


    return (
      <div className="App">

        <Form id = "addItem"
          currentItem = {this.state}
          change = {this.change}
          onSubmit = {this.onSubmit}
         />
          <p>Shopping Lists To Be Done :</p>

          <Table items={this.state.items}
            onRemove = {(i) => this.onRemove('items', i)}
            onMove = {(i) => this.onMove('items', 'doneList', i)} />

          <p>COMPLETED SHOPPING LIST</p>
          <Table
           items={this.state.doneList}
           onRemove = {(i) => this.onRemove('doneList', i)}
           onMove = {(i) => this.onMove('doneList','items', i)}

           />

      </div>

    );
  }
}
export default App;
