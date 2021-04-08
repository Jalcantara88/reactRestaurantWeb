import React, { useState } from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from 'reactstrap';
import Rating from 'react-rating';
import fullStar from '../../assets/starFull.png';
import emptyStar from '../../assets/starEmpty.png';
import {FEATUREDFOOD} from '../../shared/featuredFood';
import { REVIEWS } from '../../shared/reviews';

function FeaturedFoodModal(props) {

    const topReviews = REVIEWS.slice(0,3).map((item) => {
        return(
            <div className="col-12 bg-dark rounded mb-1 py-1" style={{paddingLeft: "5px", paddingRight: "3px"}}>
                <div className="row text-white align-items-center">
                    <div className="col-2"><div className="bg-danger text-center " style={{borderRadius: "100%", height: "30px", width: "30px", paddingTop: "2px"}}>{item.rating}</div></div>
                    <div className="col ml-1" ><p className="p-0 m-0 font-italic small" style={{lineHeight: 1.3, fontSize: ".6em"}}>"{item.quote}"</p></div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle} className="rounded" centered>
                
                <ModalBody>
                    <div className="row pr-2">
                        <div className="col-8">
                            <div className="row-fluid pt-2">
                                <img src={`../foodImages/${props.selectedFeaturedFood.src}`} className="img-fluid rounded"/>

                            </div>
                            <div className="row no-gutters mt-3" >
                                <div className="col mr-1">
                                    <img src={`../foodImages/${props.selectedFeaturedFood.src}`} className="img-fluid rounded"/>
                                </div>
                                <div className="col mr-1">
                                    <img src={`../foodImages/${props.selectedFeaturedFood.src}`} className="img-fluid rounded"/>
                                </div>
                                <div className="col mr-1">
                                    <img src={`../foodImages/${props.selectedFeaturedFood.src}`} className="img-fluid rounded"/>
                                </div>
                                <div className="col">
                                    <img src={`../foodImages/${props.selectedFeaturedFood.src}`} className="img-fluid rounded"/>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="row"><h3 className="">{props.selectedFeaturedFood.name}</h3></div>
                            <div className="row border-top border-bottom border-danger"><p className="small my-1 mb-2 px-1 four-line-limit" style={{lineHeight: "1"}}>{props.selectedFeaturedFood.detail}</p></div>
                            <div className="row pt-1">
                                <div className="col-2 p-0"><p className="small" style={{lineHeight: "90%"}}>overall rating</p></div>
                                <div className="col">
                                    <Rating 
                                        emptySymbol={<img src={emptyStar} className="icon" style={{height: 20, width: 20}} />}
                                        fullSymbol={<img src={fullStar} className="icon" style={{height: 20, width: 20}} />}
                                        initialRating={4}
                                        readonly={true}
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">{topReviews}</div>
                            <div className="row justify-content-center">
                                <Button className="bg-danger px-4 py-0" href="/menu" style={{border: 0, borderRadius: 20}}>go to menu</Button>

                            </div>
                        
                        </div>
                    </div>
                    
                </ModalBody>
               
            </Modal>
        </div>
    )
}
  

function Food() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [modal, setModal] = useState(false);
    const [selectedFeaturedFood, setSelectedFood] = useState({});

    const toggle = () => setModal(!modal);
    const selectFood = (featuredFood) => setSelectedFood(featuredFood); 


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === FEATUREDFOOD.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? FEATUREDFOOD.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    

    const slides = FEATUREDFOOD.map((item) => {
        //console.log(item.one);
        console.log(selectedFeaturedFood);


        
        
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.one.src.toString()}
          >
            
                <div className="row justify-content-center px-5 g-2">
                    <div className="col-12 col-md-4 mb-2">
                        
                        <div className=" food-image" onClick={() => {selectFood(item.one); toggle();}}>
                            <img src={`../foodImages/${item.one.src}`} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.one.name}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2 " onClick={() => {selectFood(item.two); toggle();}}>
                        <div className=" food-image" style={{backgroundImage: `url(${item.one.src})`}}>
                            <img src={`../foodImages/${item.two.src}`} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.two.name}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2" onClick={() => {selectFood(item.three); toggle();}}>
                        <div className=" food-image" style={{backgroundImage: `url(${item.one.src})`}}>
                            <img src={`../foodImages/${item.three.src}`} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.three.name}
                        </div>
                    </div>
                </div>
            
            <FeaturedFoodModal isOpen={modal}  toggle={toggle} selectedFeaturedFood={selectedFeaturedFood} />
           
            
            
          </CarouselItem>
        );
      });


    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">our food</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center py-3">

                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    className="col-10 col-md-8 col-xl-6"
                    
                    >
                    
                    {slides}
                    
                    <CarouselControl className="dark" direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl className="dark" direction="next" directionText="Next" onClickHandler={next} />
                    
                    
                </Carousel>
            
                
                
                
                
                
            </div>
                <div className="col-6 mt-3 mx-auto">
                    <Button className="redGradient" href="/menu" style={{border: 0}}>GO TO MENU</Button>
                </div>
            <hr />
        </>
    );
}

export default Food;