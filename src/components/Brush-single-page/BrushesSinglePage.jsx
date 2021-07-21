import React from 'react'
import Products from './Products'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import {SinglePage, Hero } from '../Imports'

const Title = "Brushes";
const img = "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const BrushSinglePage = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            padding:'0 5rem',
            overflow:'hidden'
        }
    }))
    const classes = useStyles();
    return (

        <>
             <Hero title={Title} image = {img} />
            <div className={classes.container}>
                <Grid container spacing={4} justify='center'>
                    {Products.map((product) => {
                        return(
                        <Grid item xs={12} sm = {6} md={4} lg={3}>
                               <SinglePage product={product} />
                        </Grid>
                     )
                    })}
                </Grid>
            </div>
        </>

    )
}

export default BrushSinglePage