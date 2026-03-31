// src/pages/Login.jsx
import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Login function
  const handleLogin = async () => {
  setError("");

  if (!email || !password) {
    setError("Please enter email and password");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password }
    );

    // ✅ Extract token and user from response
    const { token, user } = response.data;

    // ✅ Check role
    if (user.role !== "admin") {
      setError("Access denied. Admins only.");
      return;
    }

    // Save token
    localStorage.setItem("adminToken", token);

    // Redirect
    navigate("/dashboard");

  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};

  // Submit on Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo" style={{ width: "100px" }} />
      <h1 style={styles.title}>WELCOME ADMIN</h1>
      <p style={styles.subtitle}>Sign In</p>

      <div style={styles.form}>
        <InputField
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <div style={styles.row}>
          <span style={{ cursor: "pointer" }}>Remember Me</span>
          <span style={{ cursor: "pointer" }}>Forgot Password?</span>
        </div>

        <Button text="Login" onClick={handleLogin} />

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f5a623",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { marginBottom: "20px" },
  title: { color: "#ff4d00", marginBottom: "5px" },
  subtitle: { marginBottom: "20px" },
  form: { width: "300px" },
  row: { display: "flex", justifyContent: "space-between", fontSize: "12px" },
};

export default Login;