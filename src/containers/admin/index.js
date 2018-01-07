import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/adminAction';
import style from './style.css';

@connect(state => ({
  user: state.admin.user
}), actions)
export default class extends Component {

  componentDidMount() {
    document.title = 'admin';
    this.props.check();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { username } = this.props.user;
    return (
      <div className={style.foo}>
        <h1>admin</h1>
        {
          username
            ?
            <div>
              <p>你好，{username}</p>
              <button type="button" onClick={this.props.logout}>退出</button>
            </div>
            :
            <button type="button" onClick={() => location.replace('/login')}>请登录</button>
        }
      </div>
    );
  }
}
