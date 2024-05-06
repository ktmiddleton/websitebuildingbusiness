import { Link, Box, Card, Image, Stack, Text, Heading, CardBody, Button, CardFooter, ButtonGroup, Divider} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


export default function TemplateCard(props) 
{
    const navigate = useNavigate();

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    return (
        <Card 
        maxW={{base:'400px'}}
        maxH={{base:'500px'}}
        my={"10"}
        mx={"10"}
        overscrollY={"auto"}
        bg={"white"}
        boxShadow={"lg"}
        >
        <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading size='md' color={"black"}>
                    {props.title}
                </Heading>
                <Image maxH="200px" src={props.image} objectFit={"cover"}/>
                <Text
                maxW={"400px"}
                noOfLines={1}
                >
                    {props.description}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Link href={props.link} isExternal>
                <Button 
                variant='solid' 
                color="black" 
                bg="transparent" 
                _hover={{bg:"transparent", color: "brand.highlightGold"}}
                >
                    Visit Website
                </Button>
            </Link>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )
    }