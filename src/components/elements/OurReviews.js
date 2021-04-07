import React, { useState } from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

import Rating from 'react-rating';
import fullStar from '../../assets/starFull.png';
import emptyStar from '../../assets/starEmpty.png';

import { REVIEWS } from '../../shared/reviews';

  


function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === REVIEWS.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? REVIEWS.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }



    const slides = REVIEWS.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.toString()}
            
            className="location-card rounded pl-4 p-3"
          >
            <div className="row mb-4">
              <div className="col-4">
                <img className="img profileImage" src={`../profileImages/${item.image}`} />
                
              </div>
              <div className="col-8 pt-3">
                <div className="text-white">
                  <p>"{item.quote}"</p>
                  <h5>- {item.name}</h5>
                </div>
                <Rating 
                  emptySymbol={<img src={emptyStar} className="icon" style={{height: 30, width: 30}} />}
                  fullSymbol={<img src={fullStar} className="icon" style={{height: 30, width: 30}} />}
                  initialRating={item.rating}
                  readonly={true}
                />
              </div>
            </div>
           
            
            
          </CarouselItem>
        );
      });

    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">our reviews</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>

            <div className="row justify-content-center">
                
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="col-10 col-md-8 col-xl-6"
                        
                        >
                        {slides}
                        <CarouselIndicators items={REVIEWS} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        
                        
                    </Carousel>
                
                 
            </div>
            <div className="row justify-content-center pt-2 pb-4">
                <div className="col">
                    <Button style={{backgroundColor: "orange", border: 0}}>Leave a Review</Button>
                </div>
            </div>
        </>
    );
}

export default Reviews;