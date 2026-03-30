import InputField from "../components/InputField";
import Button from "../components/button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.logo}>Logo</h2>

      <h1 style={styles.title}>WELCOME</h1>
      <p style={styles.subtitle}>Sign Up</p>

      <div style={styles.form}>
        <InputField type="email" placeholder="Enter Your Email" />
        <InputField type="text" placeholder="Enter Full Name" />
        <InputField type="text" placeholder="Enter your phone no." />
        <InputField type="password" placeholder="Enter Password" />
        <InputField type="password" placeholder="Confirm Password" />

        <Button text="Sign Up" />

        <p style={styles.bottomText}>
          Already have an account? <Link to="/">Sign In</Link>
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
  bottomText: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Register;