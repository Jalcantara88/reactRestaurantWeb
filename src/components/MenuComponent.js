/* eslint-disable */
import React, { Component, useState } from 'react';
import Dessert from './elements/MenuDessert';
import HappyHour from './elements/MenuHappyHour';
import Info from './elements/MenuInfo';
//import Lunch from './elements/MenuLunch';
import OrderView from './elements/MenuViewOrder';
import { Button } from 'reactstrap';
import { LUNCH } from '../shared/lunch';
import { DINNER } from '../shared/dinner';
import { DRINKS } from '../shared/drinks';
import { HAPPYHOUR } from '../shared/happyHour';
import { DESSERT } from '../shared/dessert';
import Total from '../components/elements/MenuTotal';
import { SIDES } from '../shared/sides';
import { ADDONS } from '../shared/addons';
import { OPTIONS } from '../shared/options';
import { DESSERTADDONS } from '../shared/dessertAddons'; 


import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import Rating from 'react-rating';
import fullStar from '../assets/starFull.png';
import emptyStar from '../assets/starEmpty.png';


function FoodItemModal(props) {
    //const [quantity, setQuantity] = useState(1);
    //const [addOns, setAddOns] = useState(0);

    var quantity = 1;
    var addOns = 0
    
    const orderItem = {
        name: props.foodItem.name,
        ingredients: [],
        sides: "",
        addOns: [],
        desertAddOns: [],
        options: [],
        itemPrice: 0
    }


    const plusAddOn = () => {
        addOns++;
        console.log(addOns);
        //const newQuantity = addOns + 1;
        //setAddOns(newQuantity);
    }

    const minusAddOn = () => {
        addOns--;
        console.log(addOns)
        //const newQuantity = addOns - 1;
        //setAddOns(newQuantity);
    }

    const reset = () => {
        quantity = 1;
        addOns = 0;
    }

    const plusOne = () => {
        quantity++;
        //const newQuantity = quantity + 1;
        //setQuantity(newQuantity);

    }

    const minusOne = () => {
        if(quantity == 1){
            return;
        }
        else{
            quantity--;
            //const newQuantity = quantity - 1;
            //setQuantity(newQuantity);
        }
    }

    const newTotal = () => {
        totalPrice = (props.foodItem.price * quantity) + (addOns * .5); 
        document.getElementById("totalItemPrice").innerHTML = totalPrice;  
        console.log(totalPrice);
    }


    const ingredients = props.foodItem.ingredients.map(item => {
        if(item.default) {
            orderItem.ingredients.push(item.name);
        }

        return(
            
            
            <FormGroup check inline>
                <Label check>
                    <Input 
                        id={item.name} 
                        type="checkbox"
                        name={item.name} 
                        defaultValue={item.default} 
                        defaultChecked={item.default}
                        onClick={
                            () => {
                                if(document.getElementById(item.name).checked) {
                                    orderItem.ingredients.push(item.name);
                                    console.log(orderItem);
                                }
                                else{
                                    orderItem.ingredients.splice(orderItem.ingredients.indexOf(item.name), 1);
                                    console.log(orderItem);
                                }

                            }
                        }
                    />
                    {item.name}
                </Label>
            </FormGroup>
            
        )
        
    })

    const sides = SIDES.map(item => {
        if(item.default) {
            orderItem.sides = item.name;
        }

        return(
            <FormGroup check inline>
                <Label check>
                    <Input 
                        id={item.name} 
                        type="radio" 
                        name="radio" 
                        defaultValue={item.default} 
                        defaultChecked={item.default}
                        onClick={
                            () => {
                                orderItem.sides = item.name;
                                console.log(orderItem);
                            }
                        }
                    />
                    {item.name}
                </Label>
            </FormGroup>
        )
    })

    const options = OPTIONS.map(item => {
        if(item.default) {
            orderItem.options = item.name;
        }

        return(
            <FormGroup check inline>
                <Label check>
                    <Input 
                        id={item.name} 
                        type="radio" 
                        name="radio1" 
                        defaultValue={item.default} 
                        defaultChecked={item.default}
                        onClick={
                            () => {
                                orderItem.options = item.name;
                                console.log(orderItem);
                            }
                        }
                    />
                    {item.name}
                </Label>
            </FormGroup>
        )
        
    })

    

    const addons = ADDONS.map(item => {
        return(
            <FormGroup check inline>
                <Label check>
                    <Input id={item} type="checkbox" name="check2" defaultValue="false"
                        onClick={() => {
                            if(document.getElementById(item).checked) {
                                
                                orderItem.addOns.push(item);
                                console.log(orderItem);
                                plusAddOn();
                            }
                            else{
                                
                                orderItem.addOns.splice(orderItem.addOns.indexOf(item), 1);
                                console.log(orderItem);
                                console.log("gibberish");
                                minusAddOn();
                            }
                    }}/>
                    {item}
                </Label>
            </FormGroup>
        )
    })

    const dessertAddons = DESSERTADDONS.map(item => {
        return(
            <FormGroup check inline>
                <Label check>
                    <Input id={item} type="checkbox" name="check2" defaultValue="false"
                    onClick={() => {
                        if(document.getElementById(item).checked) {
                            plusAddOn();
                            orderItem.dessertAddOns.push(item);
                            console.log(orderItem);
                        }
                        else{
                            minusAddOn();
                            orderItem.dessertAddOns.splice(orderItem.dessertAddOns.indexOf(item), 1);
                            console.log(orderItem);
                        }
                    }}/>
                    {item}
                </Label>
            </FormGroup>
        )
    })

    let totalPrice = (props.foodItem.price * quantity) + (addOns * .5);
    console.log(totalPrice);
    //console.log(orderItem);
    
    if(props.alt === "drink") {
        return(
            <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg" onClosed={() => {reset();}} onChange={newTotal}>
                <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                <ModalBody className="m-0 p-0">
                    <Form  id="drinkForm" onSubmit={props.addToOrder}>
                        <div className="row no-gutters p-0">
                            <div className="col-6">
                                <img src={`../foodImages/${props.foodItem.image}`} className="img-fluid" />
                                
                            </div>
                            <div className="col-6">
                                
                                    <div className="row pt-0 pl-4">
                                        
                                        
                                    
                                    </div>

                                    
                                
                            </div>
                        </div>
                
                        <div className="row pl-3 no-gutters p-0">
                            <div className="col-4">
                                    
                                <Rating 
                                    emptySymbol={<img src={emptyStar} className="icon" style={{height: 30, width: 30}} />}
                                    fullSymbol={<img src={fullStar} className="icon" style={{height: 30, width: 30}} />}
                                    initialRating={4}
                                    readonly={true}
                                />
                            </div>
                            <div className="col-3 pl-3">
                                <div className="row">
                                    <div className="col-2 bg-danger border border-danger text-white text-center"onClick={() => {minusOne()}}>-</div>
                                    <div className="col-4" className="border px-3">{quantity}</div>
                                    <div className="col-2 bg-success border border-success text-white text-center" onClick={() => {plusOne()}}>+</div>
                                </div>

                            </div>
                            <div className="col-4">
                                <Button type="submit" className="bg-danger py-1 m-0" style={{border: 0}}>${totalPrice} | ADD</Button>

                            </div>
                        </div>
                    </Form>
                    
                </ModalBody>
            
            </Modal>
        )
    }

    if(props.alt === "dessert") {
        return(
            <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg" onClosed={() => {reset();}} onChange={newTotal}>
            <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
            <ModalBody className="m-0 p-0">
                <Form onSubmit={props.addToOrder}>
                <div className="row no-gutters p-0">
                    <div className="col-6">
                        <img src={`../foodImages/${props.foodItem.image}`} className="img-fluid" />
                        
                    </div>
                    <div className="col-6">
                        
                            <div className="row pt-0 pl-4">
                                
                                <FormGroup tag="fieldset" style={{fontSize: ".6em"}} className="m-1">
                                    <legend style={{fontSize: "1em", margin: 0}}><strong>Options</strong></legend>
                                    {options}
                                
                                </FormGroup>
                                

                                <FormGroup tag="fieldset" style={{fontSize: ".6em"}} className="m-1">
                                    <legend style={{fontSize: "1em", margin: 0}}><strong>Add Ons ($0.50 each)</strong></legend>
                                    {dessertAddons}

                                </FormGroup>
                            
                            </div>

                            
                        
                        </div>
                    </div>
                    <div>
                        
                            
                        
                </div>
                    <div className="row pl-3 no-gutters p-0">
                        <div className="col-4">
                                
                            <Rating 
                                emptySymbol={<img src={emptyStar} className="icon" style={{height: 30, width: 30}} />}
                                fullSymbol={<img src={fullStar} className="icon" style={{height: 30, width: 30}} />}
                                initialRating={4}
                                readonly={true}
                            />
                        </div>
                        <div className="col-3 pl-3">
                            <div className="row">
                                <div className="col-2 bg-danger border border-danger text-white text-center"onClick={() => {minusOne()}}>-</div>
                                <div className="col-4" className="border px-3">{quantity}</div>
                                <div className="col-2 bg-success border border-success text-white text-center" onClick={() => {plusOne()}}>+</div>
                            </div>

                        </div>
                        <div className="col-4">
                            <Button type="submit" className="bg-danger py-1 m-0" style={{border: 0}}>${totalPrice} | ADD</Button>

                        </div>
                    </div>
                </Form>
                
            </ModalBody>
            
        </Modal>
        );
    }

    else {
        return(
            <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg" onClosed={() => {reset();}} onChange={newTotal}>
                <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                <ModalBody className="m-0 p-0">
                    <Form onSubmit={props.addToOrder}>
                    <div className="row no-gutters p-0">
                        <div className="col-6">
                            <img src={`../foodImages/${props.foodItem.image}`} className="img-fluid" />
                            
                        </div>
                        <div className="col-6">
                            
                                <div className="row pt-0 pl-4">
                                    
                                    <FormGroup tag="fieldset" id="ingredients" style={{fontSize: ".6em"}} className="m-1">
                                        <legend style={{fontSize: "1em", margin: 0}}><strong>Ingredients</strong></legend>
                                        {ingredients}
                                    
                                    </FormGroup>
    
    
                                    <FormGroup tag="fieldset" id="sides" style={{fontSize: ".6em"}} className="m-1">
                                        <legend style={{fontSize: "1em", margin: 0}}><strong>Sides</strong></legend>
                                        {sides}
                                        
                                    </FormGroup>
    
    
                                    <FormGroup tag="fieldset" id="addons" style={{fontSize: ".6em"}} className="m-1">
                                        <legend style={{fontSize: "1em", margin: 0}}><strong>Add Ons ($0.50 each)</strong></legend>
                                        {addons}
    
                                    </FormGroup>
                                
                                </div>
    
                                
                            
                            </div>
                        </div>
                        <div className="row pl-3 no-gutters p-0">
                            <div className="col-4">
                                    
                                <Rating 
                                    emptySymbol={<img src={emptyStar} className="icon" style={{height: 30, width: 30}} />}
                                    fullSymbol={<img src={fullStar} className="icon" style={{height: 30, width: 30}} />}
                                    initialRating={4}
                                    readonly={true}
                                />
                            </div>
                            <div className="col-3 pl-3">
                                <div className="row">
                                    <div className="col-2 bg-danger border border-danger text-white text-center"onClick={() => {minusOne()}}>-</div>
                                    <div className="col-4" className="border px-3">{quantity}</div>
                                    <div className="col-2 bg-success border border-success text-white text-center" onClick={() => {plusOne()}}>+</div>
                                </div>

                            </div>
                            <div className="col-4">
                                <Button type="submit" className="bg-danger py-1 m-0" style={{border: 0}}><span id="totalItemPrice">${totalPrice} </span> | ADD</Button>

                            </div>
                        </div>
                        
                    </Form>
                    
                </ModalBody>
                
            </Modal>
        );
    }
    
}

