const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (e) => {
    setColor(e.target.value);
    console.log(setColor(e.target.value));
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <p style={{ marginBottom: "1rem" }}>Выбирай цвет в палитре!</p>
      <input type="color" id="color-input" onChange={handleChange} value={color}></input>
    </div>
  );
};
