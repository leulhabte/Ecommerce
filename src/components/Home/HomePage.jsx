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
