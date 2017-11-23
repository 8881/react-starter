import React from 'react';
import style from './style.css';

export default class extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    document.title = 'index';
  }

  render() {
    return (
      <div className={style.default}>hello world.</div>
    );
  }
}
