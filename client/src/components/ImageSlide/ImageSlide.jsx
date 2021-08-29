import React from 'react';
import { Fade } from 'react-slideshow-image/dist/react-slideshow-image.min';
import 'react-slideshow-image/dist/styles.css';

import Photo1 from '../../assets/img_nature_wide.jpg'
import Photo2 from '../../assets/img_snow_wide.jpg'
import Photo3 from '../../assets/img_mountains_wide.jpg'

import './ImageSlide.css';
const fadeImages = [
    Photo1,
    Photo2,
    Photo3
];

const ImageSlide = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} style={{width:'450px', height:'455px'}}/>
          </div>

          {/* <h2>First Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} style={{width:'450px', height:'455px'}}/>
          </div>
          {/* <h2>Second Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} style={{width:'450px', height:'455px'}}/>
          </div>
          {/* <h2>Third Slide</h2> */}
        </div>
      </Fade>
    </div>
  )
}

export default ImageSlide;
