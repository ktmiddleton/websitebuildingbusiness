import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
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
} from '@chakra-ui/react';
import { ReactComponent as Logo} from '../assets/Asset1.svg';
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer({}) 
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
        <Center
        pos="sticky"
        justify="justify"
        align="center"
        h="150px"
        w="100vw"
        bg="brand.primaryBlue"
        >
            <VStack>
                <Divider />
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
    </div>
    )
}