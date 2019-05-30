import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <i onClick={this.props.iconFn} className={this.props.icon}></i>
        <span>Data Peace</span>
      </header>
    );
  }
}

export default Header;