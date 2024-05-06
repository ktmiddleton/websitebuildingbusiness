import React from "react";
import { InputGroup, Icon, Input, Tab, TabList, Tabs, TabPanel, Wrap, Box, Flex, Grid, GridItem, HStack, VStack, Heading, Spacer, Center, Stack, Card, Image, CardBody, Text, Button, CardFooter, TabsDescendantsProvider, TabPanels, InputLeftElement } from "@chakra-ui/react";
import Navbar from "../components/navbar.js";
import Main from "../components/main.js";
import Footer from "../components/footer.js";
import HelpCard from "../components/helpcard.js";
import { FaSearch } from "react-icons/fa";
import {useState} from 'react';
import TemplateCard from "../components/templatecard.js";

export default function Portfolio(props) 
{
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (event) => setSearchTerm(event.target.value)

    const templateWebsites = [
    {
        "title": "Robb Owen",
        "description": "Beautiful website, focuses on emphasizing the functionality with good design.",
        "image": "https://i.imgur.com/X5ct2Xg.png",
        "link": "https://robbowen.digital/"
    }, 
    {
        "title": "Brittany Chiang",
        "description": "Simplistic website, with some design focus. Perfect for newcomers.",
        "image": "https://i.imgur.com/frUwZ1n.png",
        "link": "https://brittanychiang.com/"
    },
    {
        "title": "Zach Jordan",
        "description": "As simple as it gets, very bare bones.",
        "image": "https://i.imgur.com/rxQxyxg.png",
        "link": "https://www.zachjordan.io/"
    },
    ]

    return (
    <div className="portfolio">
        <VStack minH={"100vh"} overflowX="hidden" align="baseline">
            <Navbar />
            <VStack w="100vw" h="auto" align="baseline">
                <Heading
                fontFamily="Raleway"
                textAlign="center"
                color="black"
                mt={"16"}
                >
                    Portfolio
                </Heading>
                <Tabs isLazy size="lg" variant="enclosed" m="1rem" w="100vw">
                    <TabList>
                        <Tab textColor="black" _hover={{background: "black", textColor: "brand.highlightGold"}} _selected={{textColor:"brand.highlightGold", borderTop: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black"}}>
                            Brainstorming
                        </Tab>
                        <Tab textColor="black" _hover={{background: "black", textColor: "brand.highlightGold"}} _selected={{textColor:"brand.highlightGold", borderTop: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black"}}>
                            Example Templates
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <VStack>
                                <Heading
                                fontFamily="Raleway"
                                textAlign="center"
                                color="black"
                                my={4}
                                >
                                    Want some design ideas? See below!
                                </Heading>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/sCeiwVEjhx4?si=4nXIzuEuT0KvKOJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1807421934&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </VStack>
                        </TabPanel>
                        <TabPanel>
                            <VStack>
                                <Heading
                                fontFamily="Raleway"
                                textAlign="center"
                                color="black"
                                my={4}
                                >
                                    Explore our template catalog!
                                </Heading>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                                        <Icon as={FaSearch}/>
                                    </InputLeftElement>
                                    <Input placeholder='Search templates...' value={searchTerm} onChange={handleChange}/>
                                </InputGroup>
                                <Wrap>
                                    { templateWebsites.map((template) => 
                                    {
                                        if (template.title.toLowerCase().includes(searchTerm.toLowerCase())) 
                                        {
                                            return <TemplateCard title={template.title} description={template.description} image={template.image} link={template.link}/>
                                        }
                                        else 
                                        {
                                            return <></>
                                        }
                                    })}
                                </Wrap>
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>
            <Spacer />
            <Footer />
        </VStack>
    </div>
    )
}







