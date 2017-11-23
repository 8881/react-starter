import React, { Component } from 'react';
import style from './style.css';

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
      <div className={style.foo}>foo</div>
    );
  }
}
