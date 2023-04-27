import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import imgsrc from '../assets/krishan.png'

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={"48"} px={"16"} py={["16", "8"]} borderTop="1px solid grey">

<Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
    <VStack w={'full'} alignItems={['center', 'flex-start']}>
        <Text fontWeight={'bold'}>About US</Text>
        <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>We are the best Crypto trading App in India. We provide our services at affordable prices.</Text>

    </VStack>

    <VStack>
        <Avatar boxSize={'28'} mt={['4', '0']} src={imgsrc}/>
        <Text>Our Founder</Text>
    </VStack>
</Stack>
  </Box>
}

export default Footer