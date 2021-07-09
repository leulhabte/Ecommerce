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
        image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPMVlPpho3CSYGuOadRSJjOSNVREsamqKqRVsYRjoKlT4O2gIawrYoJT9QGOaqtL-w_0&usqp=CAU',
        name: 'RoseKin',
        price: '$ 50',
        description: 'Hydrating, soothing, softens skin',
    },
    {
        id: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/31m%2BgWgDgbL._SY355_.jpg',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB8UL-0gi1fm8A1hITOKMtjrA_lCePvfT5zK4PIuNdXrTjNu7qsXgre7VMMPZdiThxH4&usqp=CAU",
        name: 'Z skin',
        price: '$ 39',
        description: 'Blurs lines, visibly shrinks pores',
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69p0ohWVjYE_3dM_GyG_T8kIfLFj-Ml1phw&usqp=CAU',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucH5NnEiv8hsJagnmuihs0akuq6NMek_2V_mWGuyzd0Z5FRav-6oqzqbeVLsUakeytrg&usqp=CAU",
        name: "It's a skin",
        price: '$ 80',
        description: 'Hydrating, improves radiance, clarifying',
    },
    {
        id: 4,
        image: 'https://3.imimg.com/data3/KC/PH/GLADMIN-9214/herbal-skin-care-products-500x500.jpg',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdxf6gXGzYJDmNyWBF-A23TOLe9tGP1GVKVdNd5wZwfCmHiYbvd-5BtxlwZ9t7XOfa3k&usqp=CAU",
        name: 'Storbe cream',
        price: '$ 50',
        description: 'Liquid highlighter, softest glowing finish',
    },
    {
        id: 5,
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559934008-the-beauty-chef-1559933998.jpg?crop=0.9166666666666666xw:1xh;center,top',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UfOijhOlADbrmjBSwSaCLWuCc8AcpfqSNg&usqp=CAU",
        name: 'Probiotic Skin Refiner',
        price: '$ 40',
        description: 'Exel Sun screen SFP 60',
    },
    {
        id: 6,
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561135245-62798.jpg?crop=0.667xw:1xh;center,top&resize=480:*',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xKfHFtYgGfuse2zat6-nlNtOF1ddPw13V1hPZ5JoSSMF6bktufgECmvdIrp3xZHcJvE&usqp=CAU",
        name: 'SkinCeuticals',
        price: '$ 129',
        description: 'Dry skin CTN Bundle',
    },
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdtPDYsbiB5onqSulRpYNSQLBKn71qm8wAQ&usqp=CAU',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwmdEeLUJzqfM-a8TDokpVDHWU325FuT_nUfvGHCc8n3Q0X761t95YrmtJxNFWpeBeBw&usqp=CAU",
        name: '33BB body lotion',
        price: '$ 99',
        description: 'Anti Aging Serum, All Skin Type, 30ml',
    },
    {
        id: 8,
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1547668873-tataharper-1547668863.jpg',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dJn6mTB_BAD3tTQ_ceO_-xHGyYHjXPEpdLvKWrjLUSE-LPNI2DMH2wNjXPcPMSX87V8&usqp=CAU",
        name: 'Purifying cleanser',
        price: '$ 69',
        description: 'Pore minimising Daily Wash',
    },
    {
        id: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1flx3NRrZpMHiGAIVU4DRUblWjt65eWkH1LVC62YY5E4GhiDHquNJ47wxUA7GOnSXX8&usqp=CAU',
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMilij8tVdIF6PmmzqGgf5vn22PDm2yWq1iu9fnUCZdNZ95Bli4CMEZuiI17xuUEC2UPE&usqp=CAU",
        name: 'Ophrys',
        price: '$ 119',
        description: 'Anti Blemish Cream',
    },
];
const SkinProducts = () => {
    
    const breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 500, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3, itemsToScroll: 2,  pagination: false },
    ];
    const ButtonStyles = {
        color: 'white',
        fontWeight: 'bold',
        fontSize : '15px',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginBottom: '50px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#FFAAAA',
        letterSpacing: '0.5rem'
    }
return (
        <> 
                <Carousel breakPoints={breakPoints} styles={{marginTop: '900px'}}>
                {Products.map((product) => {
                    return(     
                       <Skinproduct product={product} /> 
                    );
                })}        
                 </Carousel>  
          
            <Button style={ButtonStyles}>
                View More                   
            </Button>
        </>
    )

}

export default SkinProducts;