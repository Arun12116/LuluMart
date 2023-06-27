import { Box, Heading, CardFooter, Button, Image, Stack, CardBody, Card, Center } from '@chakra-ui/react'
import React from 'react'
import MyContext from '../Context/Context'
import { useContext } from 'react'
const Cart = () => {

    const { data, setData } = useContext(MyContext)
    const removeData = (id) => {

        const filterCart = data.filter((ele) => ele.id !== id)

        setData(filterCart)
    }

    return (
        <>
       
            <Box>
                {
                    data.map((items) => {

                        return (

                            <>
                                <Center>
                                    <Card
                                        p={10}
                                        mt={5}
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                        width={"80vw"}
                                        height={"70vh"}
                                    >
                                        <Image
                                            objectFit='cover'
                                            maxW={{ base: '100%', sm: '400px' }}
                                            src={items.image}
                                            alt='Caffe Latte'
                                        />

                                        <Stack my={20} ml={"10rem"} >
                                            <CardBody>
                                                <Heading size='md'>{items.title}</Heading>

                                            </CardBody>
                                            <CardBody>
                                                <Heading size='md'>${items.price}</Heading>

                                            </CardBody>

                                            <CardFooter>
                                                <Button variant='solid' size={"lg"} colorScheme='red' onClick={() => removeData(items.id)}>
                                                    Remove
                                                </Button>
                                            </CardFooter>
                                        </Stack>
                                    </Card>
                                </Center>
                            </>
                        )
                    })
                }



            </Box>

        </>
    )
}

export default Cart