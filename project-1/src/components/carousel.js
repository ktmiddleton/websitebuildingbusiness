import { Image, Center, Card, CardHeader, CardBody, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
    return (
      <Carousel infiniteLoop showIndicators={false} showStatus={false}>
        {slides.map((slide) => {
          return (
          <Center>
            <Card>
              <CardHeader>
                <Text >{slide.title}</Text>
              </CardHeader>
              <CardBody>
                <Image maxH="30vh" objectFit="cover" src={slide.image} alt="A slideshow of multiple website templates"/>
                <Text >{slide.description}</Text>
              </CardBody>
            </Card>
          </Center>
          )
          // return <Image 
          // src={slide.image} 
          // alt="A slideshow of images containing computers and websites."
          // height="100vh" 
          // width="100vw" 
          // _hover={{}}
          // objectFit={"cover"}
          // boxSize={"50vh"}
          // />;
        })}
      </Carousel>
    );
  };
  
  export default ImageSlider;