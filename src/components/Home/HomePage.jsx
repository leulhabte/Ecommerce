import React, {useState} from 'react'
import useStyles from './HomeStyle'
import Lips from '../Lips';
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar} from '@material-ui/core';
import Lip from '../Lip';
import Eyes from './Eyes'

const HomePage = () => {

    const classes = useStyles()
    return (
        <div>
             <header>
                  <nav> nav</nav>

                  
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
              <Typography classname={classes.liptitle} align='center' gutterBottom  variant={'h3'}>Lips</Typography>
              </div>
              <Lip />
                </section>
                <section className="eyes">
                       <div>
                            <Typography classname={classes.liptitle} align='center' gutterBottom variant={'h3'}>Eyes</Typography>
                        </div>
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
