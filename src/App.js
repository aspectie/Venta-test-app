import React from "react";
import {Route, Switch} from 'react-router-dom';
import LostPass from "./components/login/LostPass";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

import './App.css';

function App() {
  return (
      <div className="App">
          <Switch>
              <Route path='/home'
                     render={() => <Home/>}/>
              <Route path='/lostPass'
                     render={() => <LostPass/>}/>
              <Route path='/login'
                     render={() => <Login/>}/>

          </Switch>
      </div>
  );
}

export default App;
