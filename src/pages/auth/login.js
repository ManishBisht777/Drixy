import React, { useState } from "react";
import {Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base";

const Login = () => {
  const [loginParams, setLoginParams] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginParams.email, loginParams.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) =>
            setLoginParams((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) =>
            setLoginParams((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type="submit">submit</button>
      </form>
      <Link to="/signup">Signup</Link>
    </main>
  );
};

export default Login;
