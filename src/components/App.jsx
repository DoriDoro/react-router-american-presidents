import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import About from './pages/About'
import ListPresidents from './pages/ListPresidents'
import { Switch, Route } from 'react-router-dom';
import PresidentDetail from './pages/PresidentDetail';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="container">

     {/* Switch stops rednering the 1st Route */}
      <Switch>
    {/* Tool to render Home when the URL is exactly "/" */}
        <Route exact path='/' component={Home}/>
       {/* Tool to render About when the URL starts with "/about" */}
        <Route path='/about' component={About}/>
        <Route path='/list-presidents' component={ListPresidents}/>
      {/* Tool to render President-Detail when the URL starts with "/president-detail" */}

        <Route path='/president-detail/:number' component={PresidentDetail}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
      {/* Tool to render "404" when all the previous failed (thanks to the Switch) */}
      </div>
    </div>
  );
}

export default App;


// <div className="container">
//         <Home />  
//         <About />  
//         <ListPresidents /> 
//  </div>


