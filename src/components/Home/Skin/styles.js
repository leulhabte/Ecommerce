import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    // position:'relative',
    height: '100%',
    
  },
  media: {
    height: 0,
    paddingTop: '100%',
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
  skinImages: {
    // width: '200px',
    // height: '300px',
  
  }

}));