/* eslint react/prefer-stateless-function:0, react/prop-types:0 */

import React, { Component, PropTypes } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error, errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Error Occur</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
