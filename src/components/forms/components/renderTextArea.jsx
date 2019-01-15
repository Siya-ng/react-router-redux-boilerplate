import React from 'react';
import isEmpty from 'lodash/isEmpty';

const renderTextArea = ({
  input, placeholder, type, label, disabled, rows, meta: { touched, error, warning },
}) => (
  <div className="form-group">
    {!isEmpty(label) ? (
      <label>{label}</label>
    ) : null}
    <textarea
      {...input}
      placeholder={placeholder}
      type={type}
      className="form-control"
      disabled={disabled}
      rows={rows}
    />
    {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export default renderTextArea