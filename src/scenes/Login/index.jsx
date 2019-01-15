import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/forms/Login';
import { login } from '../../services/Auth/actions';

class Login extends Component {
  onSubmit = (values) => {
    console.log(values)
    const params = { email: values.email, password: values.password }
    this.props.login(params)
  }

  render() {
    const { isLoading } = this.props.Auth;
    return (
      <div style={{ width: '70vw', margin: '20px auto 0', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '15px' }}>Login</h1>
        <LoginForm 
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
  login
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
