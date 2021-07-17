import React from 'react'
import SinglePages from '../Imports/SinglePages';
import Products from './Products';
import { Grid } from '@material-ui/core';
import SkinProduct  from './SkinProduct';

const SkinProductPage = () => {
    
    return (
        <div>
            
            <Grid container spacing={2} >
            {Products.map((product) => {
                    return(     
                       <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3} style={{margin: '50px 0 50px 0 '}}>
                            <SkinProduct product={product} /> 
                       </Grid>
                    );
                })} 

            </Grid> 
           
        </div>
    )
}

export default SkinProductPage;