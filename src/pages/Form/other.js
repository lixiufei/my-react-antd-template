/**
 * @name other
 * @desc 状态提升
 * @author
 * @version
 */

import React from 'react';

function ChildOne(props) {
  const { value } = props;
  return <div><h1>{ value + 1 }</h1></div>;
}
function ChildTwo(props) {
  const { value } = props;
  return <div><h1>{ value + 2 }</h1></div>;
}

class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '测试'
    };
  }

  handleChange(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    const { txt } = this.state;
    return (
      <div>
        <input type="text" value={txt} onChange={this.handleChange.bind(this)} />
        <p>{txt}</p>
        <ChildOne value={txt} />
        <ChildTwo value={txt} />
      </div>
    );
  }
}
export default Three;
