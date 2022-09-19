import React, { useEffect } from 'react';
import { NuTextField } from './components/NuTextField'
// import { NuToggle } from './components/NuToggle';
// import { NuIconButton } from './components/NuIconButton'
// import { Countdown } from './components/Timer'
import './App.css';
// import gtag, { install } from 'ga-gtag';

const { ipcRenderer } = window.require('electron');

//test




function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     todos: [],
  //     value: "",
  //   };
  // }
  // onChange = (e) => {
  //   this.setState({ value: e.target.value });
  // };
  // onAddTask = (e) => {
  //   e.preventDefault();

  //   const obj = {
  //     name: this.state.value,
  //     id: Date.now(),
  //   };
  //   if (this.state.value !== "") {
  //     this.setState({ todos: this.state.todos.concat(obj) });
  //     this.setState({ value: "" });
  //   }
  // };

  // onDeleteTask = (itemId) => {
  //   this.setState({
  //     todos: [...this.state.todos].filter((id) => id.id !== itemId),
  //   });
  // };




  // const mylist = this.state.todos.map((todo) => (
  //   <li className="todo_item">
  //     {todo.name}

  //     <NuIconButton onClick={() => this.onDeleteTask(todo.id)} />
  //   </li>
  // ));

  
  

  useEffect(() => {
    // Listen for the event
    ipcRenderer.send('get_data', {})
    
    ipcRenderer.on('get_data', (event, arg) => {
      console.log(arg);
      




    });
    // Clean the listener after the component is dismounted
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);


  return (
    <div className="App" border-radius="500px">

      <header className="App-header">
        <div id="body" className="column">

          <div className='row'>

            <NuTextField
              name="mainInput"
              placeholder="What's the next focus?"
              styles={{
                display: "block",
                margin: 0,
              }}


            />
            {/* <NuToggle /> */}
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
