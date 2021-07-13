import React, {useState} from 'react'
import useStyles from './HomeStyle'
import Lips from './Lip/Lips';
import Hero from './Hero/Hero';
import  Looks from './Looks/Looks'
import {Typography} from '@material-ui/core';
import Lip from './Lip/Lip';
import Eyes from './Eyes/Eyes'
import Navbar from './Nav/Navbar'
import Brushes from './Brushes/Brushes'
import SkinProducts from './Skin/skinProducts'
import BestSellers from './BestSellers/BestSellers'

const HomePage = () => {

    const classes = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                width: '20%',
                margin:'0 auto',
                marginBottom : '45px',
                border:0
                
            }}
        />
    );
    return (
        <div>
             <header>
                  {/* <nav> 
                      <Navbar />
                  </nav>       */}
                  <Hero/>
            </header>
            <main>
                <section className="bestseller">
                <Typography className={classes.bestSell_title} align='center'  variant={'h4'}>Looks</Typography>
                <ColoredLine color="#FFAAAA" />
                            <Looks/>
                            
                </section>
                <section className={classes.face}>
                <Typography className={classes.bestSell_title} align='center' gutterBottom  variant={'h4'}> Best Sellers</Typography>
                <ColoredLine color="#FFAAAA" />
                <BestSellers/>
                </section>
                <section className="lips">
             <div>
              <Typography className={classes.Title} align='center' gutterBottom  variant={'h4'}>Lips</Typography>
              <ColoredLine color="#FFAAAA" />
              </div>
              <Lip />
                </section>
                <section className="eyes">
                       <div>
                            <Typography className={classes.Title} align='center' gutterBottom variant={'h4'}>
                                Eyes
                            </Typography>
                            <ColoredLine color="#FFAAAA" />
                        </div>
                        <Eyes />
                </section>
                <section className={classes.skin} >
                    <Typography variant="h5" align="center" className={classes.Title} gutterButtom variant={'h4'}>
                        Skin
                    </Typography>
                    <ColoredLine color="#FFAAAA" />
                        <SkinProducts />
                </section>
                <section className="brushes">
                    <Typography variant="h5" align='center' className={classes.Title} gutterButtom variant={'h4'} >
                        Brushes
                    </Typography>
                    <ColoredLine color="#FFAAAA" />
                    <Brushes />
                </section>
            </main>
            <footer>

            </footer>
            
        </div>
    )
}

export default HomePage
