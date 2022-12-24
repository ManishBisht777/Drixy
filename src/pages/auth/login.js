import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/AuthSlice";

const Login = () => {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(setUser(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="enter email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <div>Didn't have an account?</div>
      {error && <p>{error}</p>}
      <Link to="/signup">Register yourself</Link>
    </main>
  );
};

export default Login;
