import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
    return (
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return <Image 
          src={slide.image} 
          alt="A slideshow of images containing computers and websites."
          height="100vh" 
          width="100vw" 
          _hover={{}}
          objectFit={"cover"}
          boxSize={"50vh"}
          />;
        })}
      </Carousel>
    );
  };
  
  export default ImageSlider;