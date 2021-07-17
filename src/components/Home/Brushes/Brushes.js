import BrushContent from './BrushContent';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { GridList, GridListTile, Button} from '@material-ui/core';
import { AddShoppingCart, Favorite} from '@material-ui/icons';
import './Brushes.css';
// import * as React from 'react';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';

const Brushes = () => {
    const FavoriteStyles = {
        backgroundColor: 'yellow',
        width: '50px',
        height: '50px',
    }
    const AddtoFavorite = (e)=> {
        if(e.target.style.color != 'red'){
            e.target.style.color = 'red'
        }
        else{
            e.target.style.color = ''
        }
    }
    return (
        <div className="myBrush">
            <div className="Brushes">
                {
                    BrushContent.map((Brush)=> {
                        return (
                            <div key={Brush.id} className={`Brush ${Brush.clName1} ${Brush.clName2}`}>

                                <div className='brush-product-details'>
                                    <div className='Brush-description'>
                                        <h4>{Brush.Title}</h4>
                                        <span>$ {Brush.price}</span>
                                    </div>
                                    <div className="Brush-icons">
                                        <Button variant="p" size="small" style={{textTransform: "capitalize"}} disableElevation >Add to Cart</Button>
                                        <Favorite style={{margin: 'auto', color: 'rgb(240, 239, 234)'}} onClick={AddtoFavorite} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
        // <ImageList sx={{ width: 500, height: 450 }}  variant="woven" cols={3} gap={8}>
        //     {BrushContent.map((Brush)=> (
        //         <ImageListItem key={Brush.img}>
        //         <img
        //             srcSet={`${Brush.img}?w=161&fit=crop&auto=format 1x,
        //                 ${Brush.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        //             alt={Brush.title}
        //             loading="lazy"
        //         />
        //         </ImageListItem>
        //     ))}
    // </ImageList>

    );

}

export default Brushes;
