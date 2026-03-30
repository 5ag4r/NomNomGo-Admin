const Button = ({ text }) => {
  return (
    <button
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "15px",
        backgroundColor: "#ff4d00",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;