import React, { Component } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useToast } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'



export default class Navbar extends Component {
  render() {
    function ToastStatusExample() {
        const toast = useToast()
        const statuses = ['success', 'error', 'warning', 'info']
      
        return (
          <Wrap>
            {statuses.map((status, i) => (
              <WrapItem key={i}>
                <Button
                  onClick={() =>
                    toast({
                      title: `${status} toast`,
                      status: status,
                      isClosable: true,
                    })
                  }
                >
                  Show {status} toast
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        )
      }
    return (
      <>
        <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                {/* <use xlink:href="bootstrap"></use> */}
              </svg>
            </a>

            <div className="nav-elements">
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class=" fw-bolder nav-link px-3 link-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="fw-bolder nav-link px-3 link-dark">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" class="fw-bolder nav-link px-3 link-dark">
                  Food and Drinks
                </a>
              </li>
              <li>
                <a href="#" class="fw-bolder nav-link px-3 link-dark">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#" class="fw-bolder nav-link px-3 link-dark">
                  Contact
                </a>
              </li>
            </ul>
            </div>

            <div class="col-md-3 text-end">
            </div>
          </header>
        </div>
      </>
    );
  }
}
