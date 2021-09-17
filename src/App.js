import React from 'react'
import Login from './Component/Login'
import "./App.css";
import { useSelector } from 'react-redux';
import { changepass, selectUser } from './Features/userSlice';
import Logout from './Component/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Task from './Component/Task';
import User from './Component/User';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from "./Component/Users/AddUser";
import ChangePass from './Component/ChangePass';
import Pass from './Component/Pass';
import Register from './Component/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Signoff from './Component/Signoff';

const App = () => {
  const user = useSelector(selectUser);
  return<div> <Router><div>
  <Navbar />
    {user ? <Home/> : <Login/>}

   
 
    
    
   </div>
   
   <Switch>
     {/* <Route exact path="/" component={Home}/> */}
     <Route exact path="/task" component={Task}/>
     <Route exact path="/user" component={User}/>
     <Route exact path="/adduser" component={AddUser}/>
     <Route exact path="/signoff" component={Signoff}/>
     <Route exact path="/changepass" component={ChangePass}/>
   </Switch>
   </Router>
   </div>
   
  ;
};
export default App;
