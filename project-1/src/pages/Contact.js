import React from "react";
import { Wrap, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import HelpCard from "../components/helpcard.js";

export default function Contact(props) 
{
    return (
    <div className="classes">
        <Grid
        templateAreas={`"nav nav nav"
                        "main main main"
                        "footer footer footer"`}
        gridTemplateRows={{base: '150px 115vh 150px'}}
        gridTemplateColumns={{base:'.25fr 3fr 2fr'}}
        gap='0'
        bg='brand.darkerWhite'
        fontWeight='bold'
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
                    <Grid
                                gridTemplateAreas={`"banner"
                                                    "cards"`}
                                gridTemplateRows={"50vh, 50vh"}
                                gridTemplateColumns={"100vw"}
                            >
                                <GridItem 
                                bgImg={"https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=2742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                area="banner"
                                h={"50vh"}
                                mx={"40"}
                                >
                                    <Center>
                                        <Stack>
                                            <Heading
                                            fontFamily="Raleway"
                                            textAlign="center"
                                            color="black"
                                            mt={"16"}
                                            >
                                                Our Services
                                            </Heading>
                                            <Text
                                            fontFamily="Verdana"
                                            whiteSpace={"pre-line"}
                                            >
                                                Each of the following packages reflects our services, and describes who they are intended for.
                                            </Text>
                                        </Stack>
                                    </Center>
                                </GridItem>
                                <GridItem area="cards">
                                    <Wrap justify={"center"}>
                                        <HelpCard packagePrice="$149.99" packageType="Gold" packageColor="brand.highlightGold" packageDesc="This package includes limited design and flow planning with a design expert, as well as everything included in the cobalt package."/>
                                        <HelpCard packagePrice="$199.99" packageType="Platinum" packageColor="brand.darkerWhite" packageDesc="This package includes everything from gold and cobalt, along with complicated implementations of technology within the website. Ideal for use cases that require more attention."/>
                                        <HelpCard packagePrice="$299.99" packageType="Diamond" packageColor="brand.primaryBlue" packageDesc="Includes everything from previous packages, as well as a full design overhaul. Designed for those looking to plan both a brand and a website as one."/>
                                    </Wrap>
                                </GridItem>
                            </Grid>
                </Center>
            </GridItem>
        </Grid>
    </div>
    )
}




