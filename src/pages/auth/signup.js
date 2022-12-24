import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <main className="auth-container container container--center gap--md">
      <h1>Signup</h1>
      <form
        className="auth container container--col container--center gap--md image-container"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
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
        <button className="button--primary" type="submit">
          Register
        </button>
      </form>
      <div>Already have an account?</div>
      {error && <p>{error}</p>}
      <Link to="/login">Login</Link>
    </main>
  );
};

export default Signup;
