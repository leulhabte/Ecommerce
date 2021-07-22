import React,{useState,useEffect} from 'react'
import { Grid,Button, Typography  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BestSeller from './BestSeller'

const BestSellers = () => {
  
  //states
  const [btnVisible,setBtnVisible] = useState(false)
  const [isMobile,setIsMobile] = useState(false)

  useEffect(() => {   
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 960;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile])

  //styles
    const useStyles = makeStyles((theme) => ({
        root: {
         position:'relative',
         marginTop:'15px'
        },
        left:{
          maxWidth: 400,
          boxShadow:0,
          border:0,
          overflowX:'auto',
          borderRadius:0,
          backgroundColor:'#555',
          height:'500px',    
          position:'relative'
        },
        bestSell_desc:{
            color:'#FFAAAA',
            textAlign:'center',
            position: 'absolute',
            top: '40%',
            margin:'0 15px',
            marginRight:'20px',
            fontWeight:'bold',
            textTransform:'capitalize'
        },
        right:{
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        
            '&::-webkit-scrollbar ': {
              width: '0.1em',
              height:'0.5em',
            },
            
           ' &::-webkit-scrollbar-track': {
              //boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'darkgray',
              //outline: '1px solid slategrey'
            }},
            btn:{
              margin:'45px auto',
              position: 'absolute',
              left: '15%',
              textTransform:'uppercase',
              padding: '15px',
              width: '250px',
              top:'50%',
              backgroundColor:'#FFAAAA',
              color:'#fff',
              fontWeight:'bold',
              boxShadow:'none',
              '&:hover': {
                  backgroundColor: '#fff',
                  color:'#FFAAAA',
                  boxShadow: '0 0 0 0.2rem #FFAAAA',
                },
              
          },
          btn1:{
            position: 'absolute',
            left: '50%',
            textTransform:'uppercase',
            padding: '15px',
            width: '250px',
            visibility:'hidden',
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
      }));
    const classes = useStyles();

    const data = [
        {
            "id":1,
            "name" : "Nuface",
            "description": " Nuface mini mascara",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://source.unsplash.com/fiMx7fLi5F8',
            'color':'#555'
            

        },
        {
            "id":2,
            "name" : "Smoothskin",
            "description": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://source.unsplash.com/7TlWZkpxCb0',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":3,
            "name" : "Foreo",
            "description": "Foreo Luna 3 Sonic Facial \
            Cleanser and Anti Ageing Massager",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://source.unsplash.com/0z4h9qneDMA',
            'color':'#cdcdcd'

        },
        {
            "id":4,
            "name" : "Superhero",
            "description ": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://source.unsplash.com/8rl3jRgQIag',
            'color':'#e3ac64'

        }
    ]
    
    //event handlers
  const handlebtnVisibility = () =>{
    isMobile ?  setBtnVisible(true) : setBtnVisible(false)
  }

  const handlebtnHide = () =>{
    setBtnVisible(false)
  } 

  const getLookBtn = (
      <Button variant="contained" size="medium" disableElevation 
       className={classes.btn} 
        // style ={{visibility : btnVisible ? 'visible' : 'hidden'}}
      onMouseEnter={handlebtnVisibility} onMouseLeave={handlebtnHide}
      > Buy Now</Button>
    );

  const viewMoreBtn = (
      <Button variant="contained" size="Large" disableElevation 
        className={classes.btn1} 
         style ={{visibility : isMobile ? 'visible' : 'hidden'}}
      onMouseEnter={handlebtnVisibility} onMouseLeave={handlebtnHide}
      > Buy Now </Button>
    )
    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={0} md={4}>
              <div className={classes.left}>
                  <Typography variant="h5" color='textSecondary' className={classes.bestSell_desc}>
                    Check out our best selling products
                  </Typography>
                  {getLookBtn}
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className={classes.right}>
                    {
                        data.length>0 ? data.map(product => (
                                    <BestSeller product = {product}/>
                        )) : <h1>no data</h1>
                    }
                </div>
            </Grid>
            
             
          </Grid>
          {viewMoreBtn}
          
        </div>
       
    )
}

export default BestSellers
