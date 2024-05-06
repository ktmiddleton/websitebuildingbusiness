import React from "react";
import { Wrap, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar.js";
import Main from "../components/main.js";
import Footer from "../components/footer.js";
import HelpCard from "../components/helpcard.js";

export default function Portfolio(props) 
{
    return (
    <div className="portfolio">
        <VStack minH={"100vh"} overflowX="hidden">
            <Navbar />
            <Center
            bg={"brand.darkerWhite"}
            >
                <VStack>
                    <Center>
                        <Stack>
                            <Heading
                            fontFamily="Raleway"
                            textAlign="center"
                            color="black"
                            mt={"16"}
                            >
                                Portfolio
                            </Heading>
                            <Text
                            fontFamily="Verdana"
                            whiteSpace={"pre-line"}
                            >
                                Each of these example websites will demonstrate what yours could look like! 
                            </Text>
                        </Stack>
                    </Center>
                    
                </VStack>
            </Center>
            <Spacer />
            <Footer />
        </VStack>
    </div>
    )
}







