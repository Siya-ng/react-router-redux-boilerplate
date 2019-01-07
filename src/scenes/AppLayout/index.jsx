import React, { Component } from 'react';
import Header from '../../components/Header';
import './bootstrap.css';
import './main.css';

class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <Header />
        {this.props.children}
      </div>  
    )
  }
}

export default AppLayout;