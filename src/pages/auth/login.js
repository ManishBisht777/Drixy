import React, { useState } from "react";
import {Link} from "react-router-dom";
import {auth} from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [userDetails, setUserDetails] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
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
        <input type="text" placeholder="enter email" onChange={e=>setUserDetails({...userDetails, email: e.target.value})} />
        <input type="password" placeholder="enter password" onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
        <button type="submit">Login</button>
      </form>
      <div>Didn't have an account?</div>
      <Link to="/signup">Register yourself</Link>
    </main>
  );
};

export default Login;