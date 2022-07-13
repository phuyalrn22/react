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
      label: "Email Address",
      type: "text",
      isValid: false,

      validationSchema: validateEmail,
      error: "",
    },
    ageGroup: {
      value: "",
      name: "ageGroup",
      label: "Age Group",
      type: "select",
      isValid: false,
      options: [
        { view: "0-10", value: "minor@" },
        { view: "10-100", value: "major@" },
      ],

      validationSchema: validateEmail,
      error: "",
    },
    password: {
      value: "",
      label: "Password",
      type: "password",
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
      console.log(formValues);
      console.log("form submitted");
    } else {
      console.log("Please verify form once");
    }
  };
  return (
    <div>
      <div className="container m-auto">
        <div className="card p-4" style={{ maxWidth: "800px", margin: "auto" }}>
          <form onSubmit={onFormSubmit}>
            {Object.values(formValues).map((formValue) => {
              switch (formValue.type) {
                case "select":
                  return (
                    <InputSelect
                      config={formValue}
                      onChangeHandler={onChangeHandler}
                    />
                  );
                default:
                  return (
                    <div className="mb-3 row">
                      <label
                        htmlFor="staticEmail"
                        className="col-sm-2 col-form-label"
                      >
                        {formValue.label}
                      </label>
                      <div className="col-sm-10">
                        <input
                          name={formValue.name}
                          value={formValue.value}
                          onChange={(e) =>
                            onChangeHandler(formValue.name, e.target.value)
                          }
                          type="text"
                          className="form-control-plaintext"
                        />
                      </div>
                      <div className="error ">{formValue.error}</div>
                    </div>
                  );
              }
            })}
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

const InputSelect = ({ config, onChangeHandler }) => {
  return (
    <select
      name={config.name}
      value={config.value}
      onChange={(e) => onChangeHandler(config.name, e.target.value)}
    >
      {config.options.map((option) => (
        <option value={option.value}>{option.view}</option>
      ))}
    </select>
  );
};
