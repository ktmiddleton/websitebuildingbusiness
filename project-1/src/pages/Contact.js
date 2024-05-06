import React from "react";
import { Input, InputLeftElement, InputRightElement, InputGroup, Icon, Wrap, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar.js";
import Main from "../components/main.js";
import Footer from "../components/footer.js";
import HelpCard from "../components/helpcard.js";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdSchedule } from "react-icons/md";




export default function Contact(props) 
{
    return (
        <div className="contact">
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
                                    Reaching Us
                                </Heading>
                                <Text
                                fontFamily="Verdana"
                                whiteSpace={"pre-line"}
                                >
                                    Please fill out the following form and someone from our team will reach out to you shortly!
                                </Text>
                            </Stack>
                        </Center>
                        <InputGroup>
                            <Input placeholder='First Name' />
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder='Last Name' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                                <Icon as={FaPhoneAlt}/>
                            </InputLeftElement>
                            <Input type='tel' placeholder='Phone number' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                                <Icon as={MdEmail}/>
                            </InputLeftElement>
                            <Input placeholder='Email' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                                <Icon as={MdSchedule}/>
                            </InputLeftElement>
                            <Input placeholder='Best Time to Call' type='datetime-local' />
                        </InputGroup>
                        <Button 
                        variant='solid' 
                        color="white" 
                        bg="black" 
                        _hover={{bg:"black", color: "brand.highlightGold"}}
                        maxW={"30vw"}
                        mt={4}
                        >
                            Submit
                        </Button>
                    </VStack>
                </Center>
                <Spacer />
                <Footer />
            </VStack>
        </div>
        )
}