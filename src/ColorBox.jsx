function ColorBox({ color, hexValue, isDarkText }) {
  return (
    <div
      id="color-box"
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
}

ColorBox.defaultProps = {
  color: "Empty Color Value",
};

export default ColorBox;
