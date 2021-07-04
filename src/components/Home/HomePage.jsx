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
                      <Navbar />
                  </nav>      
            </header>
            <main>
                <section className="bestseller">
                            bestseller
                </section>
                <section className="face">
                        face
                </section>
                <section className="lips">
             <div>
              <Typography className={classes.Title} align='center' gutterBottom  variant={'h5'}>Lips</Typography>
              </div>
              <Lip />
                </section>
                <section className="eyes">
                       <div>
                            <Typography className={classes.Title} align='center' gutterBottom variant={'h5'}>
                                Eyes
                            </Typography>
                        </div>
                        <Eyes />
                </section>
                <section className="skins" style={{marginLeft:'20px', marginRight: '20px'}}>
                    <Typography variant="h5" align="center" className={classes.Title} gutterButtom >
                        Skin
                    </Typography>
                        <SkinProducts />
                </section>
                <section className="brushes">
                    <Typography variant="h5" align='center' className={classes.Title} gutterButtom >
                        Brushes
                    </Typography>
                    <Brushes />
                </section>
            </main>
            <footer>

            </footer>
            
        </div>
    )
}

export default HomePage
