import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TodosList from "./components/todosList"
import EditTodo from "./components/editTodo"
import CreateTodo from "./components/createTodo"
import logo from './logo.svg'

function App() {
  return (
    <Router>
      <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" >
           <img src={logo} width="30" height="30" alt="codingthesmartway.com" />
         </a>
          <Link to="/" className="navbar-brand">MERN-STACK Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className= "navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className= "navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
       <Route path='/' exact component={TodosList}/>
       <Route path='/create'  component={CreateTodo}/>
       <Route path='/edit/:id'  component={EditTodo}/>
       
      </div>
      
   </Router>
  );
}

export default App;
