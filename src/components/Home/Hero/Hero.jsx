import React from 'react'
import useStyles from './Styles'
import Navbar from '../Nav/Navbar'

const Hero = () => {
  const classes = useStyles()
    return (
        <div className={classes.root}>
             <Navbar />
            
        </div>
    )
}

export default Hero
