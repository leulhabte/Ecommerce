import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Button  }from '@material-ui/core';
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
                   
                    backgroundColor: color,
                   
                    },
                    padding: '1rem 1.5rem 1.5rem',
            };
             },
            
             Button: {
                display: 'flex',
                '&:hover': {
                 color: '#CEBDB3',
                 flexDirection: 'column',
                },
                color: '#CEBDB3'
              },
              
    }));

    const CustomCard = ({ classes, eyeimage, eyetitle }) => {
        
         return (
           <>
          
           <CardActionArea className={classes.eyeactionArea}>
             <Card className={classes.eyecard}>
               <CardContent className={classes.eyecontent}>
               <CardMedia component='img' image = {eyeimage} /> 
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
                 <Typography containt spacing={8}>
            <Button  classname={classes.Button} >fav<FavoriteBorderIcon /></Button>
            <Button>add to cart<AddShoppingCartIcon/></Button>
          </Typography>
               </CardContent>
             </Card>
           </CardActionArea>
          </>
         );
       };
       const Eyes = () => {
  
        const classes = useStyles();
        const styles = useStyles({ color: '#CEBDB3' });
        return (
            <>
            <Grid className={classes.container} container spacing={4}  wrap={'nowrap'} >
                    <Grid item >
                    
                        <CustomCard
                        classes={styles}
                        eyetitle='eye lashes'
                        eyeimage='https://cdn.shopclues.com/images1/thumbnails/99135/640/1/145353082-99135635-1555518256.jpg'
                        />
                    </Grid>
                    <Grid item className={classes.cont2} >
                    
                    <CustomCard
                    classes={styles}
                    eyetitle='eye shadow'
                    eyeimage='https://images-na.ssl-images-amazon.com/images/I/71mki%2BnXFmL._SY355_.jpg'
                    />
                </Grid>
                <Grid item >
                    
                    <CustomCard
                    classes={styles}
                    eyetitle='eye brow enhancer'
                    eyeimage='https://img.joomcdn.net/62f31f0e4302d4aaf4823de5f6d0c9c4685be1b8_original.jpeg'
                    />
                </Grid>
            </Grid>
            
          </>
        );
    };
    
    export default Eyes;