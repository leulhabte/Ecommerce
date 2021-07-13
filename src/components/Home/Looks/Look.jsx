import React,{useState} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Typography,Modal,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import img from './cleanser.jpg'
import { Favorite } from '@material-ui/icons';
const Look = ({product}) => {
      
  const [fav_color,setFavColor] = useState(false)
  const [btnVisible,setBtnVisible] = useState(false)
const useStyles = makeStyles((theme) => ({
    root: {
     maxWidth: 350,
     boxShadow:0,
      border:0,
     margin:'10px',
     borderRadius:0,
     position:'relative',
     height:'70%',
     cursor:'pointer'

    },
    content:{
        textAlign:'center',
        textTransform:'uppercase',
       // fontFamily:`'Roboto Slab', serif`
    },
    description:{
      textTransform:'capitalize',
     // fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`
    },
    media: {
      height: '350px',
      margin:0,
      width:'100%',
      position:'relative'
      //paddingTop: '56.25%', // 16:9
    },
    cardAction:{
      padding:0
    },
    icon:{
      position:'absolute',
      bottom:'2px',
      right:'5px',
      color:'red'
    },
    icon2:{
      position:'absolute',
      bottom:'2px',
      right:'5px',
      color:'#666'
    },
    btn:{
     margin:'0 auto',
      position: 'absolute',
      right: '0',
      padding: '10px',
      width: '100%',
      bottom: '54px',
      backgroundColor:'#FFAAAA',
      color:'#fff',
      fontWeight:'bold',
      boxShadow:'none',
      borderRadius:0,
      visibility:'hidden',
      '&:hover': {
          backgroundColor: '#fff',
          color:'#FFAAAA',
          boxShadow: '0 0 0 0.1rem #FFAAAA',
        },
      
  },
   
  }));
  const classes = useStyles();
  
  const addFavorite = (e) =>{
    if (e.target.style.color != 'red'){
      e.target.style.color = 'red'
      setFavColor(true)
    } else{
      e.target.style.color = ''
      setFavColor(false)
    }
     
  }

  const handlebtnVisibility = () =>{
      setBtnVisible(true)
  }
  const handlebtnHide = () =>{
    setBtnVisible(false)
} 
const getLookBtn = (
  <Button variant="contained" size="medium" disableElevation 
  className={classes.btn}  style ={{visibility : btnVisible ? 'visible' : 'hidden'}}
  onMouseEnter={handlebtnVisibility} onMouseLeave={handlebtnHide}
  > Get Look</Button>
);
  return (
    <div className={classes.root}>
        <img src= {product.image} alt="whatever" className={classes.media} 
         onMouseLeave={handlebtnHide} onMouseEnter={handlebtnVisibility}
        />
        {fav_color ?  < Favorite className={classes.icon} onClick={addFavorite}/> :
         <FavoriteBorderIcon onClick={addFavorite}  className={classes.icon2}/>}
      

       <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold'}}>
          {product.name} 
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p"
         style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>

          ${product.price} 
        </Typography> 
      
      { getLookBtn}
        
    </div>
  )
}
  
export default Look
