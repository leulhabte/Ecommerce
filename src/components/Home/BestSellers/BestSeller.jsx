import React,{useState} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Typography,Modal} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import img from './cleanser.jpg'
import { Favorite } from '@material-ui/icons';
const BestSeller = ({product}) => {
      
  const [fav_color,setFavColor] = useState('')
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
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
      right:'5px'
    }
  }));
  const classes = useStyles();
  
  const addFavorite = (e) =>{
    if (e.target.style.color != 'red'){
      e.target.style.color = 'red'
    } else{
      e.target.style.color = ''
    }
     
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <SimpleModal /> */}
    </div>
  );
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  return (
    <div className={classes.root}>
        <img src= {product.image} alt="whatever" className={classes.media} 
        onMouseLeave={e => e.target.src = product.image} onMouseEnter={e => e.target.src = img}/>
       < Favorite className={classes.icon} onClick={addFavorite}/>
       <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold'}}>
          {product.name} 
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p"
         style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>

          ${product.price} 
        </Typography> 
        {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> */}
        
    </div>
  )
}
  
export default BestSeller
