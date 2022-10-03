import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import {
    Box
} from "@chakra-ui/react";

import { Stack, HStack, VStack } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import {

    Input
    , InputGroup,
    InputLeftAddon,
    InputLeftElement,

} from "@chakra-ui/react"

import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"

import { IconButton } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"




export default function Admin() {


    const breakpoints = createBreakpoints({
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
    })


    return (


        < div >

            <Grid templateColumns="repeat(2, 1fr)" gap={5} my="20" >

                <Box w="100%" h="" bg="blue" py="10">
                    pesetting industry. Lorem Ipsum has been
                    the industry's
                    standard dummy text ever since the 1500s,
                </Box>

                <Box w="100%" h="" bg="blue" py="10">
                    pesetting industry. Lorem Ipsum has been
                    the industry's
                    standard dummy text ever since the 1500s,
                </Box>
                <Box w="100%" h="" bg="blue" py="10">
                    pesetting industry. Lorem Ipsum has been
                    the industry's
                    standard dummy text ever since the 1500s,
                </Box>
                <Box w="100%" h="" bg="blue" py="10">
                    pesetting industry. Lorem Ipsum has been
                    the industry's
                    standard dummy text ever since the 1500s,
                </Box>


            </Grid>







            <Box >
                This is the tomato Box
                <Link isExternal>
                    Chakra Design system <ExternalLinkIcon mx="2px" />
                </Link>


                <Tabs align="center" defaultIndex={1} isFitted variant="solid-rounded" >
                    <TabList>
                        <Tab _selected={{ color: "white", bg: "blue" }}>Naruto</Tab>
                        <Tab>Sasuke</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Image
                                boxSize="200px"
                                fit=""
                                src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
                            />
                        </TabPanel>
                        <TabPanel>
                            <Image
                                boxSize="200px"
                                fit=""
                                src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103"
                            />
                        </TabPanel>
                    </TabPanels>

                </Tabs>


            </Box>

            <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" w="25%" />
                <Box ml="3">
                    <Text fontWeight="bold">
                        Segun Adebayo
                        <Badge ml="2" bg="green" variant="solid" colorScheme='white'>
                            New
                        </Badge>
                    </Text>
                    <Text fontSize="sm">UI Engineer</Text>
                </Box>
            </Flex>


            <Box
                bg="tomato"
                w="200px"
                m={50} p={50}
                h="15vh"
                textAlign="center"
                rounded="lg"
            >
                This is the gray Box
            </Box>


            <form>
                <HStack
                    spacing={50}
                    py="15px"
                    textAlign="center"
                    px="15"

                >

                    <Box w="50%" h="50%" isTruncated
                        bg="yellow"
                        borderRadius="md"
                        borderWidth="15px"
                        shadow="md"
                        borderColor="gray"
                    >
                        pesetting industry. Lorem Ipsum has been
                        the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of
                        type and scrambled it to make a type specimen
                        Lorem Ipsum.
                        Lorem Ipsum has
                        Lorem Ipsum has
                        pesetting industry. Lorem Ipsum has been
                        the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of
                        type and scrambled it to make a type specimen
                        Lorem Ipsum.
                        Lorem Ipsum has
                        Lorem Ipsum has
                        pesetting industry. Lorem Ipsum has been
                        the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of
                        type and scrambled it to make a type specimen
                        Lorem Ipsum.
                        Lorem Ipsum has
                        Lorem Ipsum has



                    </Box>
                    <Box w="50%" h=""
                        borderRadius="lg"
                        border="15px"

                    >
                        pesetting industry. Lorem Ipsum has been
                        the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of
                        type and scrambled it to make a type specimen
                    </Box>


                </HStack>
            </form>


            <form action="submit">
                <VStack spacing={20}>

                    <FormControl isRequired>
                        <InputGroup>

                            <Box children={

                                <IconButton
                                    color="red"
                                    fontSize="20px"
                                    icon={<SearchIcon />}

                                />

                            } >

                            </Box>


                            <Input
                                type="name"
                                placeholder="phone number"
                            />

                        </InputGroup>
                    </FormControl>

                    <FormControl
                        id="email"
                        isRequired

                    >
                        <Input type="email" w="100%" />

                    </FormControl>

                    <Center height="50px">
                        <Divider orientation="vertical" />
                    </Center>

                    <Button type="submit" bg="red" w="30%">Sin up</Button>


                </VStack>



            </form>









        </div >



    )
}