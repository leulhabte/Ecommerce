import React,{useState} from 'react'
import {Button, Grid, Typography,IconButton} from '@material-ui/core'
import { Favorite, } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import classnames from 'classnames'
import StarRatings from 'react-star-ratings';
const SinglePage =({product}) =>{
    const [scale,setScale] = useState(1)

    const useStyles = makeStyles((theme) => ({
        container: { 
        margin:'15px',
        height:'100%',
        width:'100%',
        cursor:'pointer'
        },
        mediaContainer: {
            overflow: 'hidden',
            position:'relative',
        },
        media:{
            height: '350px',
            backgroundImage:`url(${product.image})`,
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat',
            marginBottom:'10px',
            cursor:'pointer',
            transition:'transform ease-out 0.3s',
            overflow: 'hidden',
            '&:hover' :{
                transform: `scale(${1.02})`
            }
            // width: '100%',
            // maxWidth: '100%',
            // height: "100%",
            // transform:`scale(${scale})`, 
            // transition: 'transform ease-out 0.5s'
        },
        content:{
            textAlign:'center',
            margin:'0 auto'
        },
        btn:{
            margin:'15px',
            fontWeight:'bold',
            color: '#FFF',
            backgroundColor: '#FFAAAAEA',
            boxShadow: 'inset 0 0 0 0 #FFF',
            transition: 'ease-out 0.6s',
            outline: 'none',
            border: 'none',
            '&:hover':{
            color:'#FFAAAA',
            boxShadow: 'inset 290px 0 0 0 #FFF',
            }
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
        icon:{
            position:'absolute',
            right:'2px',
            top: 0,
            color : 'rgb(240,239,234)',
        },
        media2:{
            animation:`$zoom 1s`
        },
        '@keyframes zoom':{
            '0%':{
                transform:`scale(${1.1})`
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
    // e.target.src = product.image2
   // e.target.className = classnames(classes.media,classes.media)
//    setScale( scale > 1 ? 1 : 1.2)
}
const handleBgLeave = (e) =>{
    e.target.style.backgroundImage =`url(${product.image})` 
    // e.target.src = product.image 
//    setScale(1)
}
const change = (e) =>{
    //e.target.className = classes.anim
     setScale( scale > 1 ? 1 : 1.2)
    //  alert('bitch')
    //  console.log('loaded')
  }
    return (
        <div className={classes.container} >
           <div className={classes.mediaContainer}>

                <div className={classnames(classes.media)}
                        onMouseEnter={handleBgChange}
                        onMouseLeave={handleBgLeave}
                    //    style={{  transform:`scale(${scale})`, transition: 'transform ease-out 0.5s' }}
                >
                        
                </div>
                {/* <div   className={classes.mediaContainer}           
                    style={{ overflow: 'hidden', width: '300px',height: "350px" }}
                >
                        <img src={product.image} className={classes.media} onMouseEnter={handleBgChange} onMouseLeave={handleBgLeave} objectFit = 'cover cover' alt="This is product" />  
                    <Favorite className = {classes.icon}
                    onClick={addToFavorite}
                    
                    />
                </div> */}
                <div className = {classes.icon}>
                    <Favorite 
                    onClick={addToFavorite}
                    
                    />
                   
                </div>
    
                
            </div>
           <div className={classes.content}>
                <Typography variant="subtitle1" color="textSecondary"  style={{fontWeight:'bold',
                fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">{product.description}</Typography>
                {/* <Typography variant="body2" color="textPrimary">{product.rating}</Typography> */}
                 <StarRatings
                            rating={5}
                            starRatedColor="gray"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                />
                <Typography variant="body2" color="textPrimary" 
                style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
                     ${product.price}
                </Typography>
               <Button className={classes.btn}>
                    <Typography variant="body2" >
                        Add to Cart
                    </Typography>    
                </Button>
           </div>
        </div>
    )
}

export default SinglePage;