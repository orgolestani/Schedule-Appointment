import useStyles from './styles';
import ImageSlide from '../../ImageSlide/ImageSlide';
import { Paper, Grid, Typography, Button } from '@material-ui/core';


import { Link, useHistory } from 'react-router-dom'; 



const ChooseService = () => {
  const history = useHistory()
  const classes = useStyles();
  const clickHandler = (serviceName)=>{history.push({
    pathname: `/ServiceType/:${serviceName}`,
    state: { service: serviceName }
  }
  )}

  const services = ['fellatio: 120₪', 'Gwak-Gwak 2000: 80₪', 'Angry dragon: 200₪', 'Full-Body: 160₪', 'Ball-Tickle: 50₪', 'service: 30₪', 'service: 160₪', 'service: 50₪', 'service: 30₪'];
  const serviceList = [];
  services.forEach((service, index) => {serviceList.push(  
  <Grid container item xs={4} className={classes.contactButtonsMain} >
<Button variant="outlined" color="primary" onClick={()=>{clickHandler(service)}}>
  
      <Paper className={classes.paper1}>
        <Grid container className={classes.contactIconAndTextGrid} >
  
          <Grid item s >
  <Typography className={classes.typography}>{index+1}. {service}</Typography>
          </Grid>
        
        </Grid>
      </Paper>
</Button>
  </Grid>)}) 
  
  return (
    <div className={classes.root}>
    <Grid container className={classes.mainGridContainer} direction="column">

{/* ImageSlide component */}
<Grid item xs={12} >
<Paper className={classes.paper} >
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