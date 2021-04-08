import React, { useState } from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Modal,
    ModalBody
  } from 'reactstrap';

import Rating from 'react-rating';
import fullStar from '../../assets/starFull.png';
import emptyStar from '../../assets/starEmpty.png';

import { REVIEWS } from '../../shared/reviews';

function ReviewsModal(props) {
  const allReviews = REVIEWS.map((item) => {
    return(
      <div className="col-10 rounded bg-dark text-white py-2 mb-3">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid" style={{borderRadius: "100%"}} src={`../profileImages/${item.image}`} />
          </div>
          <div className="col-8">
            <div className="text-white">
              <p className="m-0 text-left">"{item.quote}"</p>
              <h5 className="m-0 mb-2 text-right">- {item.name}</h5>
            </div>
            <Rating 
              emptySymbol={<img src={emptyStar} className="icon" style={{height: 30, width: 30}} />}
              fullSymbol={<img src={fullStar} className="icon" style={{height: 30, width: 30}} />}
              initialRating={item.rating}
              readonly={true}
            />
          </div>
        </div>
      </div>
    );
  });
  return(
    <>
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="rounded" scrollable={true} centered>
      <ModalBody style={{height: "400px"}} className="mb-3">
        <div className="row justify-content-center">
          {allReviews}
        </div>
      </ModalBody>
    </Modal>
    </>
  );
}
  


function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [modal, setModal] = useState(false);
    

    const toggle = () => setModal(!modal);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === 3 - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? 3 - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }



    const slides = REVIEWS.slice(0,3).map((item) => {
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

            <div className="row justify-content-center"  onClick={() => {toggle();}}>
                
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="col-10 col-md-8 col-xl-6"
                        
                        >
                        {slides}
                        <CarouselIndicators items={REVIEWS.slice(0,3)} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        
                        
                    </Carousel>
                
                 
            </div>
            <div className="row justify-content-center pt-2 pb-4">
                <div className="col">
                    <Button style={{backgroundColor: "orange", border: 0}}>Leave a Review</Button>
                </div>
            </div>

          <ReviewsModal isOpen={modal}  toggle={toggle}/>
        </>
    );
}

export default Reviews;