import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import links  from './data';
import './Navbar.css';
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

    return (
        <nav >
               <div className='nav-container'>
                <div className="nav-center">
                    <div className="nav-header">
                        <h5 className="nav-logo">DJFS</h5>
                        <button className='nav-toggle' onClick = {toggleLinks}>
                            <FaBars />
                        </button>
                    </div>
                    <div className='links-container show-container' ref={linksContainerRef}>
                        <ul className='links' ref={linksRef}>
                            {links.map((link) => {
                            const { id, url, name } = link;
                            return (
                                <li key={id}>
                                <a href={url}>{name}</a>
                                </li>
                            );
                            })}
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
                   <li className="nav-icon">
                    <FaUser />
                       </li>
                </ul>             
                   
                </div>
            </div>
             
        </nav>
    )
}

export default Navbar;