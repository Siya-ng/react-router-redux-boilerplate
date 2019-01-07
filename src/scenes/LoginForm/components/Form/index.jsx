import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  render() {
    const {
      errors,
      email,
      password,
    } = this.props.orderInfo
    return (
      <div>
        <div className="row form-group">
          <label className="form-label col-sm-2 col-form-label">Email</label>
          <div className="input-container col-8 col-8">
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={this.props.onChange}
              placeholder="Email Address"
            />
          </div>
          {errors.email ? (
              <span className="error-message">! {errors.email}</span>
            ) : null}
        </div>
        <div className="row form-group">
        
          <label className="form-label col-sm-2 col-form-label">Password</label>
          <div className="input-container col-8">
            <input 
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={this.props.onChange}
              placeholder="Password"
            />
          </div>
          {errors.password ? (
              <span className="error-message">! {errors.password}</span>
            ) : null}
        </div>
      </div>
    )
  }
}

export default Form;