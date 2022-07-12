import React, { useState } from "react";
//   const errors = [];
//   if (email.includes("@")) {
//     errors.push("Email is not valid");
//   }
//   if (email.length < 3) {
//     errors.push("Email length is not valid");
//   }

const validateEmail = (email) => email.includes("@");
const validatePassword = (password) => password.length > 3;

const LoginForm = () => {
  const [formValues, setFormValue] = useState({
    email: {
      value: "",
      name: "email",
      isValid: false,
      validationSchema: validateEmail,
      error: "",
    },
    password: {
      value: "",
      name: "password",
      isValid: false,
      validationSchema: validatePassword,
      error: "",
    },
  });
  const onChangeHandler = (name, value) => {
    let prevFormData = { ...formValues };
    prevFormData[name].value = value;
    let isValid = prevFormData[name].validationSchema(value);
    prevFormData[name].isValid = isValid;
    if (!isValid) {
      prevFormData[name].error = `${name} is not valid`;
    } else {
      prevFormData[name].error = "";
    }
    setFormValue(prevFormData);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const valuesList = Object.values(formValues);
    valuesList.forEach((e) => {
      if (!e.isValid) {
        isValid = false;
      }
    });
    if (isValid) {
      console.log("form submitted");
    } else {
      console.log("Please verify form once");
    }
  };
  console.log(formValues.email.error);
  return (
    <div>
      <div className="container m-auto">
        <div className="card p-4" style={{ maxWidth: "800px", margin: "auto" }}>
          <form onSubmit={onFormSubmit}>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  name={formValues.email.name}
                  value={formValues.email.value}
                  onChange={(e) =>
                    onChangeHandler(formValues.email.name, e.target.value)
                  }
                  type="text"
                  className="form-control-plaintext"
                />
              </div>
              <div className="error ">{formValues.email.error}</div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  name={formValues.password.name}
                  value={formValues.password.value}
                  onChange={(e) =>
                    onChangeHandler(formValues.password.name, e.target.value)
                  }
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
