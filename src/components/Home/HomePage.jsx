import React, {useState} from 'react'
import useStyles from './HomeStyle'
import Lips from '../Lips';
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar} from '@material-ui/core'
import Lip from '../Lip'
import Eyes from './Eyes'
import Navbar from '../Navbar'
import Brushes from './Brushes'

const HomePage = () => {

    const classes = useStyles()
    return (
        <div>

             <nav> 
                <Navbar />
             </nav>
             <header>
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
              <Typography className={classes.liptitle} align='center' gutterBottom  variant={'h3'}>Lips</Typography>
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
                    <Typography variant="h5" className={classes.BrushTitle} gutterButtom >Brushes</Typography>
                    <Brushes />
                </section>
            </main>
            <footer>

            </footer>
            
        </div>
    )
}

export default HomePage
