import {Card, Image, Stack, Text, Heading, CardBody} from "@chakra-ui/react";

export default function TeamMemberDisplay(props) 
{
    return (
        <Card
        direction={"row"}
        overflow='hidden'
        variant='outline'
        border="1px solid black"
        bg={"brand.white"}
        align={"center"}
        maxH={"30vh"}
        maxW={"60vw"}
        >
        <Image
            objectFit={"cover"}
            borderRadius={"full"}
            maxH={"100px"}
            maxW={"80px"}
            minH={"90px"}
            minW={"70px"}
            boxSize={"20vh"}
            src= {props.image ? props.image : 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt= {props.name}
        />

        <Stack>
            <CardBody>
            <Heading 
            size='md'
            fontFamily="Raleway"
            textAlign="center"
            fontSize={"28"}
            color="black"
            >{props.name}
            </Heading>

            <Text 
            py='2'
            fontFamily="Verdana"
            fontSize={"12"}
            whiteSpace={"pre-line"}
            maxW={"300px"}
            >
                {props.description}
            </Text>
            </CardBody>
        </Stack>
        </Card>
    )
}
