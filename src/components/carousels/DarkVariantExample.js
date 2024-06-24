import Carousel from 'react-bootstrap/Carousel';
import MyImage from '../../images/Figure 5_ DevOps cycle and tools.jpeg';
import TestingTools from '../../images/testingtools.png';
import RubyOnRails from '../../images/rubyonrails.jpg';
import ReactJsImage from '../../images/ReactJsImage.jpg';

function DarkVariantExample() {
  const myStyle = {
    height: 500,
    width: 400
  }
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RubyOnRails}
          alt="1st slide"
          style={myStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ReactJsImage}
          alt="2nd slide"
          style={myStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TestingTools}
          alt="3rd slide"
          style={myStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImage}
          alt="4th slide"
          style={myStyle}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
