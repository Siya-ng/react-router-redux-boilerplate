import React from 'react';

const renderField = ({
  input, placeholder, type, meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <input {...input} placeholder={placeholder} type={type} className="form-control input-lg" />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export default renderField;