import { Box, Card, Image, Stack, Text, Heading, CardBody, Button, CardFooter, ButtonGroup, Divider} from "@chakra-ui/react";

export default function helpCard(props) 
{
    return (
        <Card 
        maxW={{base:'400px'}}
        maxH={{base:'400px'}}
        my={"10"}
        mx={"10"}
        overscrollY={"auto"}
        bg={"brand.secondaryWhite"}
        >
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md' color={props.packageColor}>{props.packageType}</Heading>
            <Text
            maxW={"400px"}
            >
                {props.packageDesc}
            </Text>
            <Text color= {props.packageColor} fontSize='2xl'>
                {props.packagePrice}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Purchase Package
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Schedule Appointment
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )
    }