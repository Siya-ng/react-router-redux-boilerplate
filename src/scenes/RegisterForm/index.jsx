import React, { Component } from 'react';
import {isEmpty, toLower, toString } from 'lodash';
// import axios from 'axios';
import { connect } from 'react-redux';

import Form from './components/Form';
import { register, login } from '../../services/Auth/actions';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    password_repeat : '',
    errors: {},
  }
  normalizeNumber = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  };
  validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(toLower(toString(email)));
  }
  validateErrors= () => {
    const errors = {};
    if (isEmpty(this.state.email)) {
      errors.email = 'This field may not be blank';
    }
    if (!isEmpty(this.state.email) && !this.validateEmail(this.state.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (isEmpty(this.state.password)) {
      errors.password = 'This field may not be blank';
    }
    if (isEmpty(this.state.password_repeat)) {
      errors.password_repeat = 'This field may not be blank';
    }
    if (this.state.password !== this.state.password_repeat) {
      errors.password_repeat = 'The password is not identical';
    }
    
    if (isEmpty(this.state.firstName)) {
      errors.firstName = 'This field may not be blank';
    }
    if (isEmpty(this.state.lastName)) {
      errors.lastName = 'This field may not be blank';
    }
    if (isEmpty(this.state.phoneNumber)) {
      errors.phoneNumber = 'This field may not be blank';
    }

    if (!isEmpty(errors)) {
      this.setState({
        errors: errors,
      });
      return true;
    }
    return false;
  }


  onChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'phoneNumber') {
      e.target.value = this.normalizeNumber(e.target.value);
    }
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      }
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.validateErrors()){
      return
    }
    this.props.register({ 
      email: this.state.email, 
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      contactNumber: this.state.phoneNumber
    })
    this.setState({
      hasSubmitted: true,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      password_repeat : '',
      errors: {},
    });
  }
  render() {
    return (
      <div style={{ width: '70vw', margin: '20px auto 0', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '15px' }}>Register</h1>
        <form onSubmit={this.onSubmit}>
          <Form orderInfo={this.state} onChange={this.onChange}/>
          <div style={{marginTop: '1rem' , marginLeft:'auto', marginRight: 'auto'}}>
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Auth : state.Auth,
})

const mapDispatchToProps = {
  register,
  login
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
