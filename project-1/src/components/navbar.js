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
    Image
} from '@chakra-ui/react';
import { ReactComponent as Logo} from '../assets/WebScapesLogo.svg';

export default function Navbar({}) 
{
    const navigate = useNavigate();

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    return (
    <div>
        <Flex
        pos="sticky"
        justify="justify"
        align="center"
        h="150px"
        w="100vw"
        bg="brand.primaryBlue"
        >
            <div className="headerlogo">
                <HStack>
                    <IconButton
                    color={"brand.secondaryWhite"}
                    as={Logo}
                    boxSize={32}
                    bg={"transparent"}
                    ml={"6"}
                    _hover={{bg: "transparent"}}
                    onClick={handleNavigate("/")}
                    />
                    <Button
                    bg={"transparent"}
                    color="white"
                    _hover={{bg: "transparent", color:"brand.highlightGold"}}
                    fontFamily="Raleway"
                    fontWeight={"Bold"}
                    onClick={handleNavigate("/team")}
                    fontSize={"x-large"}
                    ml={"6"}
                    >
                        Team
                    </Button>
                    <Button
                    bg={"transparent"}
                    color="white"
                    _hover={{bg: "transparent", color:"brand.highlightGold"}}
                    fontFamily="Raleway"
                    fontWeight={"Bold"}
                    onClick={handleNavigate("/faqs")}
                    fontSize={"x-large"}
                    >
                        FAQs
                    </Button>
                    <Button
                    bg={"transparent"}
                    color="white"
                    _hover={{bg: "transparent", color:"brand.highlightGold"}}
                    fontFamily="Raleway"
                    fontWeight={"Bold"}
                    onClick={handleNavigate("/portfolio")}
                    fontSize={"x-large"}
                    >
                        Portfolio
                    </Button>
                    <Button
                    bg={"transparent"}
                    color="white"
                    _hover={{bg: "transparent", color:"brand.highlightGold"}}
                    fontFamily="Raleway"
                    fontWeight={"Bold"}
                    onClick={handleNavigate("/services")}
                    fontSize={"x-large"}
                    >
                        Services
                    </Button>
                </HStack>
            </div>
            <Spacer/>
            <div className="headerbuttons">
                <Button 
                variant="navbar"
                onClick={handleNavigate("/contact")}
                mr={12}
                size={"large"}
                fontSize={"x-large"}
                fontFamily="Raleway"
                > Contact Us </Button>
            </div>
        </Flex>
    </div>
    )
}