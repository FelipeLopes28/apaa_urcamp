import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import Landing from './pages/Landing';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/"  exact component={Landing}/>
            <Route path="/home" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/contact" component={Contact}/>
        </BrowserRouter>
    )
}

export default Routes;