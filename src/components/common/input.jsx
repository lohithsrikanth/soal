import React from "react";

const Input = (props) => {
  const { name, label, error, ...rest } = props;
  if (name === "username") {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          {...rest}
          name={name}
          id={name}
          className="form-control"
          autoFocus
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
