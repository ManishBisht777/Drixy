import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <button type="submit"></button>
      </form>
    </main>
  );
};

export default Login;
