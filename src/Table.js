import React, { Component } from 'react';

class Table extends Component {


  render() {
    //console.log(this.props);
    console.log('this.props.items', this.props.items);

    //const itemListing =
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item,index) => {
            return (

              <tr key= {index}>
                <td><input type="checkbox" onClick = {()=>this.props.onMove(index)}/></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><span onClick = {()=>this.props.onRemove(index)}>X</span></td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
