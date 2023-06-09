import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading, Alert } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons'

const Tour_Package = props => {
  const toast = useToast()
  const showToast =()=>{
    toast({
          title: 'Update Soon',
          description: "Coming soon! Explore our other services while we work on your request.",
          status: 'warning',
          duration: 5000,
          isClosable: true,
    })
  }
  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '250px' }}
          src={props.img}
          alt='Alternate'
        />

        <Stack>
          <CardBody>
            <Heading color="orange" size='md'>{props.title}</Heading>
            <Heading as='h6' size='xs'>
              {props.duration}
            </Heading>

            <Text as="i" py='2'>{props.text}</Text>
          </CardBody>

          <CardFooter>
            <Button onClick={showToast} variant='solid' colorScheme='orange'>
              More Info &nbsp; <ChevronRightIcon />
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}
export default Tour_Package
