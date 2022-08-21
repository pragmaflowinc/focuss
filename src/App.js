import React, { Component } from 'react';
import { TextField, IconButton } from 'ui-neumorphism'


import './App.css';

function clearInput() {
  document.getElementsByName('mainInput')[0].setState({ value: "" })
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };


  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">
        {todo.name}

        <IconButton onClick={() => this.onDeleteTask(todo.id)}>Remove</IconButton>
      </li>
    ));

    return (
      <div className="App">

        <header className="App-header">
          <div id="body">

            <div className="row">

              <TextField
                autofocus={true}
                dark={true}
                height={80}
                type="text"
                className='input' //outter div
                name='mainInput'
                placeholder="what's the next focus?"
                background = "#050505"
                


              />
              <IconButton
                dark={true}
                onClick={clearInput}
                height={150}
                width={150}
                icon="checkbox"

              />

            <div className="row">
              <ul className="todo_wrapper">{mylist}</ul>
            </div>

            </div>
          </div>
        </header>

      </div>
    );
  }
}

export default App;
