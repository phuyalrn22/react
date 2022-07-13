import React, { useRef } from "react";
// controled form
// uncontrolled Form

const SignUpForm = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      password: passwordRef.current.value,
      email: emailRef.current.value,
    });
  };
  return (
    <div className="container m-auto">
      <div className="card p-4" style={{ maxWidth: "800px", margin: "auto" }}>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                ref={emailRef}
                type="text"
                className="form-control-plaintext"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                ref={passwordRef}
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
  );
};

export default SignUpForm;