function RenderFoodItem(props){

    

    return(
        <div classname="col-10 col-md-6 col-lg-4 p-0" onClick={() => {props.selectFood(props.item,props.alt); props.toggleModal()}}>
            <div className="row  foodItemBG foodItem py-0 px-2 mx-2 align-items-center mb-2">
                <div className="col-2 p-0 m-0">
                    <img src={`../foodImages/${props.item.image}`} className="foodItemImage" />
                </div>
                <div className="col-10 py-1 pr-1 pt-2">
                    <p style={{fontSize: "1.5em"}} className="text-white text-right pt-1">
                         {props.item.name}<span className="text-dark"> {props.item.price}</span>
                    </p>
                </div> 
            </div>
        </div>
    );

}

function RenderFood(props){

    const appetizers = props.food.appetizers.map(item => {
        return(
            <RenderFoodItem item={item} selectFood={props.selectFood} toggleModal={props.toggleModal} alt={item.type}/>
        );
    })

    const entrees = props.food.entrees.map(item => {
        return(
            <RenderFoodItem item={item} selectFood={props.selectFood} toggleModal={props.toggleModal} alt={item.type}/>
        );
    })

    return(
        <>
        <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center text-dark">{props.food.name}</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-12">
                    <h5 className="text-center text-muted">{props.food.time}</h5>
                </div>
            </div>
            <div className="row justify-content-center p-0">
            
                
                    <div className="col-3 foodLabelBG text-white rounded-top">{props.food.option1}</div>
                    <div className="col-7 col-md-5"></div>
            </div>  
                
            <div className="row justify-content-center pb-3">
                <div className="col-10 col-md-8 menu-border py-3 mb-3">
                    <div className="row justify-content-center">
                        {appetizers}
                    </div>
                </div>
        
            </div>
            <div className="row justify-content-center p-0">

                <div className="col-3 foodLabelBG text-white rounded-top">{props.food.option2}</div>
                <div className="col-7 col-md-5"></div>
            
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col-10 col-md-8 menu-border py-3 px-0">
                    <div className="row justify-content-center p-0">
                        {entrees}
                    </div>
                </div>
            </div>
            </>
    )

}

