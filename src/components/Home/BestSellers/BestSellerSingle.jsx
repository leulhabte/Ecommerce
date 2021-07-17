import React from 'react'
import {Button, Grid, Typography,IconButton} from '@material-ui/core'
import { Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import img1 from './face3.jpg'
const BestSellerSingle =({product}) =>{

    const img = 'https://source.unsplash.com/random'
    const useStyles = makeStyles((theme) => ({
  container: { 
     margin:'15px',
     height:'100%',
     width:'100%',
     cursor:'pointer'
    },
    media:{
        height: '350px',
        backgroundImage:`url(${product.image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        marginBottom:'10px',
        position:'relative',
        cursor:'pointer'
     
 
     },
    content:{
        textAlign:'center',
        margin:'0 auto'
    },
    btn:{
        margin:'15px',
        fontWeight:'bold',
       // borderColor:'#FFAAAA',
        border:'2px solid #FFAAAAEA',
        color:'#666',
        '&:hover':{
          backgroundColor: '#fff',
          color:'#FFAAAA',
          boxShadow: '0 0 0 0.1rem #FFAAAA',
        }
    },
    icon:{
        position:'absolute',
        right:'2px'
    }
}))

//event handlers
const handleFavHover = (e) =>{
   e.target.style.color = 'red' 
}
const handleFavLeave = (e)=>{
    e.target.style.color = 'red' ? '' : 'red'
}

const addToFavorite = (e) =>{
    e.target.style.color = 'red' ? '' : 'red'
}

const classes = useStyles()
    return (
        <div className={classes.container} >
           <div className={classes.media}
                onMouseEnter={(e)=>e.target.style.backgroundImage =`url(${product.image2})`}
                onMouseLeave={(e)=>e.target.style.backgroundImage =`url(${product.image})` }
           >
                <IconButton className={classes.icon}
                    onMouseEnter={handleFavHover} 
                    onMouseLeave={handleFavLeave} 
                    onClick={addToFavorite}>
                    <Favorite/>
                </IconButton>
           </div>
           <div className={classes.content}>
                <Typography variant="subtitle1" color="textSecondary"  style={{fontWeight:'bold',
                fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">{product.description}</Typography>
                <Typography variant="body2" color="textPrimary">{product.rating}</Typography>
                <Typography variant="body2" color="textPrimary" 
                style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>

                ${product.price}
                </Typography>
                <Button variant ='outlined' size="small" className={classes.btn}>Add to cart</Button>
           </div>
        </div>
    )
}

export default BestSellerSingle;