import React from 'react'
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import {NavLogo} from '../Imports/index';
import {Grid,Typography,Link,TextField} from '@material-ui/core'

function Footer() {

    const useStyles = makeStyles((theme) => ({
        footer: {
        //  position:'relative',
         backgroundColor:'rgb(247,234, 232)',
         //padding:'5rem 0 '
        },
        input:{
            outline:'15px'
        },
        grids:{
            maxWidth:'345px'
        },
        container:{
            flexGrow:1,
            padding:0,
            margin:0
        }
    }))
    const CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#F3D9D9',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#666',
             
            },
            
            '&.Mui-focused fieldset': {
              borderColor: '#F3D9D9',
              outline:'10px'
            },
          },
        },
      })(TextField);
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Grid container spacing={4} xs={12} md={3}  className={classes.container}  
             justifyContent="space-between">
                <Grid className={classes.grids} item>
                    <NavLogo/>
                    <Typography>
                        <Link href='/aboutUs'>
                            About us
                        </Link >
                    </Typography>                    
                    <Typography>
                        <Link href='/contactUs'>
                            Contact us
                        </Link >                        
                    </Typography>
                    <Typography>                       
                        Social medial links
                    </Typography>
                   
                </Grid>
                <Grid className={classes.grids} item>
                    <Typography>
                         Customer care   
                    </Typography>
                    <Typography>
                        <Link href='/terms'>
                            Terms of Service
                        </Link >  
                    </Typography>
                    <Typography>
                        <Link href='/terms'>
                            Privacy Police
                        </Link >                         
                    </Typography>
                    <Typography>
                        <Link href='/terms'>
                            Privacy Police
                        </Link >   
                    </Typography>
               </Grid>
                <Grid className={classes.grids} item>
                    <form>
                        {/* <TextField id="subsInput" label="Email" variant="outlined" fullWidth/> */}
                        <CssTextField label='Email'
                        variant="outlined"
                        className={classes.input}
                        />
                    </form>
                    <Typography>
                        Email
                    </Typography>
                </Grid>
            </Grid>
            
             
       
            </div>
    )
}

export default Footer
