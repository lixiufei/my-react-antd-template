/**
 * @name Form
 * @desc 表格
 * @author
 * @version
 */

import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({ value: event.target.value });
  }

  handleSumbit = () => {
    const { value } = this.state;
    alert(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" name="value" value={value} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="提交" onClick={this.handleSumbit.bind()} />
      </div>
    );
  }
}

export default Form;
