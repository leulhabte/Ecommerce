
import React, {useState} from "react";
import Lips from './Lips'
import { Grid, Card  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

}));
function Lip() {
    const classes = useStyles()
    const[products, setproducts]= useState([
        {  id: "1", name:'lip stick', price: 100 ,image1: 'https://st4.depositphotos.com/1832477/26922/v/950/depositphotos_269222522-stock-illustration-set-of-cream-blobs-of.jpg', image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg' },
        {  id: "2", name:'lip glass', price:  120 , image: 'https://www.paccosmetics.com/wp-content/uploads/2019/05/LPGL_GL01.main_.jpg',  image1:'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume_530x@2x.jpg?v=1597389870'},
       {  id: "3", name:'lip mask', price: 80 , image: 'https://cdn.shopify.com/s/files/1/1959/3607/products/seraphineapple_baume2_1024x1024.jpg?v=1597389870', image1:'https://www.maccosmetics.com/media/export/cms/products/smoosh_v2/mac_smoosh_S3HT22.jpg' },

    ]);
    return(
    
       <div>
          <Grid container justify= 'center' spacing={4} className={classes.toolbar}>
                    
               {products.map(product =>(

                    <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                         <Lips key={product.id} name={product.name} price={product.price} image={product.image} image1={product.image1}></Lips>
                    </Grid>
               ))}
        </Grid>
         </div>   
       
    );
}
export default Lip;