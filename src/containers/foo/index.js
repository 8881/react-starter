import React, { Component } from 'react';

export default class extends Component {

  static propTypes = {};

  static defaultProps = {};

  componentDidMount(){
    document.title = 'foo';
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>foo</div>
    );
  }
}
