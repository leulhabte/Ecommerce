import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  skinProducts: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '90px',
    width: '100%'
    // maxWidth: '400px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: `'Playfair Display', serif`
  },
  skinButton: {
    marginTop: '10px',
    color: '#FF94CC',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    textTransform:'uppercase',
    fontWeight:'bold',
    '&:hover': {
      border: '2px solid #FFAAAA',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 0 #FF94CC',
      // color: '#ffaaaa'
    }

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
    top: '1px',
    right: '1px',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(240, 239, 234)'
  },
}));
