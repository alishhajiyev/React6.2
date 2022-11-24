import React,{Component} from 'react'
// import { render } from 'react-dom'
// import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component{
  state={
    name: "",
    mail: "",
    password: "" 
  }
  handleInput=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleClick=(e)=>{
    // Name attribute of button is state key
    this.setState({[e.target.name]: ""})
  }

  render(){
    return (
    <div className="App">
      <p>State:<br />{JSON.stringify(this.state)}</p>
      <div>
        <label htmlFor="name">
        <input value={this.state.name} placeholder="Name" type="text" name="name" onChange={this.handleInput} />
      </label>
      <button name="name" onClick={this.handleClick}>x</button>
      </div>
      
      <div>
        <label htmlFor="mail">
        <input value={this.state.mail} placeholder="Email" type="text" name="mail" onChange={this.handleInput} />
      </label>
      <button name="mail" onClick={this.handleClick}>x</button>
      </div>
      
      <div>
        <label htmlFor="text">
        <input value={this.state.password} placeholder="Password" type="password" name="password" onChange={this.handleInput} />
      </label>
      <button name="password" onClick={this.handleClick}>x</button>
      </div>
      
    </div>
  )
  }
  
}

export default App
