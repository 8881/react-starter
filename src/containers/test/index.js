import React, { Component } from 'react';

export default class extends Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'test';
  }

  render() {
    return (
      <div>test</div>
    );
  }
}
