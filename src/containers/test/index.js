import React, { Component } from 'react';
import style from './style.css';

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
      <div className={style.test}>test</div>
    );
  }
}
