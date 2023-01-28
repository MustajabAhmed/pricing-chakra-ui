import React from 'react'
import {Box,Text,Heading} from '@chakra-ui/react'
export function Header() {
  return (
    <Box as='section' pb='28'>
    <Box 
     px='8'
     color={'gray.50'}  
     pt='90px' pb='198px'
     bg={'purple.600'}
     textAlign={["left","left","center"]}
     >
    <Heading fontWeight='extrabold' fontSize={['3xl','3xl','5xl']}>
        Simple pricing for your business.
         </Heading>
    <Text  fontSize={['lg','lg','2xl']} fontWeight='medium' pt='4'>
        Plans that are carefully crafted to suit your business.</Text>
    </Box>
    </Box>
  );
}
