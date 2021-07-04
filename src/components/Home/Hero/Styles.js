import {makeStyles} from '@material-ui/core/styles'
import image from './uf.jpg'
import image1 from './face3.jpg'

export default makeStyles((theme) => ({

    root:{
        minHeight:'100vh',
        // backgroundImage:`url(${image})`,
        padding:'0',
        margin:'0',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width: '100vw',
        position:'relative',
        backgroundRepeat:'no-repeat',
        animation:"effect",
        animationDuration:"1s",
        animationDelay:'.1s',
    
        

    },
    "@keyframes effect":{
        "0%":{
            backgroundImage:`url(${image})`,
        },
        "20%" : {
            backgroundImage : `url(${image1})`,
        } 
    }
}))
