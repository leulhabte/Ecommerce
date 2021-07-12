import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,CardHeader,CardMedia,
  Typography,CardActionArea} from '@material-ui/core'
import { Favorite } from '@material-ui/icons';
import img from './face8.jpg'
const Face = ({product}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
         maxWidth: '350px',
         boxShadow:0,
         border:0,
         margin:'15px',
         borderRadius:0,
         //backgroundImage:`url (${product.image})`,
         backgroundSize:'cover',
         backgroundPosition:'center',
         height:'400px',
         flex: '0 0 auto',
         position:'aboslute'
    
        },
        content:{
            position: 'relative',
            textAlign:'center',
            textTransform:'uppercase',
          //  fontFamily:`'Roboto Slab', serif`
        },
        description:{
          textTransform:'capitalize',
         // fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`
        },
        media: {
          height: '250px',
          margin: 0,
          position:'relative'
          //paddingTop: '56.25%', // 16:9
        },
        cardAction:{
          padding:0
        },
        icon:{
          position:'absolute',
          top:'2px',
          right:'2px'
        }
      }));
      const classes = useStyles();
    return (
      <Card className={classes.root}>
      {/* <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
      /> */}
      <CardActionArea className={classes.cardAction}>
        <CardMedia
            className= {classes.media}
            component='img'
            image = {product.image}
            title="Paella dish"
            onMouseEnter={e => e.target.image = product.image}
            onMouseLeave={e => e.target.image = img}
        />
        <Favorite className={classes.icon}/>
      </CardActionArea> 
      
        <CardContent className = {classes.content}>
            <Typography variant="body1" color="textSecondary" component="p" style={{fontWeight:'bold'}}>
              {product.name} 
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" className= {classes.description}>
              {product.des}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.   */}
              
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.rating}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p"
            style={{fontWeight:'bold',fontSize: `calc(14px + 2 * ((100vw - 320px) / 670))`}}>
              ${product.price}
            </Typography> 
        </CardContent>  
      </Card>
    )
}

export default Face
