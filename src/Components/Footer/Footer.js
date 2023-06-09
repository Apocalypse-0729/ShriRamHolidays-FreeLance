import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Tooltip, Button, ButtonGroup,Text, Divider } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import Drawer_info from '../Drawer_info/Drawer_info'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, Radio, RadioGroup, RadioGroupButton, Stack,Input
} from '@chakra-ui/react'
import './Footer.css'

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  return (
    <>
      <footer class='bg-light text-center text-dark'>
        {/* <!-- Grid container --> */}
        <div class='container p-4 pb-0'>
          {/* <!-- Section: Social media --> */}
          <section class='mb-4'>
            {/* <!-- Facebook --> */}
            <a
              class='facebook btn text-dark btn-floating m-1'
              href='https://www.instagram.com/shri.ramholidays/'
              role='button'
              target='_blank'
            >
              <Tooltip label="Facebook"><i class='bi bi-facebook'></i></Tooltip>
            </a>

            {/* <!-- Instagram --> */}
            <a
              class='instagram btn text-dark btn-floating m-1'
              href='https://www.instagram.com/shri.ramholidays/'
              role='button'
              target='_blank'
            >
              <Tooltip label="Instagram"><i class='bi bi-instagram'></i></Tooltip>
            </a>
            <a
              class='instagram btn text-dark btn-floating m-1'
              href='#!'
              role='button'
            >
              <Tooltip label='+91 7906518185' fontSize='md'>
                <i class='bi bi-telephone'></i>
              </Tooltip>
            </a>
            <a
              class='instagram btn text-dark btn-floating m-1'
              href='https://goo.gl/maps/1AJ1vHj3dYm45Lzi8'
              role='button'
              target='_blank'
            >
              <Tooltip label='Location' fontSize='md'>
                <i class="bi bi-geo-alt-fill"></i>
              </Tooltip>
            </a>


          </section>
          <div>
            <Button onClick={onOpen} colorScheme='orange' variant="link">
              Contact Info &nbsp; <i class="bi bi-arrow-up-right-circle-fill"></i>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}

            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader color="orange" as='u' fontSize="3xl"> Shri Ram Holidays</DrawerHeader>
                <DrawerBody color="orange.400" as='i' fontSize="sm">Unforgettable Adventures, Endless Memories...
                <br/>
                <Text fontSize="2xl" color="gray" as="b" >Mayank Haldiya 
                </Text>
                <Divider/>
                <Text fontSize="l" color="gray" >
                <i class='bi bi-telephone'></i> &nbsp;: +91 7906518185
                </Text>
                <Text fontSize="l" color="gray" >
                <i class="bi bi-geo-alt-fill"></i> &nbsp;: TTD, Rishikesh Uttarakhand.
                </Text>
                </DrawerBody>
                <Divider/>


                <DrawerFooter>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="275" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Tirumala%20Tirupati%20Devasthanamas,%20Rishkesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class='text-center p-3'
        // style='background-color: rgba(0, 0, 0, 0.2);'
        >
          © 2023 Copyright: All Rights Reserved
          <br />
          <a class='text-dark fw-semibold' href='#'>
            ShriRamHolidays.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      </>
    )
  }

export default Footer
