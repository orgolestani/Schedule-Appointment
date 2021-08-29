import "./Home.css";
import ImageSlide from '../ImageSlide/ImageSlide'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; // 

const Home = () => {

function handleOrderButton(){

}
  return (
    <main>

        <div className="main__title">

          <div className="main__greeting">

            <h1>Hello Dear User</h1>
            <p>Welcome to our business</p>
          </div>
        </div>

        <div className="imageSlideMain">
          <div></div>
          <div className='imageSlide'><ImageSlide /></div>
          <div></div>
        </div>

        <div className="main__cards">

          <div className="card">
            <i className="fa fa-repeat fa-2x " aria-hidden="true"></i>
            <div className="card_inner">
              <Link to="/chooseService">
              <Button variant="outlined" color="primary">
                Click here for order
              </Button>
              </Link>
            </div>
          </div>

          {/* <div className="card">
            <i
              className="fa fa-shield fa-2x "
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">fUSD backed in pegswap </p>
              <span className="font-bold text-title">47,606.42</span>
            </div>
          </div> */}

        </div>

        <div className="charts">
          <div></div>
          <div className="charts__right">

            <div className="charts__right__title">
              <div>
                <h1>Business details</h1>
              </div>
              {/* <i className="fa fa-bar-chart" aria-hidden="true"></i> */}
            </div>

            <div className="charts__right__cards">
              <div className="detailsCards">
                <h1>Address</h1>
                <p>icon</p>
              </div>

              <div className="detailsCards">
                <h1>Whatsapp</h1>
                <p>icon</p>
              </div>

              <div className="detailsCards">
                <h1>Call us </h1>
                <p>icon</p>
              </div>

              <div className="detailsCards">
                <h1>Instagram</h1>
                <p>icon</p>
              </div>

              <div className="detailsCards">
                <h1>Facebook</h1>
                <p>icon</p>
              </div>
              <div className="detailsCards">
                <h1>About us</h1>
                <p>icon</p>
              </div>


            </div>

          </div>
          <div></div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      
    </main>
  );
};

export default Home;