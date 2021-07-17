import React,{useState} from 'react'
import {Button, Grid, Typography,IconButton} from '@material-ui/core'
import { Favorite, } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import classnames from 'classnames'
const SinglePage =({product}) =>{
    const [scale,setScale] = useState(1)

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
            cursor:'pointer',
            transition:'scale 1s'
        
    
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
            right:'2px',
            color : 'rgb(240,239,234)'
        },
        media2:{
            animation:`$zoom 1s`
        },
        '@keyframes zoom':{
            '0%':{
                transform:'scale(1.1)'
            },
            '100%':{
                transform:'scale(1.2)'
            },

        }
}))

//event handlers

const addToFavorite = (e) =>{
    if(e.target.style.color != 'red'){
        e.target.style.color = 'red'
    }else{
        e.target.style.color = 'rgb(240,239,234)'
    }
}
const classes = useStyles()
const handleBgChange = (e) =>{
    e.target.style.backgroundImage =`url(${product.image2})`
   // e.target.className = classnames(classes.media,classes.media)
   // setScale( scale > 1 ? 1 : 1.2)
}
const handleBgLeave = (e) =>{
    e.target.style.backgroundImage =`url(${product.image})` 
   // setScale(1)
}
const change = (e) =>{
    //e.target.className = classes.anim
     setScale( scale > 1 ? 1 : 1.2)
    //  alert('bitch')
    //  console.log('loaded')
  }
    return (
        <div className={classes.container} >
           <div className={classnames(classes.media)}
                onMouseEnter={handleBgChange}
                onMouseLeave={handleBgLeave}
               // style={{  transform:`scale(${scale})`,}}
           >
                <Favorite
                    onClick={addToFavorite}
                    className = {classes.icon}
                    />
           </div>
           <div className={classes.content}>
                <Typography variant="subtitle1" color="textSecondary"  style={{fontWeight:'bold',
                fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">{product.description}</Typography>
                {/* <Typography variant="body2" color="textPrimary">{product.rating}</Typography> */}
                <StarRateIcon/>
                <StarRateIcon/>
                <StarRateIcon/>
                <StarRateIcon/>
                <StarRateIcon/>
                <Typography variant="body2" color="textPrimary" 
                style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>

                ${product.price}
                </Typography>
                <Button variant ='outlined' size="small" className={classes.btn}>Add to cart</Button>
           </div>
        </div>
    )
}

export default SinglePage;