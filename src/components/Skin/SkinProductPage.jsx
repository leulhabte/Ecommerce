import React from 'react'
import Products from './Products';
import { Grid } from '@material-ui/core';
import { Hero, SinglePage } from '../Imports' 
import { makeStyles } from '@material-ui/core/styles'

const SkinProductPage = () => {
    const Title = "Skin";
    const img = "https://images.pexels.com/photos/1242349/pexels-photo-1242349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    const useStyles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))
    const classes = useStyles();
    return (
        <div>
            <Hero title={Title} image = {img} />
            <div className={classes.container}> 
                <Grid container justify= 'center' spacing={4}  >
                {Products.map((product) => {
                        return(     
                        <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <SinglePage product={product} />
                        </Grid>
                        );
                    })} 
                </Grid> 
            </div>
           
        </div>
    )
}

export default SkinProductPage;