import React from 'react'
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar, IconButton, Icon} from '@material-ui/core'
import { AddShoppingCart, Favorite, FavoriteBorder, FavoriteBorderOutlined } from '@material-ui/icons'
import useStyles from './styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import StarRatings from 'react-star-ratings';


const Skinproduct = ({ product }) => {
    const classes = useStyles();

    const AddtoFavorite = (e)=> {
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
        }
        else{
            e.target.style.color = ''
        }
    }

    const changeImage = (e) => {
       e.currentTarget.src = product.image2;
    }
    return (
        
        <div className={classes.skinProducts}> 
           
           <div className={classes.skinProductsImage} style={{width: '300px', heigth: '350px', margin: 'auto'}}>
                        
                        <img src={product.image} style={{width: '300px',height: "320px"}} onMouseOver={changeImage} onMouseOut={e => (e.currentTarget.src = product.image)} objectFit = 'cover' alt="This is product" />  
                       
                        {/* <div className={classes.Favorite}>
                              
                             <Favorite onClick={AddtoFavorite} />
                        </div> */}
                        <IconButton className={classes.Favorite} onClick={AddtoFavorite}>
                            <Favorite  />
                        </IconButton>           
            </div>
             <ThemeProvider>     
               <CardContent className={classes.cardContent}>
                    <div>
                        <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold', textTransform:'uppercase', margin : '10px 0 10px 0'}}>
                             {product.name} 
                        </Typography>
                        <Typography variant="body1" color="textSecondary" style={{marginBottom: '10px'}}>
                             {product.description}
                        </Typography>
                        <StarRatings
                            rating={5}
                            starRatedColor="gray"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="2px"
                        />
                        <span> ({product.noofReviews})</span>
                        <Typography variant="body1" gutterBottom style={{fontWeight:'bold', margin : '10px 0 10px 0'}}>
                            {product.price}
                        </Typography>
                    </div>
                    
               
                    <Button  variant="contained" size="small" disableElevation className={classes.skinButton}>
                            <span style={{marginLeft: '5px', marginRight: '10px', padding: '5px'}}>Add to Cart</span> 
                            <AddShoppingCart />                      
                    </Button>
               </CardContent>
            </ThemeProvider> 
        </div>
    );
}

export default Skinproduct;