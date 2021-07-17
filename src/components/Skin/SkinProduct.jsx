import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons';
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container, Grid,
     CardContent, CardMedia, AppBar, IconButton, Icon} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRatings from 'react-star-ratings';
const useStyles = makeStyles((theme) => ({
        productContainer: {
            marginBottom: '100px'
        },
        imageContainer: {
            position: 'relative'
        },
        favorite: {
            position: 'absolute',
            color: 'rgb(240, 239, 234)',
            top: '10px',
            right: '15px',
            '&favorite::before': {
                content: 'Add to wish list',
                display: 'block',
                color: 'red',
                width: '100px',
                height: '100px',
            }
        },
        
        description: {
            textAlign: 'center',

        },
        button: {
            width: '290px',
            padding: '10px',
            backgroundColor: '#F4B5CC',
            color: '#FFF',
            transition: 'ease-out 0.3s',
            boxShadow: 'inset 0 0 0 0 #FFF',
            outline: 'none',
            border: 'none',
            marginTop: '10px',
            '&:hover' :{
                color : '#F4B5CC',
                boxShadow: 'inset 290px 0 0 0 #FFF',
            }
        },
        review: {
            margin: '10px 0 10px 0'
        }
    }))

const SkinProduct = ( { product }) => {
    const classes = useStyles();
     const AddtoFavorite = (e)=> {
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
        }
        else{
            e.target.style.color = ''
        }
    }
    return (
       
            <div className ={classes.productContainer}  style={{width: '290px', heigth: '350px', margin: 'auto'}}>
                <div className={classes.imageContainer}>
                  <img src={product.image} style={{width: '100%',height: "300px"}} onMouseEnter={e=>{e.currentTarget.src= product.image2}} onMouseOut={e => {e.currentTarget.src=product.image}} alt="Our brush products"/>
                  {/* <div className={classes.favorite} onClick={AddtoFavorite}>
                    <Favorite/>
                  </div>  */}
                  <IconButton className={classes.Favorite}>
                        <Favorite onClick={AddtoFavorite} />
                  </IconButton>  
                </div>
                <div className={classes.description}>
                        <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold', textTransform:'uppercase', margin: '10px 0 10px 0'}} gutterBottom >
                                {product.name} 
                        </Typography>
                        <Typography variant="body1" gutterBottom color="textSecondary" >
                             {product.description}
                        </Typography>
                        {/* <Typography variant='body2' color="textSecondary" gutterBottom > */}
                        
                        <StarRatings
                            rating={5}
                            starRatedColor="gray"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="2px"
                        />
                        <span> ({product.noofReviews})</span>
                        
                        
                        <Typography variant="body2" gutterBottom style={{margin:'10px 0 10px 0'}}>
                            {product.price}
                        </Typography>
                </div>
                
                <button className={classes.button}>
                    <Typography variant="body2" gutterBottom>
                        Add to Cart
                    </Typography>    
                </button>
     
           </div>
        
    );
}

export default SkinProduct;