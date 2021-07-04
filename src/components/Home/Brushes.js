import BrushContent from './BrushContent';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { GridList, GridListTile, Button} from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons'
import './Brushes.css'
const Brushes = () => {
    const FavoriteStyles = {
        backgroundColor: 'yellow',
        width: '50px',
        height: '50px',
    }
    return (
        <div className="Brushes">                
            {
                BrushContent.map((Brush)=> {
                    return (
                        <div key={Brush.id} className={`Brush ${Brush.clName1} $${Brush.clName2}`}>
                            
                            <div className='brush-product-details'>
                                <div className='Brush-description'>
                                    <h4>{Brush.Title}</h4>
                                    <span>$ {Brush.price}</span> 
                                    
                                </div>
                                <div className="Brush-icons">
                                    <button>Buy Now</button>
                                    <FavoriteBorderIcon style={{marginLeft: '70px', color: 'white'}}/>
                                </div>
                                 
                            </div>
                        </div>
                    )
                    
                })
            }
            
        </div>
    );

}

export default Brushes;
