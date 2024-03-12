import React from "react";
import { Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import helpCard from "../components/helpcard";

export default function Contact(props) 
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
            <Center
                h={"100vh"}
                w={"100vw"}
                bg={"brand.darkerWhite"}
                >
                    <VStack>
                        <Heading
                        fontFamily="Raleway"
                        textAlign="center"
                        color="black"
                        >
                            Our Services
                        </Heading>
                        <Text
                        fontFamily="Verdana"
                        whiteSpace={"pre-line"}
                        >
                            Each of the following packages reflects our services, and describes who they are intended for.
                        </Text>
                        <div className="helpPage">
                            <Grid
                                gridTemplateAreas={`"banner banner banner banner"
                                                    "card1 card2 card3 card4"`}
                                gridTemplateRows={"50vh, 50vh"}
                                gridTemplateColumns={"25vw, 25vw, 25vw, 25vw"}
                            >
                                <GridItem area="banner">

                                </GridItem>
                                <GridItem area="card1">
                                    <helpCard packageType="Cobalt" packageColor="black" packageDesc="This package includes basic web design elements, \n suitable for a normal website."/>
                                </GridItem>
                                <GridItem area="card2">
                                    <helpCard packageType="Gold" packageColor="brand.highlightGold" packageDesc="This package includes limited design and flow planning with a design expert, as well as everything included in the cobalt package."/>
                                </GridItem>
                                <GridItem area="card3">
                                    <helpCard packageType="Platinum" packageColor="brand.darkerWhite" packageDesc="This package includes everything from gold and cobalt, along with complicated implementations of technology within the website. Ideal for use cases that require more attention."/>
                                </GridItem>
                                <GridItem area="card4">
                                    <helpCard packageType="Diamond" packageColor="brand.primaryBlue" packageDesc="Includes everything from previous packages, as well as a full design overhaul. Designed for those looking to plan both a brand and a website as one."/>
                                </GridItem>
                            </Grid>
                        </div>
                    </VStack>
                </Center>
            </GridItem>
        </Grid>
    </div>
    )
}