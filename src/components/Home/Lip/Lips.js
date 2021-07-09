import React from 'react';
import Color from 'color';
//import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
//import NoSsr from '@material-ui/core/NoSsr';
import {Grid, CssBaseline, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton   }from '@material-ui/core';
//import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { BorderOuterRounded } from '@material-ui/icons';
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
    backgroundColor: 'https://img.joomcdn.net/a77f5bd82bd3b3e14cc9c04915081b242d13f530_original.jpeg',
    },
  
    borderRadius: 16,
  },
  lipcard: ({ color }) => ({
    minWidth: 256,
    marginTop: theme.spacing(4),
    borderRadius: 16,
    boxShadow: 'none',
    // '&:hover': {
    //   boxShadow: `0 6px 12px 0 ${Color(color)
    //     .rotate(-12)
    //     .darken(0.2)
    //     .fade(0.5)}`,
       
    // },
    
  }),
  lipcontent: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  liptitle: {
    fontFamily: ['"Playfair Display"', 'serif'].join(','),
    display: 'flex',
    justifyContent:'center',
    textAlign:'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: '#000',
    textTransform: 'uppercase',
   
  },
  lipprice: {
    fontFamily: ['"Playfair Display"', 'serif'].join(','),
    display: 'flex',
    justifyContent:'center',
    textAlign:'center',
    alignItems: 'center',
    
    color: '#000',
    opacity: 0.87,
    marginTop: '1rem',
    fontWeight: 500,
    fontSize: 18,
   
  },
 
  media: {
    height: 0,
  fontSize: 18,
   minWidth: 256,
  },
  Button: {
    fontFamily: ['"Playfair Display"', 'serif'].join(','),
    fontSize: 18,
 color: '#CEBDB3',
 '&:hover': {
  backgroundColor: '#CEBDB3',
   
},
  },
}));


const CustomCard = ({ classes, lipimage, liptitle, lipprice }) => {
 // const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <Grid  >
   <CssBaseline/>
  
      <div>
           <Card className={classes.lipcard}>
           
                 <div>
                        <div>  
                              <Typography justifyContent='center'> 
                                  <IconButton ><FavoriteBorderIcon /></IconButton>
                                </Typography>
                            </div>
                         <CardActionArea className={classes.lipactionArea}>
                    
                        <div> <CardMedia component='img' image = {lipimage}  />  </div>
                      
                        </CardActionArea>
                    </div>
              
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
                  <Typography > 
                     <IconButton aria-label="add to cart" classname={classes.Button} >
                    add to cart<AddShoppingCartIcon/></IconButton>
                    </Typography>
                  </CardContent>

            </Card>
      </div>
   </Grid>
  );
};



const Lips = ({name, price, image}) => {
  
    const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#fff' });
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





