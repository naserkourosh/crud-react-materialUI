import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    direction: 'column',
    justifyContent:"center",
    alignItems:"center"
    },
    headerFAB:{
      backgroundColor:'green',marginLeft:'.6rem',color:'#fff'
    }
  })


const Header:React.FC<{refreshBtn: Function}> =(props)=> {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.headerContainer}
          >
          <Typography variant="h3" component="h3">
            Employee List

            <Fab
            onClick={()=>props.refreshBtn()} className={classes.headerFAB}
             size='small' aria-label="add">
              <RefreshIcon />
            </Fab>
          </Typography>
          <Typography variant="h6" color="textSecondary">
            It will Fetch API by Request
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
