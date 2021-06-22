
import React, {useState} from "react";
import Lips from './Lips'
import { Grid, Card  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

}));
function Lip() {
    const classes = useStyles()
    const[products, setproducts]= useState([
        {  id: "1", name:'lip stick', price: 100 , image: 'https://images-na.ssl-images-amazon.com/images/I/61y7N%2BzLs5L._SL1500_.jpg' },
        {  id: "2", name:'lip glass', price:  120 , image: 'https://www.paccosmetics.com/wp-content/uploads/2019/05/LPGL_GL01.main_.jpg' },
       {  id: "3", name:'lip mask', price: 80 , image: 'https://img.joomcdn.net/a77f5bd82bd3b3e14cc9c04915081b242d13f530_original.jpeg' },

    ]);
    return(
    
       <div>
          <Grid container justify= 'center' spacing={4} className={classes.toolbar}>
                    
               {products.map(product =>(

                    <Grid item key={product.id} xs ={12} sm={6} md ={4} lg={3}>
                         <Lips key={product.id} name={product.name} price={product.price} image={product.image} ></Lips>
                    </Grid>
               ))}
        </Grid>
         </div>  
       
    );
}
export default Lip;