import { CssBaseline } from '@material-ui/core';
import React from 'react'
import Home from './components/Home/HomePage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Home/Nav/Navbar';
import { BrowserRouter as
   Router , Route , Switch } from 'react-router-dom';
import BestSellerSingle from './components/Home/BestSellers/BestSellerSingle';
const App = () => {
    return (
        
      <>
      <CssBaseline/>
      <Navbar/>

      <Router>
        <Switch>
          <Route path = '/' component ={Home}  exact/>
          <Route path ='/bestsellers' component = {BestSellerSingle} />
        </Switch>     
        
      </Router>
      <Footer />
      </>
    )
}

export default App;

