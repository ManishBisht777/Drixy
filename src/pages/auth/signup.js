import React, { useState } from "react";
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
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
      // ..
    });
  };

  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="enter email" onChange={e=>setUserDetails({...userDetails, email: e.target.value})}/>
        <input type="password" placeholder="enter password" onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Signup;