import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import links  from './data';
import { BrowserRouter as Router } from 'react-router-dom'
import './Navbar.css';
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]); 

  const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: 'none'
    }
  }))

     const classes = useStyles();
    return (
       
        <nav style={{position:'sticky'}}>
               <div className='nav-container' >
                <div className="nav-center">
                    <div className="nav-header">
                        <h5 className="nav-logo">DJFS</h5>
                        <button className='nav-toggle' onClick = {toggleLinks}>
                            <FaBars />
                        </button>
                    </div>
                    
                    <div className='links-container show-container' ref={linksContainerRef}>
               
                            <ul className='links' ref={linksRef}>
                                
                                <li>
                                    {/* <Link to='/'>BestSellers</ Link>
                                    <Link to='/'>Looks</ Link>
                                    <Link to='/'>Lips</ Link>
                                    <Link to='/'>Eyes</ Link>
                                    <Link to='/skinproductspage'>Skin</ Link>
                                    <Link to='/'>Brushes</ Link> */}
                                    <Link  className = {classes.links} href='/bestsellers'>BestSellers</ Link>
                                    <Link  className = {classes.links} href='/looks'>Looks</ Link>
                                    <Link  className = {classes.links} href='/'>Lips</ Link>
                                    <Link  className = {classes.links} href='/'>Eyes</ Link>
                                    <Link  className = {classes.links} href="/skinproductspage">Skin</ Link>
                                    <Link  className = {classes.links} href='/brushproductspage'>Brushes</ Link>
                                </li>
                                {/* {links.map((link) => {
                                const { id, url, name } = link;
                                return (
                                    
                                    <li>
                                    
                                    </li>
                                );
                                })} */}
                            </ul>
                    </div>    
                </div>
                
                <div className="nav-icons">  
                <ul>
                   <li className="nav-icon">          
                       <input className="searchSpace" type="search" placeholder='search...'/> 
                       <FaSearch />
                       
                   </li>
                   
                   <li className="nav-icon">
                       <FaShoppingCart />
                       <span>0</span>
                   </li>
                   <li className="nav-icon nav-icon-login">
                    <FaUser />
                    <Router>
                    <div className="login">

                        <Link to='/signup'>Sign up</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                    </Router>
                    </li>
                </ul>             
                   
                </div>
            </div>
             
        </nav>
    )
}

export default Navbar;