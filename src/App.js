import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import Admin from "./components/Admin"
import Logout from "./components/Logout"
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/logout" component={Logout}/>
    </Switch>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to Employee Management System.
    //     </p>
    //     <p>
    //       A REACT JS and .NET CORE Integrated Application.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Click to Login
    //     </a>
    //   </header>
    // </div>
    
  );
}
const A = () =>{
  return (
    <div>
      <h1>This is component A</h1>
      <Link to = "/b">B component</Link>
    </div>
    
  )
}
const B = ()=>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Employee Management System.
        </p>
        <p>
          A REACT JS and .NET CORE Integrated Application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Login
        </a>
      </header>
    </div>
  )
}


export default App;
