import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    liptitle: {
    color: '#CEBDB3',
    fontFamily: 'Keania One',
    fontSize: '2rem',
    },
    lipheder: {
    padding: 0,
    margin: '0.5rem',

    },
    Title: {
        // fontFamily: ['"Playfair Display"', 'serif'].join(','),
        // display: 'flex',
        // justifyContent:'center',
        // // textAlign:'center',
        // alignItems: 'center',
        padding:'25px',
        color:'#666',
       // fontSize:'40px',
        fontFamily: `'Playfair Display SC', serif`,
        textTransform:'uppercase'
    },
   bestseller:{
      margin:'50px auto',
      paddingLeft : '50px',
      flexGrow:1,
      padding:'20rem 0'
   },
   bestSell_title:{
       padding:'25px',
       color:'#666',
      // fontSize:'40px',
       fontFamily: `'Playfair Display SC', serif`
   },
   skin:{
    backgroundColor: 'rgb(246,243, 240)',
    margin:'100px 0'
   },
   face:{
    //margin:'50px auto',
       //padding:'5rem 0'
       margin:'100px 0',
       backgroundColor: 'rgb(247,234, 232)'
   }
}));
