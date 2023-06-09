import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Flip from 'react-reveal/Flip';
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


const Destination_prop = props => {
  return (
    <div>
      <Flip bottom>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={props.img}
            alt='Alternate'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading color="orange" size='md'>{props.destination}</Heading>
          </Stack>
        </CardBody>
      </Card>
      </Flip>
    </div>
  )
}

export default Destination_prop
