import React from 'react'
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar, IconButton} from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'
import useStyles from './styles'

const Skinproduct = ({ product }) => {
    const classes = useStyles();
    return (
        
        <div className={classes.skinProducts}> 
           
           <div className={classes.skinImages}>
               <CardMedia className={classes.media} image={product.image} title={product.name}/>
            </div>      
               <CardContent className={classes.cardContent}>
                    <div className={classes.cardContent}>
                        <Typography variant="body1" gutterBottom >
                            {product.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom >
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h6" color="textPrimary">
                        {product.description}
                    </Typography>
                <CardActions className={classes.cardActions} color="textPrimary">
                    <Button className={classes.skinButton}>
                            Add to Cart
                            <AddShoppingCart />                      
                    </Button>
                    {/* <IconButton arial-label='Add to favourite' className={classes.favoriteIcon}>
                        <Favorite style={{fontSize:'25px'}}/>
                    </IconButton> */}
                </CardActions>
               </CardContent>
        </div>
    );
}

export default Skinproduct;