import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { loginUser } from "../../features/user/loginUser";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const connected = useSelector((state) => state.user.connected);
  const errorConnection = useSelector((state) => state.user.errorConnection);
  const [usernameInput, setusernameInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(loginUser(usernameInput, passwordInput));
  }
  useEffect(() => {
    if (connected) {
      navigate("/user", { replace: true });
    }
  }, [connected, navigate]);
  return (
    <div className="signin-page page">
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setusernameInput(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setpasswordInput(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {errorConnection && (
              <div className="error-connection">{errorConnection}</div>
            )}
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
