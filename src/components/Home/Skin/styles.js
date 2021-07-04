import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // root: {
  //   maxWidth: '100%',
  //   marginLeft: '10px',
  //   marginRight: '10px',
  //   // position:'relative',

    
  // },
  skinProducts: {
    position: 'relative',
  
    overflow: 'hidden',
    marginTop: '90px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: ["'Benne'", 'serif'].join(','),   
  },
  skinButton: {
    border: '1px solid lightgrey',
    backgroundColor: 'white',
  },
  skinProductsImage: {
    
  },
  skinImages: {
    margin: 'auto',
    width: '100%',
    heigth: '900px', 
    objectFit: 'cover'   
  }

}));