import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Service_prop from '../Service_prop/Service_prop'
import Bounce from 'react-reveal/Bounce';
import { Text } from '@chakra-ui/react'
import S1 from '../../Img/S1.png'
import S2 from '../../Img/S2.png'
import S3 from '../../Img/S3.png'
import S4 from '../../Img/S4.png'
import S5 from '../../Img/S5.png'
import S6 from '../../Img/S6.png'
import S7 from '../../Img/S7.png'
import S8 from '../../Img/S8.png'

export default class Service extends Component {
  render() {
    return (
        <div>
        <div className='container align '>
          <h1 class='display-4 fst-italic fw-semibold pt-5'>Available</h1>
          <Text fontSize='3xl' as='i' color='orange'>
            Services
          </Text>
          <div className='row pt-4'>
            <div className='col-lg-3'>
              <Bounce bottom>
            <Service_prop img={S1} title="Rafting" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S2} title="Camping" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S3} title="Bike Rental" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S4} title="Neelkanth Darshan" price=""/>
            </Bounce>
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S5} title="Airport Dropping" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S6} title="Resorts" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S7} title="Hotel Booking" price=""/>
            </Bounce>
            </div>
            <div className='col-lg-3'>
            <Bounce bottom>
            <Service_prop img={S8} title="Char Dham Yatra" price=""/>
            </Bounce>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
