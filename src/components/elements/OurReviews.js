import React, { useState, Component } from 'react';
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
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
  } from 'reactstrap';

import Rating from 'react-rating';
import fullStar from '../../assets/starFull.png';
import emptyStar from '../../assets/starEmpty.png';

import { REVIEWS } from '../../shared/reviews';

var ALLREVIEWS = REVIEWS;

class LeaveReviewModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      quote: "",
      rating: "",
      image: "person3.jpg",
      id: ""
    };
  }
 

  handleReviewSubmit = (e) => {
    
    e.preventDefault();
    this.setState({id: ALLREVIEWS.length});
    console.log(this.state);
    this.props.postReview(this.state);
    alert('thankyou for your review'); 
    this.props.toggle(); 
  }

  handeChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({[name]: value });
  }

  render() {
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="rounded" centered style={{border: 0}}>
        <ModalHeader toggle={this.props.toggle} className="py-1 text-white" style={{backgroundColor: "orange"}}>LEAVE A REVIEW</ModalHeader>
        <ModalBody>
        <Form onSubmit={this.handleReviewSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="full name here" onChange={this.handeChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="quote">Quote</Label>
          <Input type="textarea" name="quote" id="quote" onChange={this.handeChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="ratingt">Rating</Label>
          <Input type="select" name="rating" id="rating" onChange={this.handeChange} required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleFile">Picture</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            PLease upload a picture to be used with your review.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" required/>{' '}
            I agree to let my review be used on React Resturant.com
          </Label>
        </FormGroup>
        <Button type="submit" className="bg-primary" >Submit</Button>
      </Form>
        </ModalBody>
        
      </Modal>
    );
  }
}

function ReviewsModal(props) {
  const allReviews = ALLREVIEWS.map((item) => {
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
      <ModalHeader className="justify-content-center text-white bg-danger py-1" toggle={props.toggle}>ALL REVIEWS</ModalHeader>
      <ModalBody style={{height: "300px"}} className="mb-3">
        <div className="row justify-content-center">
          {allReviews}
        </div>
      </ModalBody>
      <a onClick={() => {
        props.formToggle();
      }}>
        <ModalFooter className="justify-content-center p-1 text-white" style={{border: 0, backgroundColor: "orange"}}>
          Leave a Review
        </ModalFooter>
      </a>
      
    </Modal>
    </>
  );
}
  


function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [modal, setModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    
    const formToggle = () => setFormModal(!formModal);
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

    const postReview = (review) => {
      ALLREVIEWS.push(review)
    }



    const slides = ALLREVIEWS.slice(0,3).map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}
            
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
                    <Button style={{backgroundColor: "orange", border: 0}} onClick={() => {formToggle();}}>Leave a Review</Button>
                </div>
            </div>

          <ReviewsModal isOpen={modal}  toggle={toggle} formToggle={formToggle}/>
          <LeaveReviewModal isOpen={formModal} toggle={formToggle} postReview={postReview}/>
        </>
    );
}

export default Reviews;