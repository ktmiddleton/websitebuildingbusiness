import React from "react";
import { Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import TeamMemberDisplay from "../components/teammemberdisplay";

export default function OurTeam(props) 
{
    return (
    <div className="classes">
        <VStack minH={"100vh"} overflowX="hidden"
        >
                <Navbar />
                <Center
                h={"80vh"}
                w={"100vw"}
                bg={"brand.darkerWhite"}
                >
                    <VStack>
                        <Heading
                        fontFamily="Raleway"
                        textAlign="center"
                        color="black"
                        >
                            Meet Our Team!
                        </Heading>
                        <Text
                        fontFamily="Verdana"
                        whiteSpace={"pre-line"}
                        >
                            Each of our members brings a unique characteristic to the table that allows us to provide the best possible service for our customers.
                        </Text>
                        <div className="cardGrid">
                            <Grid
                                m="1rem"
                                gap="2rem"
                                templateColumns='repeat(2, 1fr)'
                            >
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Michael Gulino" description="Michael works hard and brings a lot to the table."/>
                                </GridItem>
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1627161684458-a62da52b51c3?q=80&w=2649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="John Patrokz" description="John always makes an effort to help the team, no matter what."/>
                                </GridItem>
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Mary Botoz" description="Mary never quits, and is always willing to work overtime when needed."/>
                                </GridItem>
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Sean Atrox" description="Sean always makes an effort to help the team, no matter what."/>
                                </GridItem>
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Chelsea Parker" description="Chelsea is a hard worker who always contributs her fair share."/>
                                </GridItem>
                                <GridItem>
                                    <TeamMemberDisplay image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Julie Mendela" description="Julie is a hard worker who always contributes her fair share."/>
                                </GridItem>
                            </Grid>
                        </div>
                    </VStack>
                </Center>
                <Spacer/>
                <Footer />
        </VStack>
    </div>
    )
}