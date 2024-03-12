import {Card, Image, Stack, Text, Heading, CardBody} from "@chakra-ui/react";

export default function TeamMemberDisplay(props) 
{
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bg={"brand.secondaryWhite"}
        justify={"center"}

        >
        <Image
            objectFit={"fill"}
            borderRadius={"full"}
            maxW={{ base: '100%', sm: '200px' }}
            src= {props.image ? props.image : 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt= {props.name}
        />

        <Stack>
            <CardBody>
            <Heading 
            size='md'
            fontFamily="Raleway"
            textAlign="center"
            color="black"
            >{props.name}
            </Heading>

            <Text 
            py='2'
            fontFamily="Verdana"
            whiteSpace={"pre-line"}
            >
                {props.description}
            </Text>
            </CardBody>
        </Stack>
        </Card>
    )
}
