import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../components/renderField';

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
  if (!values.repeat_password) {
    errors.repeat_password = 'Required';
  } else if (values.repeat_password !== values.password) {
    errors.repeat_password = 'Password is not exact';
  }
  if (!values.gender) {
    errors.gender = 'Required';
  }
  return errors;
};

// validateErrors= () => {
//   const errors = {};
//   if (isEmpty(this.state.email)) {
//     errors.email = 'This field may not be blank';
//   }
//   if (!isEmpty(this.state.email) && !this.validateEmail(this.state.email)) {
//     errors.email = 'Please enter a valid email';
//   }
//   if (isEmpty(this.state.password)) {
//     errors.password = 'This field may not be blank';
//   }
//   if (isEmpty(this.state.password_repeat)) {
//     errors.password_repeat = 'This field may not be blank';
//   }
//   if (this.state.password !== this.state.password_repeat) {
//     errors.password_repeat = 'The password is not identical';
//   }
  
//   if (isEmpty(this.state.firstName)) {
//     errors.firstName = 'This field may not be blank';
//   }
//   if (isEmpty(this.state.lastName)) {
//     errors.lastName = 'This field may not be blank';
//   }
//   if (isEmpty(this.state.phoneNumber)) {
//     errors.phoneNumber = 'This field may not be blank';
//   }

//   if (!isEmpty(errors)) {
//     this.setState({
//       errors: errors,
//     });
//     return true;
//   }
//   return false;
// }

let RegisterForm = props => {
  const { handleSubmit, submitting, isLoading } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="page_1">
        <div className="row">
          <div className="col-12">
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
        </div>
        <div className="row">
          <div className="col-6">
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
          <div className="col-6">
            <label>Repeat Password</label>
            <div>
              <Field
                name="repeat_password"
                component={renderField}
                type="password"
                placeholder="*******"
              />
            </div>
          </div>
        </div>
      </div>
      {/* to include the type check and page check */}
      <div>
        <button className="btn btn-primary" type="submit" disabled={submitting || isLoading}>
          {isLoading ? <span className="fa fa-spin fa-refresh" /> : <span>Register</span>}
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'Register Form', // a unique identifier for this form
  validate
})(RegisterForm)
