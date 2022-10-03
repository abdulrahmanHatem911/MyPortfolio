import React, { useState } from 'react'
import {
    Flex, Spacer,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import { AttachmentIcon, DragHandleIcon, HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Grid, GridItem } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

import { useDisclosure } from "@chakra-ui/react"

export default function Sidebar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()



    return (



        <ChakraProvider >







            <Box bg="#F7F6F2" w="100%" align="center" pos="sticky" top="0" h="60px" fontFamily="Monospace" boxShadow="lg" color="#916BBF ">


                <Flex>


                    <HStack p="2">

                        <Button colorScheme="messenger" size="sm" mt="2" onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>


                        <Heading size="lg" fontFamily="Monospace" >Logo</Heading>

                    </HStack>

                    <Spacer />

                    <HStack mt="1">
                        <Box
                            align="center" fontSize="20px" w="100%"
                            mx="auto"
                            borderRadius="5"

                            py="1"
                            color="#916BBF "

                        >
                            Admin Dashboard
                        </Box>
                        <Button colorScheme="messenger" size="md" px="10">Log Out</Button>
                    </HStack>

                </Flex>


            </Box>



            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>

                        <HStack
                            align="center" fontSize="20px" w="80%"
                            mx="auto"
                            borderRadius="5"
                            mt="5"
                            py="2"
                            color="#916BBF "
                            _hover={{ background: "#D5D5D5", boxShadow: "inner" }}
                        >
                            <AttachmentIcon  ml="2" />
                            <Box
                            >
                                Brands

                            </Box>

                        </HStack>

                        <HStack
                            align="center" fontSize="20px" w="80%"
                            mx="auto"
                            borderRadius="5"
                            mt="5"
                            py="2"
                            color="#916BBF "
                            _hover={{ background: "#D5D5D5", boxShadow: "inner" }}
                        >
                            <DragHandleIcon  ml="2" />
                            <Box
                            >
                                Categories

                            </Box>

                        </HStack>





                    </DrawerBody>

                </DrawerContent>
            </Drawer>











            <Box pos="fixed" left="0" w="100%" align="center" bottom="0" fontFamily="Monospace" boxShadow="dark-lg" >
                Copyright © e-commerce
            </Box>


        </ChakraProvider>






    )
}