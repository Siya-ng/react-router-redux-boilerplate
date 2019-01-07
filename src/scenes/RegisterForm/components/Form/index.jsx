import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  render() {
    const {
      lastName,
      firstName,
      errors,
      email,
      phoneNumber,
      password,
      password_repeat
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
              type="password"
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
        <div className="row form-group">
        
          <label className="form-label col-sm-2 col-form-label">Repeat Password</label>
          <div className="input-container col-8">
            <input 
              type="password"
              name="password_repeat"
              className="form-control"
              value={password_repeat}
              onChange={this.props.onChange}
              placeholder="Password"
            />
          </div>
          {errors.password_repeat ? (
              <span className="error-message">! {errors.password_repeat}</span>
            ) : null}
        </div>
        <div className="row form-group">
        
          <label className="form-label col-sm-2 col-form-label">Last Name</label>
          <div className="input-container col-8">
            <input 
              type="text"
              name="lastName"
              className="form-control"
              value={lastName}
              onChange={this.props.onChange}
              placeholder="Last Name"
            />
          </div>
          {errors.lastName ? (
              <span className="error-message">! {errors.lastName}</span>
            ) : null}
        </div>

        <div className="row form-group">
          <label className="form-label col-sm-2 col-form-label">First Name</label>
          <div className="input-container col-8">
            <input 
              type="text"
              name="firstName"
              className="form-control"
              value={firstName}
              onChange={this.props.onChange}
              placeholder="First Name"
            />
          </div>
          {errors.firstName ? (
              <span className="error-message">! {errors.firstName}</span>
            ) : null}
        </div>

        <div className="row form-group">
          <label className="form-label col-sm-2 col-form-label">Phone Number</label>
          <div className="input-container col-8">
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={this.props.onChange}
              placeholder="Phone Number"
            />
          </div>
          {errors.phoneNumber ? (
              <span className="error-message">! {errors.phoneNumber}</span>
            ) : null}
        </div>

      </div>
    )
  }
}

export default Form;