import React, { useState } from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import itemImage1 from '../../../src/assets/foodImages/lunch/burger.jpg';
  import itemImage2 from '../../../src/assets/foodImages/dinner/salmon.jpg';
  import itemImage3 from '../../../src/assets/foodImages/dinner/hamHock.jpg';

  const items = [
    {
      one: {
        name: 'item name',
        src: '../../../src/assets/valuesImage1.png',
        detail: 'details'
      },
      two: {
        name: 'item name',
        src: '../src/assets/valuesImage1.png',
        detail: 'details'
      },
      three: {
        name: 'item name',
        src: '../src/assets/valuesImage1.png',
        detail: 'details'
      }
    },
    {
        one: {
          name: 'item name',
          src: '../../src/assets/valuesImage1.png',
          detail: 'details'
        },
        two: {
          name: 'item name',
          src: '../src/assets/valuesImage1.png',
          detail: 'details'
        },
        three: {
          name: 'item name',
          src: '../src/assets/valuesImage1.png',
          detail: 'details'
        }
      },
      {
        one: {
          name: 'item name',
          src: '../../src/assets/valuesImage2.png',
          detail: 'details'
        },
        two: {
          name: 'item name',
          src: '../src/assets/valuesImage1.png',
          detail: 'details'
        },
        three: {
          name: 'item name',
          src: '../src/assets/valuesImage1.png',
          detail: 'details'
        }
      },
  ];

function Food() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        console.log(item);
        console.log(item.one.src);
        
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.one.src.toString()}
          >
            
                <div className="row justify-content-center px-5 g-2">
                    <div className="col-12 col-md-4 mb-2">
                        
                        <div className=" food-image" >
                            <img src={itemImage1} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.one.name}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2">
                        <div className=" food-image" style={{backgroundImage: `url(${item.one.src})`}}>
                            <img src={itemImage2} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.two.name}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2">
                        <div className=" food-image" style={{backgroundImage: `url(${item.one.src})`}}>
                            <img src={itemImage3} className="img-fluid rounded-top"/>
                        </div>
                        <div className="bg-dark rounded-bottom py-2 text-white">
                            {item.three.name}
                        </div>
                    </div>
                </div>
            
           
            
            
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
                    
                    <CarouselControl className="bg-dark rounded" direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl className="bg-dark rounded" direction="next" directionText="Next" onClickHandler={next} />
                    
                    
                </Carousel>
            
                
                
                
                
                
            </div>
                <div className="col-6 mt-3 mx-auto">
                    <Button className="bg-danger b-0">GO TO MENU</Button>
                </div>
            <hr />
        </>
    );
}

export default Food;