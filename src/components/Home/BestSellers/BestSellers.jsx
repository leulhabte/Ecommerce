import React from 'react'
import {Grid,Button} from '@material-ui/core'
import BestSeller from  './BestSeller'
import { makeStyles } from '@material-ui/core/styles';
import img from './face8.jpg'
import img2 from './face3.jpg'
import img3 from './face10.jpg'
import img4 from './img4.jpg'
const BestSellers = (theme) => {
    const useStyles = makeStyles((theme) => ({
        container: {
         // padding:'50px',
          //backgroundColor:theme.palette.background.paper,
          //padding:theme.spacing(10,0,9)
        //   paddingTop:'50px'
        padding:'5rem',
        paddingTop:'2%',
        marginLeft:'25px'

    
        },
        btn:{
            margin:'45px auto',
            position: 'absolute',
            left: '40%',
            padding: '15px',
            width: '350px',
            backgroundColor:'#FFAAAA',
            color:'#fff',
            fontWeight:'bold',
            boxShadow:'none',
            '&:hover': {
                backgroundColor: '#fff',
                color:'#FFAAAA',
                boxShadow: '0 0 0 0.2rem #FFAAAA',
              },
            
        }
    }))

    const data = [
        {
            "id":1,
            "name" : "Nuface",
            "des ": " Nuface mini facial toner",
            "rating" : 4.5 ,
            "price" : 89,
            "image":img
            

        },
        {
            "id":2,
            "name" : "Smoothskin",
            "des ": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":img2
            

        },
        {
            "id":3,
            "name" : "Foreo",
            "des ": "Foreo Luna 3 Sonic Facial \
            Cleanser and Anti Ageing Massager",
            "rating" : 4.5 ,
            "price" : 55,
            "image":img3
            

        },
        // {
        //     "id":4,
        //     "name" : "Superhero",
        //     "description ": " Superhero matt lipstick",
        //     "rating" : 4.5 ,
        //     "price" : 150,
        //     "image":img4

        // }
    ]
    const classes = useStyles()
    // const handleBtnColorChange = (e) =>{
    //     e.target.backgroundColor = '#fff'
    //     e.target.color="#FFAAAA"
    // }
    // const handleBtnColorRev= (e) =>{
    //     e.target.backgroundColor = '##FFAAAA'
    //     e.target.color="#fff"
    // }
    return (
        // <Container maxWidth="lg" className={classes.container}>
             <div className ={classes.container}>
                 <Grid container justifyContent="space-around" 
                    alignItems="center" spacing={4} style={{flexGrow:1}}
            >
                {
                    data.length>0 ? data.map(product => (
                        
                            <Grid Item key={product.id} xs ={12} sm={6} md ={4} lg={4} direction="row">
                                <BestSeller product = {product}/>
                            </Grid>
                    
                    )) : <h1>no data</h1>
                }
            </Grid>
            <Button variant="contained" size="large" disableElevation 
            className={classes.btn} 
            > Get Inspired</Button>
             </div>

             
        // </Container>
       
    )
}

export default BestSellers
