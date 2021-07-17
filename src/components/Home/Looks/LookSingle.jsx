import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { Hero, SinglePage } from '../../Imports' 

function LookSingle() {

   // VWGPhJyzMQ4
    const img2 = 'https://source.unsplash.com/AuCrXk0pLWo'
    const img = 'https://source.unsplash.com/random'
    const Title = "Looks"

    //style
    const useStyles = makeStyles((theme) => ({
        container: { 
            width:'100%',
            padding:'0 5rem',
            overflow:'hidden'
          },
    }))
    
    const data = [
        {
            "id":1,
            "name" : "Nuface",
            "description": " Nuface mini facial toner",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://source.unsplash.com/3xTP_gWUlrg',
            "image2":'https://source.unsplash.com/FoeIOgztCXo',
            'color':'#555'
            

        },
        {
            "id":2,
            "name" : "Smoothskin",
            "description": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://source.unsplash.com/bqe0J0b26RQ',
            "image2":'https://source.unsplash.com/HCsZqthDIyw',
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
            "image":'https://source.unsplash.com/bOKXxn9qlsk',
            "image2":'https://source.unsplash.com/ceWgSMd8rvQ',
            'color':'#cdcdcd'

        },
        {
            "id":4,
            "name" : "Superhero",
            "description": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://source.unsplash.com/VWGPhJyzMQ4',
            "image2":'https://source.unsplash.com/vyhYvCiL3QQ',
            'color':'#e3ac64'

        },
        {
            "id":5,
            "name" : "Nuface",
            "description": " Nuface mini facial toner",
            "rating" : 4.5 ,
            "price" : 89,
            "image":'https://source.unsplash.com/vTL_qy03D1I',
            "image2":'https://source.unsplash.com/B22hPKWDW3k',
            'color':'#555'
            

        },
        {
            "id":6,
            "name" : "Smoothskin",
            "description": " Smoothskin Bare + Ultrafast IPL Hair",
            "rating" : 4.5 ,
            "price" : 280,
            "image":'https://source.unsplash.com/0XfjLwiI1sk',
            "image2":'https://source.unsplash.com/Wude2F3CMss',
            'color':'rgb(191,111,129)'
            //#bf6f81
        },
        {
            "id":7,
            "name" : "Foreo",
            "description": "Foreo Luna 3 Sonic Facial \
            Cleanser and Anti Ageing Massager",
            "rating" : 4.5 ,
            "price" : 55,
            "image":'https://source.unsplash.com/MYeFPr_Xtmc',
            "image2":'https://source.unsplash.com/dNmmjX2Owxk',
            'color':'#cdcdcd'

        },
        {
            "id":8,
            "name" : "Superhero",
            "des": " Superhero matt lipstick",
            "rating" : 4.5 ,
            "price" : 150,
            "image":'https://source.unsplash.com/E4FshuTY5qs',
            "image2":'https://source.unsplash.com/95MWEMFR-5g',
            'color':'#e3ac64'

        }
    ]
    const classes = useStyles()
    return (
        <div>
            <Hero title={Title} image = {img2} />
            <div className={ classes.container}>                       
                <Grid container justify= 'center' spacing={4} >            
                    {   
                        data.length  >0 ? data.map(product => (
                            <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                                <SinglePage product={product}
                                />  
                            </Grid>
                        )) : <h1>No data</h1>
                } 
                
                </Grid>
            </div>
        </div>
        
    )
}

export default LookSingle
