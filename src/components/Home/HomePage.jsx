import React from 'react'
import useStyles from './HomeStyle'
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar,} from '@material-ui/core';

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
                        lips
                </section>
                <section className="eyes">
                        eyes
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
