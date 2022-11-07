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
// import AccordionMUI from "./components/AccordionMUI";
// import SimpleAccordion from "./components/SimpleAccordion";
import FastAccordion from "./components/FastAccordion";

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
  const [expanded, setExpanded] = useState(false);

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
            <FastAccordion
              id='menuAccordion'
              iconPath='runner'
              iconColor='red'
              detailsBackgroundColor='red'
              
              expanded={true}
              onChange={() => setExpanded(!expanded)}
              onClick={() => setExpanded(!expanded)}
              style={{ 
                
                height: "200px",
                backgroundColor: "black",



                }}
              children={

                <div className="buttonRow" margin-top="5px">
                   
                </div>}
            />



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
