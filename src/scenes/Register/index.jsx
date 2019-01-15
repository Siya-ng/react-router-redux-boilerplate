import React, { Component } from 'react';
// import axios from 'axios';
import RegisterForm from '../../components/forms/Register';

import { connect } from 'react-redux';

// import Form from './components/Form';
import { register, login } from '../../services/Auth/actions';

class Register extends Component {
  normalizeNumber = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  };



  onSubmit = (values) => {
    console.log(values)
    const params = { 
      email: values.email, 
      password: values.password,
      firstName: values.first_name,
      lastName: values.last_name,
      contactNumber: values.phone_number,
    }
    this.props.register(params)
  }
  render() {
    const { isLoading } = this.props.Auth;
    return (
      <div style={{ width: '70vw', margin: '20px auto 0', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '15px' }}>Register</h1>
        <RegisterForm
          onSubmit={this.onSubmit}
          isLoading={isLoading}
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
