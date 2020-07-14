import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import UploadContent from './components/Upload/UploadContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from "./components/Profile/Profile"
import UserList from './components/UserList/UserList';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/upload" component={UploadContent}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/userList" component={UserList}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
