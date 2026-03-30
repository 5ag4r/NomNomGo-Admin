import InputField from "../components/InputField";
import Button from "../components/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.logo}>Logo</h2>

      <h1 style={styles.title}>WELCOME</h1>
      <p style={styles.subtitle}>Sign In</p>

      <div style={styles.form}>
        <InputField type="email" placeholder="Enter Your Email" />
        <InputField type="password" placeholder="Enter Password" />

        <div style={styles.row}>
          <span style={{ cursor: "pointer" }}>Remember Me</span>
          <span style={{ cursor: "pointer" }}>Forgot Password?</span>
        </div>

        <Button text="Login" />

        <p style={styles.bottomText}>
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
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
  logo: {
    marginBottom: "20px",
  },
  title: {
    color: "#ff4d00",
    marginBottom: "5px",
  },
  subtitle: {
    marginBottom: "20px",
  },
  form: {
    width: "300px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
  },
  bottomText: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Login;