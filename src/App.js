import { CssBaseline } from '@material-ui/core';
import React from 'react'
import Home from './components/Home/HomePage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Home/Nav/Navbar';
import { BrowserRouter as
   Router , Route , Switch } from 'react-router-dom';
import LookSingle from './components/Home/Looks/LookSingle';
import BestSellerSingle from './components/Home/BestSellers/BestSellerSingle';
import BestSellersAll from './components/Home/BestSellers/BestSellersAll';
import BestSellers from './components/Home/BestSellers/BestSellers';
import { Looks } from '@material-ui/icons';
const App = () => {
    return (

      <>
      <CssBaseline/>
      <Navbar/>
       <Router>
        <Switch>
          <Route path = '/' component ={Home}  exact/>
          <Route path ='/bestsellers' component = {BestSellersAll} />
          <Route path ='/looks' component={LookSingle} />
        </Switch>     
        
      </Router> 
      <Footer />
      {/* <BestSellersAll/> */}
      
      </>
    )
}

export default App;
