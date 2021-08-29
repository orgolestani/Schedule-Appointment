import "./ChooseService.css";
import ImageSlide from '../../ImageSlide/ImageSlide';

const ChooseService = () => {
 
  
  return (
    <main>
      <div className="main__container">

        <div className="main__title">

          <div className="main__greeting">
            
            <h1>Hello Dear User</h1>
            <p>Welcome to our business</p>
          </div>
        </div>

          <div className="imageSlideMain">
           <div></div>
           <div className='imageSlide'><ImageSlide/></div>
           <div></div>
          </div>

        <div className="main__cards">
          
   
  
        </div>

        <div className="charts">
<div></div>
          <div className="charts__right">
            
            <div className="charts__right__title">
              <div>
                <h1>Choose a service!</h1>
              </div>
            </div>

            <div className="charts__right__cards">
            <div className="detailsCards" onClick={()=>{alert('hello')}}>
                <h1>Service 1 </h1>
                <p>50$</p>
              </div>

              <div className="detailsCards" onClick={()=>{alert('hello')}}>
              <h1>Service 2 </h1>
                <p>50$</p>
              </div>

              <div className="detailsCards" onClick={()=>{alert('hello')}}>
              <h1>Service 3 </h1>
                <p>50$</p>
              </div>

              <div className="detailsCards" onClick={()=>{alert('hello')}}>
              <h1>Service 4 </h1>
                <p>50$</p>
              </div>

              <div className="detailsCards" onClick={()=>{alert('hello')}}>
              <h1>Service 5 </h1>
                <p>50$</p>
              </div>
              <div className="detailsCards" onClick={()=>{alert('hello')}}>
              <h1>Service 6 </h1>
                <p>50$</p>
              </div>


            </div>
           
          </div>
  <div></div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default ChooseService;