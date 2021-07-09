import { CssBaseline } from '@material-ui/core';
import React from 'react'
import Home from './components/Home/HomePage'
import SkinProducts from './components/Home/Skin/skinProducts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
    return (

      <>
      <CssBaseline/>
        <Home/>
      </>
    )
}

export default App;
