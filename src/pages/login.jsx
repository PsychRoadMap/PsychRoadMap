import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [missing, setMissing] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  // check input against values
  const checkInput = (event) => {
    event.preventDefault();

    /* FOR ADMIN PAGE DEVELOPMENT REMOVE AFTER COMPLETION
    setLoggedIn(true);
    navigate("/admin");
    */

    // test login credentials
    const testusername = "admin";
    const testpassword = "password";

    // get username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // if either field is empty, set missing true and incorrect false
    if (username === "" || password === "") {
      setMissing(true);
      setIncorrect(false);
    } 
    // if either field is incorrect, set incorrect true and missing false
    else if (username !== testusername || password !== testpassword) {
      setIncorrect(true);
      setMissing(false);
    } 
    // otherwise set missing and incorrect false, set loggedIn true, and navigate to admin page 
    else {
      setLoggedIn(true);
      setMissing(false);
      setIncorrect(false);
      navigate("/admin");
    }
  };

  return (
    <main>
      <div className="container-fluid jumbito">
        <div className="text-center admin jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
              Admin Login
            </p>
          </div>
        </div>
      </div>

      <div className="gold">.</div>

      <div className="select-text flex justify-center">
        <div className="my-5">
          <p> The following login panel is for administrative access. </p>
          <p> If you have not been granted administrative permissions, please return to the main site.</p>
          <div className="flex flex-col my-2 mx-auto lg:w-lg w-sm">
            <Label className="text-wrap" htmlFor="username">Username</Label>
            <TextInput id="username" type="text" sizing="md" />
          </div>
          <div className="flex flex-col mb-2 mx-auto lg:w-lg w-sm">
            <Label className="text-wrap" htmlFor="password">Password</Label>
            <TextInput id="password" type="password" sizing="md" />
            <button onClick={checkInput} className="mt-2 p-1 clear text-center">
              Submit
            </button>
            {/* show error message when respective value is true */}
            {incorrect && <p className="no-m font-bold">Incorrect username or password.</p>}
            {missing && <p className="no-m font-bold">Please enter both username and password.</p>}

          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
