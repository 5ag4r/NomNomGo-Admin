const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "12px",
        margin: "8px 0",
        borderRadius: "10px",
        border: "none",
        outline: "none",
      }}
    />
  );
};

export default InputField;