const InputField = ({ color, updateColor }) => {
  return (
    <div>
      <input
        placeholder="Add color"
        value={color}
        onChange={(e) => updateColor(e.target.value)}
      />
    </div>
  );
};

export default InputField;
