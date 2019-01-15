import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './components/renderField';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = 'Password must be minimum 5 character long';
  }
  return errors;
};

let LoginForm = props => {
  const { handleSubmit, submitting, isLoading } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="*******"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary"  type="submit" disabled={submitting || isLoading}>
          {isLoading ? <span className="fa fa-spin fa-refresh" /> : <span>Signin</span>}
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'Login Form', // a unique identifier for this form
  validate
})(LoginForm)
