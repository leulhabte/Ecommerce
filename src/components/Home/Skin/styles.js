import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  skinProducts: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '90px',
    maxWidth: '400px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',  
  },
  skinButton: {
    border: '1px solid lightgrey',
    marginTop: '10px',
  
  },
  skinImages: {
    margin: 'auto',
    width: '100%',
    heigth: '900px', 
    objectFit: 'cover'   
  },
  skinProductsImage :{
    position: 'relative',
  },
  Favorite: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    color: '#f59b89'
  }

}));