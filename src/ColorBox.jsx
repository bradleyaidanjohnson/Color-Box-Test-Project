function ColorBox({ color }) {
  return (
    <div
      id="color-box"
      style={{
        height: 200,
        width: 200,
        backgroundColor: `${color}`,
      }}
    >
      {color ? color : "Empty Value"}
    </div>
  );
}

export default ColorBox;
