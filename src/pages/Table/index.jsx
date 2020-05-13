/**
 * @name Table
 * @desc 表格
 * @author
 * @version
 */

import React, { Component } from 'react';

class Table extends Component {
  render() {
    const numbers = [1, 2, 3, 4];
    return (
      <div>
        <ul>
          {numbers.map((number) => <li key={number.toString()}>{ number}</li>)}
        </ul>
      </div>
    );
  }
}

export default Table;
