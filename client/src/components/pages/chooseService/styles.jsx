import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 1),
      },
      mainGridContainer:{
        justifyContent:"center",
        alignItems:"center"
      },
      paper1: {
        padding: theme.spacing(2),
        width: 150,
        padding: '5px'
      },
      paper: {
        maxWidth: 400,
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(2),
        
      },
     
      contact:{
        maxWidth: 600,
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(2),
       backgroundColor: '#ffffff00',
       boxShadow: '0 0px 0px 0px '
        
      },
      Link:{
        textDecoration: 'none',
      },
      contactIconAndTextGrid:{
            alignItems: "center",    
      },
     
      contactButtonsMain: {
        justifyContent:"center",
        alignItems:"center", 
      },
      [theme.breakpoints.down("sm")]: {
        typography:{
            fontSize: 17,            
        },
        paper1:{
          maxWidth: 115,
        //   justifyContent: 'space-around'
    },
        contact:{
          maxWidth: 450,

        },
      }
  }));