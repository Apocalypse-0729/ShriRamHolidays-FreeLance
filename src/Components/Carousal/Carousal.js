import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import C1 from '../../Img/carousal1.png'
import C2 from '../../Img/carousal2.png'
import C3 from '../../Img/carousal3.png'
import C4 from '../../Img/carousal4.png'

export default class Carousal extends Component {
  render () {
    return (
      <div>
        <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='3'
              aria-label='Slide 4'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={C1} class='d-block w-100 ' alt='First_Slide' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>
                  Embark on an exhilarating river adventure in Rishikesh's wild
                  rapids!
                </h3>
                <p className='fst-italic fw-medium '>
                  THRILLING RAFTING EXPERIENCES IN RISHIKESH: CONQUER THE
                  UNTAMED RIVER RAPIDS!
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={C4} class='d-block w-100 ' alt='Third_Slide' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>
                Embark on a divine journey through Uttarakhand's sacred Char Dham!
                </h3>
                <p className='fst-italic fw-medium'>
                SACRED PILGRIMAGE TO UTTARAKHAND'S CHAR DHAM: A SPIRITUAL ODYSSEY AWAITS!
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={C2} class='d-block w-100 ' alt='Second_Slide' />
              <div class='carousel-caption d-none d-md-block '>
                <h3>Amazing Walking And Trekking Trails Around The World</h3>
                <p className='fst-italic fw-medium'>
                  WITNESS SOME OF THE MOST SPECTACULAR AND BREATH TAKING
                  TREKKING,WALKING AND HIKING TRAILS TUCKED AWAY IN THE VICINITY
                  OF NATURE’S ABUNDANCE. BOOK ADVENTURE TOURS AND BE PART OF AN
                  AMAZING EXPERIENCE.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={C3} class='d-block w-100 ' alt='Third_Slide' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>
                  Escape to nature's embrace with unforgettable camping
                  adventures in Rishikesh!
                </h3>
                <p className='fst-italic fw-medium'>
                  IMMERSE YOURSELF IN RISHIKESH'S BEAUTY: UNFORGETTABLE CAMPING
                  EXPERIENCES AWAIT!
                </p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    )
  }
}
