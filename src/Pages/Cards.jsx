import React from 'react'
import { Box, Card, Button, Heading, Text, CardBody, Image, Stack, Center, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import "./Card.css"
import MyContext from '../Context/Context'
// import { Link } from 'react-router-dom'

const Cards = () => {
    const { product, setData ,data} = useContext(MyContext)


    const addData = (items) => {

        setData([...data,items])
        alert("Add To Cart SuccesFuly")

    }

    return (
        <Flex flexWrap={"wrap"} justifyContent={"space-around"} mt={8} >

            {
                product.map((items) => {
                    return (
                        <>
                            <Box>
                                <Card maxW='lg' my={5} boxShadow='2xl' p='6' rounded='md' bg='white' textAlign={"center"}>
                                    <CardBody>
                                        <Image
                                            style={{ width: "20vw", height: "30vh", margin: "10px" }}
                                            src={items.image}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{items.category}</Heading>

                                            <Text color='blue.600' fontSize='2xl'>
                                                ${items.price}
                                            </Text>
                                        </Stack>
                                        <Center>

                                            <Button colorScheme='blue' my={2} onClick={() => { addData(items) }}>AddToCart</Button>



                                        </Center>
                                    </CardBody>


                                </Card>

                            </Box>


                        </>

                    )




                })
            }

        </Flex>
    )
}

export default Cards