function RenderFoodAlt(props){

    const items = props.food.items.map(item => {
        return(
            <RenderFoodItem item={item} selectFood={props.selectFood} toggleModal={props.toggleModal} subMenu={props.food.name} alt={item.type}/>
        );
    })

    return(
        <>
        <div className="row">
            <div className="col-4"><div className="divider-line"></div></div>
            <div className="col-4"><h2 className="text-center text-dark">{props.food.name}</h2></div>
            <div className="col-4"><div className="divider-line"></div></div>
        </div>
        <div className="row justify-content-center">
        
            <div className="col-12">
                <h5 className="text-center text-muted">{props.food.time}</h5>
            </div>

        </div> 
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                <div className="row justify-content-center  pb-3">
                    {items}
                </div>
            </div>        
        </div>  
        
                

            
        </>
    )

}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            total: 0.00,
            selectedFoodItem: HAPPYHOUR.items[0],
            isOpen: false,
            altModal: "",
            
        };
        
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleSelectFood = (foodItem, altModalVal) => {
        this.setState({selectedFoodItem: foodItem});
        this.setState({altModal: altModalVal});
    }

    addToOrder(event) {
        event.preventDefault();
        alert("added to order");
        console.log(event.target.elements);

        const array = [...event.target.elements];
        console.log(array);
        //console.log(event.target.elements[1]);
        //console.log(event.target.elements.ingredients);
        
        //this.state.order.push(event);
    }

    render() {
        console.log(this.state.order);
        return(
            <>
                <Info />
                <RenderFoodAlt food={HAPPYHOUR} selectFood={this.handleSelectFood} toggleModal={this.toggleModal}/>
                <RenderFood food={LUNCH} selectFood={this.handleSelectFood} toggleModal={this.toggleModal}/>
                <RenderFood food={DINNER} selectFood={this.handleSelectFood} toggleModal={this.toggleModal}/>
                <RenderFood food={DRINKS} selectFood={this.handleSelectFood} toggleModal={this.toggleModal}/>
                <RenderFoodAlt food={DESSERT} selectFood={this.handleSelectFood} toggleModal={this.toggleModal}/>
                <OrderView />
                <Total order={this.state} />
                <FoodItemModal toggle={this.toggleModal} isOpen={this.state.isOpen} foodItem={this.state.selectedFoodItem} alt={this.state.altModal} addToOrder={this.addToOrder}/>
            </>
        );
    }
    

}

export default Menu;