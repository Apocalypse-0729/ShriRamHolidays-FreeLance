import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Tour_Package from '../Tour_Package/Tour_Package'
import { Text } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export default class Tour extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h1 class='display-4 fst-italic fw-semibold pt-5'>Uttarakhand</h1>
          <Text fontSize='3xl' as='i' color='orange'>
            Tour Packages
          </Text>
          <div className='row pt-4'>
            <div className='col-lg-6'>
              <Fade left>
              <Tour_Package
                img='https://www.euttaranchal.com/tourism/photos/badrinath-2692843.jpg'
                duration='4 Days and 3 Nights'
                title='Badrinath Temple'
                text='Experience divine bliss at Badrinath Temple: A spiritual sojourn to the abode of Lord Vishnu, where faith meets tranquility amidst the majestic Himalayas.'
              /> </Fade>
            </div>
            <div className='col-lg-6'>
            <Fade right>
              <Tour_Package
                img='https://www.holidify.com/images/bgImages/BADRINATH.jpg'
                duration='4 Days and 3 Nights'
                title='Badrinath Temple'
                text='Experience divine bliss at Badrinath Temple: A spiritual sojourn to the abode of Lord Vishnu, where faith meets tranquility amidst the majestic Himalayas.'
              /> </Fade>
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col-lg-6'>
            <Fade left>
              <Tour_Package
                img='https://www.euttaranchal.com/tourism/photos/badrinath-2692843.jpg'
                duration='4 Days and 3 Nights'
                title='Badrinath Temple'
                text='Experience divine bliss at Badrinath Temple: A spiritual sojourn to the abode of Lord Vishnu, where faith meets tranquility amidst the majestic Himalayas.'
              /> </Fade>

            </div>
            <div className='col-lg-6'>
            <Fade right>
              <Tour_Package
                img='https://www.holidify.com/images/bgImages/BADRINATH.jpg'
                duration='4 Days and 3 Nights'
                title='Badrinath Temple'
                text='Experience divine bliss at Badrinath Temple: A spiritual sojourn to the abode of Lord Vishnu, where faith meets tranquility amidst the majestic Himalayas.'
              /> </Fade>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
