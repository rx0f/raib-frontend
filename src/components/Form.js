import React, { useRef } from "react";
import "./FormStyles.css";
import axios from "axios";

const Form = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    axios
      .post(
        "https://kerberos-backend.herokuapp.com/",
        {
          url: inputRef.current.value,
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <label>Link to the photo on Juno website</label>
      <input ref={inputRef} type="text"></input>
      <button className="btn" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Form;
