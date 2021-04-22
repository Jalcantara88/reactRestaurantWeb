import React, { Component } from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
}
from 'reactstrap';
import Rating from 'react-rating';
import fullStar from '../../assets/starFull.png';
import emptyStar from '../../assets/starEmpty.png';
import { SIDES } from '../../shared/sides';
import { ADDONS } from '../../shared/addons';
import { OPTIONS } from '../../shared/options';
import { BEEROPTIONS } from '../../shared/beerOptions';
import { WINEOPTIONS } from '../../shared/wineOptions';
import { DESSERTADDONS } from '../../shared/dessertAddons'; 

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
        totalItemPrice: 0,
        quantity: quantity,
    }

    const plusAddOn = () => {
        addOns++;
        console.log(addOns);
    }

    const minusAddOn = () => {
        addOns--;
        console.log(addOns)
    }

    const reset = () => {
        quantity = 1;
        addOns = 0;
    }

    const plusOne = () => {
        quantity++;
        newCount();
        newTotal();
    }

    const minusOne = () => {
        if(quantity == 1){
            return;
        }
        else{
            quantity--;
            newCount();
            newTotal();
        }
    }

    const newTotal = () => {
        totalPrice = (props.foodItem.price + (addOns * .5)) * quantity; 
        document.getElementById("totalItemPrice").innerHTML = totalPrice;  
        console.log(totalPrice);
    }

    const newCount = () => {
        document.getElementById("totalItemQuantity").innerHTML = quantity;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        orderItem.totalItemPrice = totalPrice;
        orderItem.quantity = quantity;
        props.addToOrder(orderItem); 
        props.toggle();
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

    const beerOptions = BEEROPTIONS.map(item => {
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
    const wineOptions = WINEOPTIONS.map(item => {
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
        if(props.foodItem.name === "Beer") {
            return(
                <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg md-md" onClosed={() => {reset();}} onChange={newTotal}>
                    <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                    <ModalBody className="m-0 p-0">
                        <Form  id="drinkForm" onSubmit={handleSubmit}>
                            <div className="row no-gutters p-0">
                                <div className="col-6">
                                    <img src={`../foodImages/${props.foodItem.image}`} className="img-fluid" />
                                    
                                </div>
                                <div className="col-6">
                                    
                                        <div className="row pt-0 pl-4">
                                            
                                        <FormGroup tag="fieldset" style={{fontSize: ".6em"}} className="m-1">
                                            <legend style={{fontSize: "1em", margin: 0}}><strong>Options</strong></legend>
                                            {beerOptions}
                                        
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
            )
        }

        if(props.foodItem.name === "Wine") {
            return(
                <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg md-md" onClosed={() => {reset();}} onChange={newTotal}>
                    <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                    <ModalBody className="m-0 p-0">
                        <Form  id="drinkForm" onSubmit={handleSubmit}>
                            <div className="row no-gutters p-0">
                                <div className="col-6">
                                    <img src={`../foodImages/${props.foodItem.image}`} className="img-fluid" />
                                    
                                </div>
                                <div className="col-6">
                                    
                                        <div className="row pt-0 pl-4">
                                            
                                        <FormGroup tag="fieldset" style={{fontSize: ".6em"}} className="m-1">
                                            <legend style={{fontSize: "1em", margin: 0}}><strong>Options</strong></legend>
                                            {wineOptions}
                                        
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
            )
        }

        else {
            return(
                <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg md-md" onClosed={() => {reset();}} onChange={newTotal}>
                    <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                    <ModalBody className="m-0 p-0">
                        <Form  id="drinkForm" onSubmit={handleSubmit}>
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
                                    <Button type="submit" className="bg-danger py-1 m-0" style={{border: 0}}><span id="totalItemPrice">${totalPrice} </span> | ADD</Button>

                                </div>
                            </div>
                        </Form>
                        
                    </ModalBody>
                
                </Modal>
            )
        }
    }

    if(props.alt === "dessert") {
        return(
            <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="lg md-md" onClosed={() => {reset();}} onChange={newTotal}>
            <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
            <ModalBody className="m-0 p-0">
                <Form onSubmit={handleSubmit}>
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
                            <Button type="submit" className="bg-danger py-1 m-0" style={{border: 0}}><span id="totalItemPrice">${totalPrice} </span> | ADD</Button>

                        </div>
                    </div>
                </Form>
                
            </ModalBody>
            
        </Modal>
        );
    }

    else {
        return(
            <Modal isOpen={props.isOpen} toggle={props.toggle} centered size="md" onClosed={() => {reset();}} onChange={newTotal}>
                <ModalHeader toggle={props.toggle} className="py-1 bg-danger text-white">{props.foodItem.name}</ModalHeader>
                <ModalBody className="m-0 p-0">
                    <Form onSubmit={handleSubmit}>
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
                                    <div className="col-4" className="border px-3" id="totalItemQuantity">{quantity}</div>
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

export default FoodItemModal;