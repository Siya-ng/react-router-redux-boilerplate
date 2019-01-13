import React, { Component } from 'react';
import {isEmpty, toLower, toString } from 'lodash';
import { connect } from 'react-redux';

import Form from './components/Form';
import { login } from '../../services/Auth/actions';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
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
    this.setState({
      hasSubmitted: true,
      errors: {},
    });

    const params = { email: this.state.email, password: this.state.password }
    this.props.login(params)
    this.setState({
      email: '',
      password: '',
    });
  }
  render() {
    return (
      <div style={{ width: '70vw', margin: '20px auto 0', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '15px' }}>Login</h1>
        <form onSubmit={this.onSubmit}>
          <Form orderInfo={this.state} onChange={this.onChange}/>
          <div style={{marginTop: '1rem' , marginLeft:'auto', marginRight: 'auto'}}>
            <button className="btn btn-primary" type="submit">Login</button>
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
  login
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
