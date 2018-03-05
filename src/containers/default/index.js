import React from 'react';

export default class extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    document.title = 'index';
  }

  render() {
    return (
      <div>hello world1.</div>
    );
  }
}
