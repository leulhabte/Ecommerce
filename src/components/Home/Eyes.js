import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton  }from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles((theme) => ({
    lipactionArea: {
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      
      },
    },
      media: {
        height: 0,
       padingTop: '56.25%',
       '&:hover': {
        transform: '',
      
      },
      },
     eyetitle: {
         textAlign: 'center',
         fontFamily: 'Keania One',
         color: '#CEBDB3',
         '&:hover': {
                   
           color: '#000',
           
            },
        },
        eyecard: ({ color }) => ({
            minWidth: 256,
            borderRadius: 16,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
            },
          
          }),
          eyecontent: ({ color }) => {
            return {
                '&:hover': {
                   
                 
                   
                    },
                    padding: '1rem 1.5rem 1.5rem',
            };
             },
            
             eyeButton: {
                display: 'flex',
                '&:hover': {
                 color: '#CEBDB3',
                 flexDirection: 'column',
                },
                backgroundcolor: '#CEBDB3',
                textAlign: 'center'
              },
              eyeprice: {
                fontFamily: 'Montserrat',
                color: '#000',
                opacity: 0.87,
                marginTop: '1rem',
                fontWeight: 500,
                fontSize: 18,
               
              },
              
    }));

    const CustomCard = ({ classes, eyeimage, eyetitle, eyeprice }) => {
        
         return (
           <>
          
          
             <Card className={classes.eyecard}>
                  <CardContent className={classes.eyecontent}>
                        <div> <CardActionArea className={classes.eyeactionArea}>
                              <div> <IconButton   classname={classes.Button} >
                                  <FavoriteBorderIcon />
                                  </IconButton> 
                                </div>
                              <div> <CardMedia component='img' image = {eyeimage} /> </div>
                        </CardActionArea>
                        </div>
                          <Typography className={classes.eyetitle} variant={'h5'}>
                            {eyetitle}
                          </Typography>
                        <Typography>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarBorderIcon/>
                        </Typography>
                            <Typography className={classes.eyeprice} variant={'h6'}>
                              {eyeprice}
                            </Typography>
                        
                        
                        <IconButton classname={classes.eyeButton}>add to cart<AddShoppingCartIcon/></IconButton>
                     
                  </CardContent>
             </Card>
          
          </>
         );
       };
       const Eyes = () => {
  
        const classes = useStyles();
        const styles = useStyles({ color: '#CEBDB3' });
        return (
            <>
            <div>
            <Grid className={classes.container} container spacing={4}  wrap={'nowrap'} >
           
                    <Grid item >
                  
                        <CustomCard
                        classes={styles}
                        eyetitle='eye lashes'
                        eyeprice= 'price: $50'
                        eyeimage='https://cdn.shopclues.com/images1/thumbnails/99135/640/1/145353082-99135635-1555518256.jpg'
                        />
                    </Grid>
                    <Grid item className={classes.cont2} >
                    
                    <CustomCard
                    classes={styles}
                    eyetitle='eye shadow'
                    eyeprice= 'price: $80'
                    eyeimage='https://images-na.ssl-images-amazon.com/images/I/71mki%2BnXFmL._SY355_.jpg'
                    />
                </Grid>
                <Grid item >
                    
                    <CustomCard
                    classes={styles}
                    eyetitle='eye brow enhancer'
                    eyeprice= 'price: $60'
                    eyeimage='https://img.joomcdn.net/62f31f0e4302d4aaf4823de5f6d0c9c4685be1b8_original.jpeg'
                    />
                </Grid>
                
            </Grid>
            </div>
          </>
        );
    };
    
    export default Eyes;