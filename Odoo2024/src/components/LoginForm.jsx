import React, { useState } from "react";
import Header from "./Header";
import { auth, googleAuthProvider, signInWithPopup } from "../firebase";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const idToken = await auth.currentUser.getIdToken();
      console.log("ID Token:", idToken);

      // Send the ID token to your backend for verification
      const response = await fetch("http://localhost:5000/verify-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      console.log("Backend response:", data);
      setLoginMessage("Logged in with Email/Password successfully.");
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
      setLoginMessage(`Error: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const idToken = await result.user.getIdToken();
      console.log("ID Token:", idToken);

      // Send the ID token to your backend for verification
      const response = await fetch("http://localhost:5000/verify-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();
      console.log("Backend response:", data);
      setLoginMessage("Logged in with Google successfully.");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
    // navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <header className="text-center">
          <h1 className="display-4">Public Library</h1>
        </header>
        <div className="mt-5 mx-auto" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleEmailPasswordLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>or sign up with</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline-dark w-100 mb-2"
            >
              Sign up with Google
            </button>
            <button className="btn btn-outline-dark w-100">
              Sign up with Gmail
            </button>
          </div>
          {loginMessage && <p className="mt-3 text-center">{loginMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
