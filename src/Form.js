import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form onSubmit = {this.props.onSubmit}>
        <input type="text" name="name" placeholder="Enter your item here" value={this.props.currentItem.name} onChange = {e=>{this.props.change(e)}} />
        <input type="number" name="quantity" placeholder="Quantity" value={this.props.currentItem.quantity} onChange = {e=>{this.props.change(e)}} />
        <input type="submit" value="ADD ITEM"  />
      </form>
    );
  }
}

export default Form;
