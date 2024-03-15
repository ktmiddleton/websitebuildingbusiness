import React from "react";
import { Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";

export default function Home(props) 
{
    return (
    <div className="classes">
        <Grid
        templateAreas={`"nav nav nav"
                        "main main main"
                        "footer footer footer"`}
        gridTemplateRows={{base: '150px 100vh 150px'}}
        gridTemplateColumns={{base:'.25fr 3fr 2fr'}}
        h='100vh'
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold'
        overflow="scroll"
        >
            <GridItem area={'footer'}>
                <Footer />
            </GridItem>
            <GridItem area={'nav'}>
                <Navbar />
            </GridItem>
            <GridItem area={'main'}>
                <Main />
            </GridItem>
        </Grid>
    </div>
    )
}