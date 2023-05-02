import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from  "../../context/UserAuthContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
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
      <h2 className="mb-2 text-3xl md:mb-3 md:text-5xl font-bold ">Signup</h2>
      <h2 className="mb-3 text-lg md:text-xl font-semibold ">Signup To Your Account</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5 mt-10 " controlId="formBasicEmail">
          <Form.Control className="bg-slate-200 rounded-sm  w-[200px] md:w-[300px] pl-2"
              type="email"
              placeholder="Email address"
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

          <div className="d-grid gap-2">
          <Button className="bg-black text-white
            p-2 w-[250px] md:w-[300px] mt-5 mb-5 rounded-lg font-semibold text-lg " type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="mt-2 box  text-center text-blue-700 mr-5 md:mr-60">
        Already have an account? <Link to="/">Log In</Link>
        </div>
        </div>
        </div>
    </>
  );
};

export default Signup;