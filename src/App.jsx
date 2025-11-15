import "./App.css";
import Item from "./components/Item";
// import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}

      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default App;
