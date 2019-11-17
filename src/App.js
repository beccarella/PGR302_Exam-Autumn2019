import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Components/Header';

import './App.css';

function App() {    
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;