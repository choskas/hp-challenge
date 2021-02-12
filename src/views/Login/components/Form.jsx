import React from "react";

const Form = (props) => {
    const {setPassword, setEmail} = props;
  return (
    <form className="form-container">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          onChange={(e)=>{
            const {value} = e.target;
            setEmail(value)
          }}
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Check caps are disabled.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(e)=>{
            const {value} = e.target;
            setPassword(value)
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e)=>{
          e.preventDefault()
          props.onClickSubmit();
      }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
