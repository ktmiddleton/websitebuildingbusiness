import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Flex,
    Text,
    IconButton,
    Icon,
    Link,
    Menu,
    Button,
    MenuButton,
    MenuList,
    HStack,
    Spacer,
    Image,
    VStack,
    Heading,
    Center,
    GridItem,
    Grid,
    Box,
    Container
} from '@chakra-ui/react';

import ImageSlider from '../components/carousel';
import homepagephoto from '../assets/homepage1.jpg';

export default function Main({}) 
{
    const navigate = useNavigate();

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    const slideImages=[
        {image:"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"Website Template #1", description: "Example description for website template #1."}, 
        {image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"Website Template #2", description: "Example description for website template #2."}, 
        {image:"https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title:"Website Template #3", description:  "Example description for website template #3."}]
    const description= "For over 25 years, we've built websites for a wide range of companies. We're professional - but we're also here for you. \n Your needs are the most important part of this equation, so we will always put you first."
    const title= "Hi, We're Webscapes, and we build websites."
    return (
    <div>
        <Grid
        h="100vh"
        w="100vw"
        bg="brand.darkerWhite"
        templateAreas=
        {`"leftHeading rightImage"
          "carousel carousel" `}
        gridTemplateRows={'50vh 50vh'}
        gridTemplateColumns={'50vw 50vw'}
        gap='0'
        align="center"
        justify="center"
        >
            <GridItem area={'leftHeading'}>
                <Center
                    h='50vh'
                    w='50vw'
                >
                    <VStack>
                        <Heading
                        fontFamily="Raleway"
                        textAlign="center"
                        color="black"
                        p={4}
                        >
                            {title}
                        </Heading>
                        <Text
                        fontFamily="Verdana"
                        whiteSpace={"pre-line"}
                        p={4}
                        >
                            {description}
                        </Text>
                        <Button 
                        w="150px"
                        h="50px"
                        borderRadius="20px"
                        bg="black"
                        color="white"
                        _hover={{color: "brand.highlightGold"}}
                        onClick={handleNavigate("/contact")}
                        mt={4}
                        size={"large"}
                        fontSize={"x-large"}
                        fontFamily="Raleway"
                        > 
                        Learn More 
                        </Button>
                    </VStack>
                </Center>
            </GridItem>
            <GridItem area={'rightImage'}>
                <Center>
                    <Image 
                    src={homepagephoto}
                    alt="A picture of a computer on a desk."
                    h='50vh'
                    w='50vw'
                    objectFit={"cover"}
                    />
                </Center>
            </GridItem>
            <GridItem area={'carousel'} bg="brand.highlightGold">
                <Center p={2.5}>
                    <VStack>
                        <ImageSlider
                        slides={slideImages}/>
                    </VStack>
                </Center>
            </GridItem>
        </Grid>
    </div>
    )
}

