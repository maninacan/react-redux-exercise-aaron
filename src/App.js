import logo from "./logo.svg";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { useState } from "react";

function App() {
  // Just to demonstrate the use of hooks
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <ListContainer />
      <div>Hooks demo: </div>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Click Me To Toggle
      </button>
      {toggle ? "true" : "false"}
    </div>
  );
}

export default App;
