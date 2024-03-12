import {Card, Image, Stack, Text, Heading, CardBody, Button, CardFooter, ButtonGroup, Divider} from "@chakra-ui/react";

export default function helpcard(props) 
{
    return (
        <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{props.packageType}</Heading>
            <Text>
                {props.packageDesc}
            </Text>
            <Text color= {props.packageColor} fontSize='2xl'>
                {props.packageType}
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