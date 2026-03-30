// src/components/InputField.jsx
const InputField = ({ type, placeholder, value, onChange, onKeyPress }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
      }}
    />
  );
};

export default InputField;