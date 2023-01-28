import React from 'react'
import { Box, Button, Icon, Flex, Text, Heading, Stack, HStack, List, StackProps } from '@chakra-ui/react'
import { CheckIcon } from '../icons/Icons';


export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='5' {...rest} alignItems='start'>
      <Icon as={CheckIcon} w='22px' h='22px' />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx='6' as='section'>
      <Box maxW='994px' margin='auto' mt='-40'
        borderRadius='xl' overflow={'hidden'}
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
        textAlign={'center'}
        as='section'
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box p='60px' bg='#F0EAFB'>
            <Text fontSize='xl' fontWeight='extrabold'> Premium PRO </Text>
            <Heading fontSize={["5xl", "5xl", "6xl"]} as='h3' mt='4'>$329</Heading>
            <Text color='gray.900' fontWeight={'mediam'} fontSize='large' mt='2'>billed just once</Text>
            <Button colorScheme='purple' mt='6' w={['auto', '282px', '282px']} size='lg'>Get Started</Button>
          </Box>
          <Box p={['32px', '32px', '60px']} fontSize={'lg'} bg='white'>
            <Text textAlign={'left'}>
              Access these features when you get this pricing package for your business.

              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
