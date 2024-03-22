import React from "react";
import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Button, Text, Stack, Image, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";

export default function OurWork(props) 
{
    return (
    <div className="classes">
        <Grid
        templateAreas={`"nav nav nav"
                        "main main main"
                        "footer footer footer"`}
        gridTemplateRows={{base: '150px 80vh 150px'}}
        gridTemplateColumns={{base:'.25fr 3fr 2fr'}}
        h='100vh'
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold'
        overflowX="hidden"
        >
            <GridItem area={'footer'}>
                <Footer />
            </GridItem>
            <GridItem area={'nav'}>
                <Navbar />
            </GridItem>
            <GridItem area={'main'}>
                <Grid
                templateAreas={`"faqs image1"
                                "faqs image2"`}
                gridTemplateRows={{base: '30vh 50vh'}}
                gridTemplateColumns={{base:'20vw 80vw'}}
                bg="brand.darkerWhite"
                >
                    <GridItem bg="brand.secondaryWhite" area={"faqs"}>
                    <Stack>
                        <Heading
                        fontFamily="Raleway"
                        textAlign="center"
                        color="black"
                        mt={"10"}
                        >
                            FAQs
                        </Heading>
                        <Accordion
                        
                        >
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    What software do you use to build websites?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Typically we utilize React, Django, and ChakraUI for the user interface. We are open to using other software, but be advised this will increase the amount of time development takes.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    I want a more complicated implementation, and not just a basic website. How does this work?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                You'd have to purchase one of our deluxe packages, typically, at either the diamond or the platinum level to have advanced features encapsulated.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Stack>
                    </GridItem>
                    <GridItem  area={"image1"}>
                        <Stack>
                            <Image
                            src={"https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            h={"30vh"}
                            objectFit={"cover"}
                            alt="Image depicting a tablet on a table, next to a cup of coffee and a plant."
                            />
                        </Stack>
                    </GridItem>
                    <GridItem area={"image2"}>
                        <Stack
                        align={"center"}
                        >
                            <Heading
                            fontFamily="Raleway"
                            textAlign="center"
                            color="black"
                            mt={"10"}
                            >
                                We Build Good Software.
                            </Heading>
                            <Text
                            fontFamily="Verdana"
                            whiteSpace={"pre-line"}
                            >
                                We pride ourselves on good software. We charge a flat rate fee for websites, and custom-build everything to your needs. 

                                Ready to talk to us? Click the button below to schedule an appointment.
                            </Text>
                            <Button 
                            variant='solid' 
                            color="white" 
                            bg="black" 
                            _hover={{bg:"black", color: "brand.highlightGold"}}
                            maxW={"30vw"} 
                            mt={"12"}
                            >
                                Schedule Appointment
                            </Button>
                        </Stack>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </div>
    )
}