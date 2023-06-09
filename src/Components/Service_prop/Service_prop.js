import React, { Component } from 'react'
import {Card,CardBody,Image,Text,Divider,CardFooter,Heading,Stack,Button,ButtonGroup} from '@chakra-ui/react'

const Service_prop=(props)=> {

    return (
      <div className="container">
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={props.img}

      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading color='orange' size='md' as='cite'>{props.title}</Heading>
      <Text fontSize='sm' as='i'>
        {props.price} &nbsp; &nbsp; <i class="bi bi-telephone-fill"></i> &nbsp; for Booking : +91 7906518185
      </Text>
      <Button fontSize='sm' as='i' color="green">
      Chat with Us: &nbsp; <i class="bi bi-whatsapp"></i> &nbsp;
      </Button>
    </Stack>
  </CardBody>
</Card>
      </div>
    )
}

export default Service_prop