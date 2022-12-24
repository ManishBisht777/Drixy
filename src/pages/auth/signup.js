import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base";

const SignUp = () => {
  const [signUpParams, setSignUpParams] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpParams.email, signUpParams.password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
  };
  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="enter Name"
          onChange={(e) =>
            setSignUpParams((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) =>
            setSignUpParams((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) =>
            setSignUpParams((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type="submit">submit</button>
      </form>
      <Link to="/login">
        Login
      </Link>
    </main>
  );
};

export default SignUp;
