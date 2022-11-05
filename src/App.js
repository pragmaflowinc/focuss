import React, { useEffect, useState } from "react";
import { NuTextField } from "./components/NuTextField";
// import { NuToggle } from './components/NuToggle';
import { NuSwitch } from "./components/NuSwitch";
// import { NuIconButton } from './components/NuIconButton'
// import { Countdown } from './components/Timer'
import "./App.css";
import { overrideThemeVariables } from "ui-neumorphism";

import "ui-neumorphism/dist/index.css";
import { theme } from "./theme.js";
import Accordion from "./components/accordion";

const { ipcRenderer } = window.require("electron");

//test

// let clearInput = () => {
//   document.getElementsByName('mainInput')[0].setState({ value: "" })
// }

function App() {
  useEffect(() => {
    // Listen for the event
    overrideThemeVariables(theme);

    ipcRenderer.send("get_data", {});

    ipcRenderer.on("get_data", (event, arg) => {
      console.log(arg);
    });
    // Clean the listener after the component is dismounted
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Listen for the event
    ipcRenderer.send("ToggleAlwaysOnTop", { checked });
  }, [checked]);

  return (
    <div className="App">
      <header className="App-header">
        <div id="body" className="column">
          <div className="row">
            <NuTextField
              name="mainInput"
              placeholder="What's the next focus?"
              styles={{
                display: "block",
                margin: 0,
              }}
            />
            <Accordion>
              <div className="buttonRow" margin-top="5px">
                <NuSwitch
                  className="alwaysOnTopToggle noDrag"
                  color="#262a32"
                  label="Always on top"
                  onChange={(e) => {
                    console.log(e);
                    localStorage.setItem("isAlwaysOnTop", `${e.checked}`);
                    setChecked(e.checked);
                    console.log(`checked: ${checked}`);
                  }}
                  disabled={false}
                  checked={checked}
                  styles={{
                    margin: 0,
                  }}
                />
              </div>
            </Accordion>
            {/* <NuIconButton 
                    onclick = {clearInput} 
                    display="none"
                    className="toggle"

                /> */}

            {/* <div className="row">
              <ul className="todo_wrapper">{mylist}</ul>
            </div> */}
          </div>
          {/* <div style={{
              // paddingLeft:"20px"
            }}>
              <label
                htmlFor='timerTime'
                style={{
                  width: "fit-content",
                  textAlign: "left",
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  margin: '4px 12px',
                }}>
                  <span>"PopUp again in"</span>
              </label>
              <NuTextField
                  id="timerTime"
                  width="100vh"
                  height={30}
                  style={{
                    width: "fit-content",
                    textAlign: "left",
                    // marginLeft: "-40px",
                  }}
                />

            </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
