import React from "react";
import {BrowserRouter, Route, Switch   } from 'react-router-dom';

import LostPass from "./components/login/LostPass";
import Login from "./components/login/Login";

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path='/lostPass'
                       render={() => <LostPass/>}/>

                <Route path='/login'
                       render={() => <Login/>}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
