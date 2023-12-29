import ImageSlider from "./Imageslider";
import slider1 from '../assests/slider1.jpg';
import slider2 from '../assests/slider2.jpg';
import slider3 from '../assests/slider3.png';
import slider4 from '../assests/slider4.jpg';

const Imageslide1= () => {
    const slides = [
        { url: slider1, title: "slider1" },
        { url:slider2, title: "slider2" },
        { url: slider3, title: "slider3" },
        { url:slider4, title: "slider4" }
    ];
    const containerStyles = {
      width: "1400px",
      height: "70px",
      margin: "0 auto",
    };
    return (
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    );
  };
  
  export default Imageslide1;