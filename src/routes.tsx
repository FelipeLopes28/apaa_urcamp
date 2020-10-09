import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import Landing from './pages/Landing';
import Home from './pages/home';
import Events from './pages/events';
import Contact from './pages/contact';

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