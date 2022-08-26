import React, { Component } from 'react';
import { NuTextField } from './components/NuTextField'
import { NuToggle } from './components/NuToggle';
import { NuIconButton } from './components/NuIconButton'
// import { Countdown } from './components/Timer'
import './App.css';




class App extends Component {
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


  render() {
    // const mylist = this.state.todos.map((todo) => (
    //   <li className="todo_item">
    //     {todo.name}

    //     <NuIconButton onClick={() => this.onDeleteTask(todo.id)} />
    //   </li>
    // ));

    return (
      <div className="App">

        <header className="App-header">
          <div id="body">

            <div className="row"
              style={{
                display: 'flex',
                alignItems: 'center',
                }}>

              <NuTextField />
              <NuToggle />
              {/* <NuIconButton onclick = {clearInput} display="none"/> */}
              
            {/* <div className="row">
              <ul className="todo_wrapper">{mylist}</ul>
            </div> */}

            </div>
            <div width="30px">
              <label>"PopUp again in"
                
              <NuTextField 
                
              />
              </label>
            </div>
          </div>
        </header>

      </div>
    );
  }
}

export default App;
