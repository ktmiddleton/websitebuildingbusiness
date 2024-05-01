import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    SimpleGrid,
    Box,
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
    Divider,
    VStack,
    Center,
    Heading,
    Stack,
} from '@chakra-ui/react';
import { ReactComponent as Logo} from '../assets/Asset1.svg';
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";





export default function Footer({contact}) 
{
    const navigate = useNavigate();
    const title= "WebScapes Design Incorporated";
    const copyright="Copyright © 2024, WebScapes Design Incorporated."

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    return (
    <div>
        <VStack w="100vw" position="sticky" bottom={0}>
            { contact ? 
                <Stack direction={{base: "column", md: "row", lg: "row"}} overflow="hidden">
                    <Box w={{base: "60vw", sm: "100vw"}} h="30vh">
                        <Image
                            minH="30vh"
                            h="auto"
                            w="100%"
                            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            objectFit="cover"
                        />
                    </Box>
                    <Box w={{base: "40vw", sm: "100vw"}} h="30vh" p={{base: 4, md: 4, lg: 4}}>
                        <VStack color="black" align="baseline" spacing={{base: 4, md: 4, lg: 4, xl:6}}>
                            <Heading
                            fontFamily="Raleway"
                            textAlign="center"
                            color="brand.black"
                            size={"xl"}
                            >
                                Contact Details
                            </Heading>
                            <HStack spacing={4}>
                                <Icon as={FaHome} color="brand.highlightGold" boxSize={"2rem"}/> 
                                <Text
                                fontFamily="Verdana"
                                whiteSpace={"pre-line"}
                                color="brand.black"
                                fontSize={"medium"}
                                >
                                    WebScapes Web Design
                                </Text>
                            </HStack>
                            <HStack spacing={4}>
                                <Icon as={FaAddressBook} color="brand.highlightGold" boxSize={"2rem"}/> 
                                <Text
                                fontFamily="Verdana"
                                whiteSpace={"pre-line"}
                                color="brand.black"
                                fontSize={"medium"}
                                >
                                    1234 N. Calvert Street
                                </Text>
                            </HStack>
                            <HStack spacing={4}>
                                <Icon as={MdEmail} color="brand.highlightGold" boxSize={"2rem"}/> 
                                <Text
                                fontFamily="Verdana"
                                whiteSpace={"pre-line"}
                                color="brand.black"
                                fontSize={"medium"}
                                >
                                    general@webscapesdesign.com
                                </Text>
                            </HStack>
                            <HStack spacing={4}>
                                <Icon as={FaPhoneAlt} color="brand.highlightGold" boxSize={"2rem"}/> 
                                <Text
                                fontFamily="Verdana"
                                whiteSpace={"pre-line"}
                                color="brand.black"
                                fontSize={"medium"}
                                >
                                    (410) 844-2357
                                </Text>
                            </HStack>
                        </VStack>
                    </Box>
                </Stack>
                :
                <></>
            }
            <Center
            justify="justify"
            align="center"
            bg="brand.primaryBlue"
            w="100vw"
            h="150px"
            >
                <VStack>
                    <HStack>
                        <IconButton as={FaTwitter} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                        <IconButton as={AiFillInstagram} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                        <IconButton as={FaFacebookSquare} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                        <IconButton as={FaLinkedin} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                        <IconButton as={FaYoutube} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                        <IconButton as={FaTiktok} bg={"transparent"} color={"brand.secondaryWhite"} _hover={{bg:"transparent", color:"brand.highlightGold"}}/>
                    </HStack>
                    <Heading
                        fontFamily="Raleway"
                        textAlign="center"
                        color="brand.secondaryWhite"
                        size={"md"}
                        >
                            {title}
                    </Heading>
                    <Text
                        fontFamily="Verdana"
                        whiteSpace={"pre-line"}
                        color="brand.secondaryWhite"
                        fontSize={"x-small"}
                        >
                            {copyright}
                    </Text>
                </VStack>
            </Center>
        </VStack>
    </div>
    )
}