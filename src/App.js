import './App.css';
import React, { Component } from 'react'
import Todo from './Components/Todo'
import TodoData from './Data/TodoData'

class App extends Component {
 constructor(){
   super()
   this.state = {
     data : TodoData
   }
   this.handleChange = this.handleChange.bind(this)
 }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedData = prevState.data.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        data: updatedData
      }
    })
  }

  render = () => {
    const todoComponents = this.state.data.map(todo => <Todo key={todo.id} handleChange={this.handleChange} record={todo} />)
    return (
      <div className="App">
        <div className="card">
          <div className="container">
            {todoComponents}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
