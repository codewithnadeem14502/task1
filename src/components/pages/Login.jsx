import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from  "../../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="  sm:flex">
    <div className="  md:bg-black md:w-[550px] md:h-[580px]">
      <h1 className="text-white text-8xl font-bold md:mt-60 md:ml-24">Board</h1>
    </div>
    <div className="  w-[300px] h-[500px]  md:w-[850px] md:h-[580px] ">

   
      <div className=" pl-2 ml-2 mt-10 md:pl-10 md:ml-40 md:mt-32  ">
        <h2 className="mb-2 text-3xl md:mb-3 md:text-5xl font-bold ">Login</h2>
        <h2 className="mb-3 text-lg md:text-xl font-semibold ">Login To Your Account</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5 mt-10 " controlId="formBasicEmail">
            <Form.Control className="bg-slate-200 rounded-sm  w-[200px] md:w-[300px] pl-2"
              type="email"
              placeholder="Email address... "
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Control className="bg-slate-200 rounded-sm w-[200px] md:w-[300px] pl-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <hr />
      <div className=" mt-2 box  text-start text-blue-700">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
          <div className="d-grid gap-2">
            <Button className="bg-black text-white
            p-2 w-[250px] md:w-[300px] mt-5 mb-5 rounded-lg font-semibold text-lg " type="Submit">
              Log In
            </Button>
          </div>
        </Form>
       
        <div>
          <GoogleButton
            className="g-btn w-[250px] md:ml-8 "
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;