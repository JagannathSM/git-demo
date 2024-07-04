import "./App.css";
import { Counter } from "./Counter";
import { useState } from "react"
export default function App() {
 
  return (
    <div className="App">
      <AddColor />
    </div>
  );
}



function AddColor() {

  // const color = "crimson";
  const [color, setColor] = useState("skyblue")

  const [colorList, setColorList] = useState(["orange", "crimson", "pink"])
  const inputStyles = {
    fontSize: "25px",
    backgroundColor: color,
  }

  return (
    <div>
      <div className="add-color">
        <input style={inputStyles} type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)} />
        <button
          // copy colorList and add newColor
          onClick={() => setColorList([...colorList, color])} >Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={colorList[0]} />
      <ColorBox color={colorList[1]} />
      <ColorBox color={colorList[2]} /> */}
    </div>
  )
}

function ColorBox({ color }) {
  const styles = {
    width: "311px",
    height: "40px",
    backgroundColor: color,
    marginTop: "15px"

  }
  return (
    <div style={styles}></div>
  )
}