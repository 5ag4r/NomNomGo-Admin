// src/components/Button.jsx
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      padding: "10px",
      backgroundColor: "#ff4d00",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    }}
  >
    {text}
  </button>
);

export default Button;