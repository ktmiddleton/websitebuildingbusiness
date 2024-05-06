import React from "react";
import { Divider, Button, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import { useNavigate } from 'react-router-dom';

export default function Home(props) 
{
    const navigate = useNavigate();

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    return (
    <div className="home">
        <VStack minH={"100vh"} overflowX="hidden"
        >
            <Navbar />
            <Main />
            <Button
            variant='solid' 
            color="white" 
            bg="black" 
            _hover={{bg:"black", color: "brand.highlightGold"}}
            maxW={"30vw"}
            mt={2}
            onClick={handleNavigate("/portfolio")}
            >
                View More Templates
            </Button>
            <Divider my={2}/>
            <Spacer/>
            <Footer contact />
        </VStack>
    </div>
    )
}