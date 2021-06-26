import React from 'react'
import { Grid } from '@material-ui/core'
import Skinproduct from './skinProduct'
import Carousel from 'react-elastic-carousel'
import {Typography, Button, Card, CardActions, 
    CssBaseline, Toolbar, Container,
     CardContent, CardMedia, AppBar, IconButton} from '@material-ui/core'
const Products = [
    {
        id: 1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl7kyEy2QeXzoRfuKOwfwZDFiJR1biuywBQ&usqp=CAU',
        name: 'RoseKin',
        price: '$ 50',
        description: 'Enhance Your Daily Makeup Routine with the highest lightweight protection possible.',
    },
    {
        id: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/31m%2BgWgDgbL._SY355_.jpg',
        name: 'Z skin',
        price: '$ 39',
        description: 'Buy z skin cosmotics, soften your skin seemelesly',
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69p0ohWVjYE_3dM_GyG_T8kIfLFj-Ml1phw&usqp=CAU',
        name: "It's a skin",
        price: '$ 80',
        description: 'The best skin lotion, Loved by most users.',
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXbot04UCiixGG_owspfEtyP6ED_o_huW3A&usqp=CAU',
        name: '33BB body lotion',
        price: '$ 69',
        description: 'A nice sun screen lotion',
    },
];
const SkinProducts = () => {
    
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToshow: 3},
        {width: 1500, itemsToshow: 4},

    ];
    const ButtonStyles = {
        color: 'white',
        fontSize : '15px',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px auto',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'black',
        letterSpacing: '0.5rem'

    }

    return (
        <> 
            <Grid container spacing={4}>
                {/* <Carousel breakPoints={breakPoints} > */}
                {Products.map((product) => {
                    return(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                       <Skinproduct product={product} />     
                    </Grid>
                    );
                })}
                {/* </Carousel> */}
                
            </Grid>
            <Button style={ButtonStyles}>
                View More                   
            </Button>
        </>
    )

}

export default SkinProducts;