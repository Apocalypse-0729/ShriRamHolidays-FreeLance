import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Destination_prop from '../Destination_prop/Destination_prop'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default class Destination extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h1 class='display-4 fst-italic fw-semibold pt-5'>Top Travel </h1>
          <Text fontSize='3xl' as='i' color='orange'>
            Destinations
          </Text>
          <div className='row pt-4'>
            <div className='col-lg-4'>
            <Destination_prop img="https://www.euttaranchal.com/tourism/photos/mussoorie-325897.jpg" destination="Mussorie"/>
            </div>
            <div className='col-lg-4'>
            <Destination_prop img="https://www.euttaranchal.com/tourism/photos/mussoorie-325897.jpg" destination="Mussorie"/>
            </div>
            <div className='col-lg-4'>
            <Destination_prop img="https://www.euttaranchal.com/tourism/photos/mussoorie-325897.jpg" destination="Mussorie"/>
            </div>
          </div>
          <div className='py-4'>
          <Button  variant='solid' colorScheme='orange'>
              View More &nbsp; <ExternalLinkIcon/>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
