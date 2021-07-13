import React from 'react';
import Color from 'color';
//import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
//import NoSsr from '@material-ui/core/NoSsr';
import {Grid, Button, CssBaseline, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton   }from '@material-ui/core';
//import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { BorderOuterRounded } from '@material-ui/icons';
// const useGridStyles = makeStyles(({ breakpoints }) => ({
//   root: {
//     [breakpoints.up()]: {
//       justifyContent: 'center',
      
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  lipactionArea: {
    borderRadius: 16,

    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    backgroundColor: 'https://img.joomcdn.net/a77f5bd82bd3b3e14cc9c04915081b242d13f530_original.jpeg',
    },
  
  },
  lipcard: () => ({
    minWidth: 256,
    marginBottom: theme.spacing(4),
    borderRadius: 16,
    boxShadow: 'none',
    padding: 'none',
    background: 'none',
    // '&:hover': {
    //   boxShadow: `0 6px 12px 0 ${Color(color)
    //     .rotate(-12)
    //     .darken(0.2)
    //     .fade(0.5)}`,
       
    // },
    
  }),
  lipcontent: () => {
    return {
    justifyContent: 'center', 
    textAlign:'center',
    alignItems: 'center',
      padding: '1rem 1.5rem 1.5rem',
     
    };
  },
  liptitle: {
    fontFamily: ["'Benne'", 'serif'].join(','),
    
    //fontSize: '1.5rem',
    color: '#000',
    textTransform: 'uppercase',
   
  },
  lipprice: {
    fontFamily: ["'Benne'", 'serif'].join(','), 
  },
  icon: {
    backgroundColor: 'none',
  }
}));


const CustomCard = ({ classes, lipimage, liptitle, lipprice, hoverimage }) => {
 // const mediaStyles = useFourThreeCardMediaStyles();
  const AddtoCart = {
    fontFamily: ["'Benne'", 'serif'].join(','),
     border: '1px solid lightgrey',
       
   // backgroundColor: '#eccdc7',
    marginTop: '1rem',
  } 
  const hadelevent =(e) => {
    //backgroundColor: '#CEBDB3',
   
    e.target.lipimage=hoverimage
  }
  return (
    
  
  
      <div>
        <Card className={classes.lipcard}>
        <div>  
                              <Typography className={classes.icon} justifyContent='center' > 
                                  <IconButton  ><FavoriteBorderIcon /></IconButton>
                                </Typography>
                            </div>
          <div style={{width: '100%',height: "320px", }} >
                        <img src={lipimage} style={{width: '100%',height: "320px", }}
                         onMouseOver={e => (e.currentTarget.src = hoverimage)} 
                         onMouseOut={e => (e.currentTarget.src = lipimage)} objectFit = 'cover' alt="This is product" />
      
                
            </div>    
           
           
                     <div>
                             
                         <CardActionArea  onMouseEnter={hadelevent} className={classes.lipactionArea}>
                    
                       
                      
                        </CardActionArea>
                    </div>
              
                  <CardContent className={classes.lipcontent}>

                    <Typography className={classes.liptitle} variant="body1">
                      {liptitle}
                    </Typography>
                    <Typography>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarBorderIcon/>
                    </Typography>
                    <Typography className={classes.lipprice} variant="body1">${lipprice}</Typography>
                  <Typography > 
                     <Button aria-label="add to cart" style={AddtoCart} classname={classes.Button} >
                    add to cart<AddShoppingCartIcon/></Button>
                    </Typography>
                  </CardContent>

            </Card>
      </div>
  
  );
};



const Lips = ({name, price, image,  image1}) => {
  
   // const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#fff' });
    return (
        <>
        <Grid  container spacing={4}  xs={12} sm={6} md={4} wrap={'nowrap'}>
          <Grid item>
        
            <CustomCard
              classes={styles}
              liptitle={name}
              lipprice={price}
              lipimage={image}
              hoverimage={image1}
            />
          </Grid>
        
        </Grid>
      </>
    );
};

export default Lips;





