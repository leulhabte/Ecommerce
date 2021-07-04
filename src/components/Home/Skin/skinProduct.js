import React from 'react'
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar, IconButton, Icon} from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'
import useStyles from './styles'


const Skinproduct = ({ product }) => {
    const classes = useStyles();
    function setNewImage(e) {
        // document.getElementsByTagName("CardMedia").image = product.image2;
        e.currentTarget.src = product.image2;
    }
    function setOldImage(e) {
      e.currentTarget.src = product.image;
    }
    return (
        
        <div className={classes.skinProducts}> 
           
           <div className={classes.skinProductsImage} style={{width: '300px', heigth: '350px', margin: 'auto'}}>
                        <img src={product.image} style={{width: '100%',height: "320px", }} onMouseOver={e => (e.currentTarget.src = product.image2)} onMouseOut={e => (e.currentTarget.src = product.image)} objectFit = 'cover' alt="This is product" />
      
                
            </div>      
               <CardContent className={classes.cardContent}>
                    <div>
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