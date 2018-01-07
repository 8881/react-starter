import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/loginAction';
import style from './style.css';

@connect(state => state, actions)
export default class extends Component {

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    document.title = 'login';
  }

  constructor(props) {
    super(props);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  changeInputValue(e, key) {
    const val = e.target.value;
    this.props.change(key, val);
  }

  render() {
    const { submit } = this.props;
    return (
      <div className={style.foo}>
        <h1>login</h1>
        <input type="input" name="username" onChange={e => this.changeInputValue(e, 'username')} />
        <input type="password" name="password" onChange={e => this.changeInputValue(e, 'password')} />
        <button type="button" onClick={submit}>login</button>
      </div>
    );
  }
}
