import useStyles from './styles';
import ImageSlide from '../../ImageSlide/ImageSlide'
import { Paper, Grid, Typography } from '@material-ui/core';
import { Call, LocationOn, Facebook, WhatsApp, Instagram, Info } from '@mui/icons-material';

import { Link } from 'react-router-dom'; 

const Home = () => {
const classes = useStyles();

  return (
    <div className={classes.root}>
  <Grid container className={classes.mainGridContainer} direction="column">

{/* ImageSlide component */}
<Grid item xs={12} >
<Paper className={classes.paper}>
<Grid container wrap="nowrap" >
 
  <Grid item xs zeroMinWidth>
    <ImageSlide/>
  </Grid>
</Grid>
</Paper>
</Grid>

{/* order service button */}
<Grid item xs={10} className={classes.orderServiceButton}>
  <Link className={classes.Link} to="/chooseService">
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap">
        <Grid item xs zeroMinWidth>
          <Typography noWrap className={classes.typography}>order service</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Link>
</Grid>

{/* contact section */}
<Paper className={classes.contact}>
<Grid container spacing={3}>

{/* call us button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <Call/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>Call us</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>

{/* Address button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <LocationOn/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>Address</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>

{/* About us button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <Info/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>About us</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>

{/* WhatsApp button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <WhatsApp/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>WhatsApp</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>

{/* Instagram button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <Instagram/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>Instagram</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>

{/* Facebook button */}
  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link}>
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >

           <Grid item>
            <Facebook/>
           </Grid>

          <Grid item xs >
            <Typography noWrap className={classes.typography}>Facebook</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>


</Grid>
</Paper>

</Grid>
  </div>
  );
}
  

export default Home;