import { Box, Card, Image, Stack, Text, Heading, CardBody, Button, CardFooter, ButtonGroup, Divider} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


export default function HelpCard(props) 
{
    const navigate = useNavigate();

    function handleNavigate(path) 
    {
        return () => navigate(path);
    }

    return (
        <Card 
        maxW={{base:'400px'}}
        maxH={{base:'400px'}}
        my={"10"}
        mx={"10"}
        overscrollY={"auto"}
        bg={"white"}
        boxShadow={"lg"}
        >
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md' color={"black"}>{props.packageType}</Heading>
            <Text
            maxW={"400px"}
            >
                {props.packageDesc}
            </Text>
            <Text color= {"black"} fontSize='2xl'>
                {props.packagePrice}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button 
            variant='solid' 
            color="white" 
            bg="black" 
            _hover={{bg:"black", color: "brand.highlightGold"}}
            >
                Purchase Package
            </Button>
            <Button 
            variant='solid' 
            color="black" 
            bg="transparent" 
            _hover={{bg:"transparent", color: "brand.highlightGold"}}
            onClick={handleNavigate('/contact')}
            >
                Schedule Appointment
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )
    }