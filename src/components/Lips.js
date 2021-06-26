import React from 'react';
import Color from 'color';
//import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
//import NoSsr from '@material-ui/core/NoSsr';
import {Grid, CssBaseline, Typography, Card, CardActionArea, CardContent, CardMedia, Button   }from '@material-ui/core';
//import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
      
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  lipactionArea: {
    borderRadius: 16,
   
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    
    },
    marginTop: theme.spacing(4),
  },
  lipcard: ({ color }) => ({
    minWidth: 256,
    display: 'flex',
   
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
        flexDirection: 'column',
    },
  
  }),
  lipcontent: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  liptitle: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#000',
    textTransform: 'uppercase',
   
  },
  lipprice: {
    fontFamily: 'Montserrat',
    color: '#000',
    opacity: 0.87,
    marginTop: '1rem',
    fontWeight: 500,
    fontSize: 18,
   
  },
 
  media: {
    height: 0,
   paddingTop: '56.25%'
   
  },
  
}));


const CustomCard = ({ classes, lipimage, liptitle, lipprice }) => {
 // const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <Grid  >
   <CssBaseline/>
   <CardActionArea className={classes.lipactionArea}>
      <Card className={classes.lipcard}>
     
        <CardMedia component='img' image = {lipimage} /> 
       
        <CardContent className={classes.lipcontent}>
          
          <Typography className={classes.liptitle} variant={'h2'}>
            {liptitle}
          </Typography>
          <Typography>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
          </Typography>
          <Typography className={classes.lipprice}>price: ${lipprice}</Typography>
          
          <Typography  spacing={8}>
            <Button >fav<FavoriteBorderIcon /></Button>
            <Button >add to cart<AddShoppingCartIcon/></Button>
          </Typography>
          
        </CardContent>
      </Card>
      </CardActionArea>
   </Grid>
  );
};



const Lips = ({name, price, image}) => {
  
    const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#CEBDB3' });
    return (
        <>
        <Grid classes={gridStyles} container spacing={4}  xs={12} sm={6} md={4} wrap={'nowrap'}>
          <Grid item>
        
            <CustomCard
              classes={styles}
              liptitle={name}
              lipprice={price}
              lipimage={image}
            />
          </Grid>
        
        </Grid>
      </>
    );
};

export default Lips;





