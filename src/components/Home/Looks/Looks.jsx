import React,{useEffect,useState} from 'react'
import {Button} from '@material-ui/core'
import Look from  './Look'
import { makeStyles } from '@material-ui/core/styles';

import classnames from 'classnames'

const Looks = () => {

  const [isMobile,setIsMobile] = useState(false)     
  useEffect(() => {   
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 960;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile])
 

    const useStyles = makeStyles((theme) => ({
        container: {
        padding:'5rem',
        paddingRight:'2rem',
        paddingTop:'2%',
        marginLeft:'80px',
        width: '97%',
        flexWrap: 'wrap',
        display:'flex',
        flexDirection:'row',
        overflowX:'auto',
        
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
          }
        },
        btn:{
            margin:'45px auto',
            position: 'absolute',
            left: '40%',
            padding: '15px',
            width: '400px',
            fontSize:'1.2rem',
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
        
    }))

    const data = [
        {
            "id":1,
            "name" : "Nuface",
            "des ": " Nuface mini facial toner",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://source.unsplash.com/bqe0J0b26RQ',  
        },
        {
            "id":2,
            "name" : "Smoothskin",
            "des ": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://source.unsplash.com/0XfjLwiI1sk',         
        },
        {
            "id":3,
            "name" : "Foreo",
            "des ": "Foreo Luna 3 Sonic Facial \
            Cleanser and Anti Ageing Massager",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://source.unsplash.com/MYeFPr_Xtmc',
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
    return (
        <div>
              <div className ={classnames(classes.container)}>
                <div style={{display:'inline-flex'}}>
                    {
                        data.length>0 ? data.map(product => (
                                    <Look product = {product}/>                     
                        )) : <h1>no data</h1>
                    }
                    </div>              
            </div>
            <Button variant="contained" size="large" disableElevation 
                className={classes.btn} 
                > Get Inspired</Button>
        </div>
          
    )
}

export default Looks
