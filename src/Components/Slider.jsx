import Carousel from 'react-bootstrap/Carousel';

import image2 from "../assets/Slider/image2.jpeg"
import image3 from "../assets/Slider/image3.webp"
import image4 from "../assets/Slider/image4.webp"
import image5 from "../assets/Slider/image5.webp"
import image6 from "../assets/Slider/image6.webp"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
  <img src={image2} alt="" />
      </Carousel.Item>

      <Carousel.Item>
<img src={image3} alt="" />
      </Carousel.Item>

      <Carousel.Item>
       <img src={image4} alt="" />
      </Carousel.Item>

       <Carousel.Item>
  <img src={image5} alt="" />
      </Carousel.Item>

       <Carousel.Item>
  <img src={image6} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;