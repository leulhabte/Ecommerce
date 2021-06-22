import BrushContent from './BrushContent';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { GridList, GridListTile} from '@material-ui/core';
import './Brushes.css'
const Brushes = () => {
    
    return (
        <div className="Brushes">                
            {
                BrushContent.map((Brush)=> {
                    return (
                        <div key={Brush.id} className={`Brush ${Brush.clName1} $${Brush.clName2}`}>
                            <FavoriteBorderIcon />
                        </div>
                    )
                    
                })
            }
            
        </div>
    );

}

export default Brushes;
