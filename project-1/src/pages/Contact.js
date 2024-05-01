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
                    <Wrap justify={"center"}>
                        <HelpCard packagePrice="$149.99" packageType="Gold" packageColor="brand.highlightGold" packageDesc="This package includes limited design and flow planning with a design expert, as well as everything included in the cobalt package."/>
                        <HelpCard packagePrice="$199.99" packageType="Platinum" packageColor="brand.darkerWhite" packageDesc="This package includes everything from gold and cobalt, along with complicated implementations of technology within the website. Ideal for use cases that require more attention."/>
                        <HelpCard packagePrice="$299.99" packageType="Diamond" packageColor="brand.primaryBlue" packageDesc="Includes everything from previous packages, as well as a full design overhaul. Designed for those looking to plan both a brand and a website as one."/>
                    </Wrap>
                </VStack>
            </Center>
            <Spacer />
            <Footer />
        </VStack>
    </div>
    )
}




