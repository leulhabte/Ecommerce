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

const theme = createMuiTheme({
    typograph: { 
    // fontFamily: [
    //   'Nunito',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif'
    // ].join(','),
}

});
const Skinproduct = ({ product }) => {
    const classes = useStyles();
    function setNewImage(e) {
        e.currentTarget.src = product.image2;
    }
    function setOldImage(e) {
      e.currentTarget.src = product.image;
    }
    const style = {
        // fontFamily: ['"Roboto Slab"', 'serif'].join(','),
    }
    const AddtoFavorite = (e)=> {
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
        }
        else{
            e.target.style.color = ''
        }
    }
    return (
        
        <div className={classes.skinProducts}> 
           
           <div className={classes.skinProductsImage} style={{width: '300px', heigth: '350px', margin: 'auto'}}>
                        <img src={product.image} style={{width: '100%',height: "320px"}} onMouseOver={e => (e.currentTarget.src = product.image2)} onMouseOut={e => (e.currentTarget.src = product.image)} objectFit = 'cover' alt="This is product" />   
                        <div className={classes.Favorite}>
                               {/* <span className={classes.favoriteText}>Add to favourite</span> */}
                             <Favorite onClick={AddtoFavorite} />
                        </div>           
            </div>
             <ThemeProvider theme={theme}>     
               <CardContent className={classes.cardContent}>
                    <div>
                        <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold', textTransform:'uppercase'}}>
                             {product.name} 
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{fontWeight:'bold'}}>
                            {product.price}
                        </Typography>
                        <Typography color="textSecondary">
                            <StarIcon />
                            <StarIcon/>
                            <StarIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                        </Typography>
                    </div>
                    <Typography variant="body1" color="textSecondary" >
                        {product.description}
                    </Typography>
               
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