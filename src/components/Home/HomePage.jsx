import React, {useState} from 'react'
import useStyles from './HomeStyle'
import Lips from './Lip/Lips';
import Hero from './Hero/Hero';

import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar} from '@material-ui/core';
import Lip from './Lip/Lip';
import Eyes from './Eyes/Eyes'
import Navbar from './Nav/Navbar'
import Brushes from './Brushes/Brushes'
import SkinProducts from './Skin/skinProducts'
const HomePage = () => {

    const classes = useStyles()
    return (
        <div>
             <header>
                  <nav> 
                      {/* <Navbar /> */}
                  </nav>

                  <Hero/>
            </header>
            <main>
                <section className="bestseller">
                            bestseller
                </section>
                <section className="face">
                        face
                </section>
                <section className="lips">
              <toolBar classname={classes.lipheder}>
              <Typography classname={classes.liptitle} align='center'  variant={'h3'}>Lips</Typography>
              </toolBar>
              <Lip />
                </section>
                <section className="eyes">
                        <toolBar classname={classes.lipheder}>
                            <Typography classname={classes.liptitle} align='center' variant={'h3'}>Eyes</Typography>
                        </toolBar>
                        <Eyes />
                </section>
                <section className="skins">
                        skins
                </section>
                <section className="brushes">
                        brushes
                </section>
            </main>
            <footer>

            </footer>
            
        </div>
    )
}

export default HomePage
