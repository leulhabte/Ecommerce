import React from 'react'
import Home from './components/Home/HomePage'
import SkinProducts from './components/Home/Skin/skinProducts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
    return (
        
      <Router>
        <Route path='/' exact>
          <Home/>          
        </Route>
        <Route path='/SkinProducts' component={SkinProducts} />
           
      </Router>

    )
}

export default App;

