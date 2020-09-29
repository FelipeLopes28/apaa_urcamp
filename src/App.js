import React from 'react';
import './assets/styles/global.css';

// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages/home';
import Landing from './pages/Landing';

function App() {
  return (
    <Landing/>
  );
}

export default App;

// ESTAVA DENTRO DO return
// <div>
      // <Router>
      //   <Switch>
      //     <Route path="/" exact component={Landing} />
      //     {/* <Route path="/" exact component={Home} /> */}
      //   </Switch>
      // </Router>
      
// </div>