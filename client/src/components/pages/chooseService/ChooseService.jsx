import useStyles from './styles';
import ImageSlide from '../../ImageSlide/ImageSlide';
import { Paper, Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom'; 




const ChooseService = () => {
  const classes = useStyles();
  const services = ['service: 120₪', 'service: 80₪', 'service: 200₪', 'service: 160₪', 'service: 50₪', 'service: 30₪', 'service: 160₪', 'service: 50₪', 'service: 30₪'];
  const serviceList = [];
  services.forEach((service, index) => {serviceList.push(  <Grid container item xs={4} className={classes.contactButtonsMain} >
    <Link className={classes.Link} to="/DatePicker">
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >
  
          <Grid item xs >
  <Typography className={classes.typography}>{index+1}. {service}</Typography>
          </Grid>
        
        </Grid>
      </Paper>
    </Link>
  </Grid>)}) 
  
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

<Typography noWrap className={classes.typography}>Choose a service</Typography>

{/* Services buttons */}
<Paper className={classes.contact}>
<Grid container spacing={3}>
{serviceList}
</Grid>
</Paper>

    </Grid>
  </div>
  );
};

export default ChooseService;