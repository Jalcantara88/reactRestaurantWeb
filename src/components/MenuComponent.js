/* eslint-disable */
import React, { Component, useState } from 'react';
import Dessert from './elements/MenuDessert';
import HappyHour from './elements/MenuHappyHour';
import Info from './elements/MenuInfo';
import OrderView from './elements/MenuViewOrder';
import { LUNCH } from '../shared/lunch';
import { DINNER } from '../shared/dinner';
import { DRINKS } from '../shared/drinks';
import { HAPPYHOUR } from '../shared/happyHour';
import { DESSERT } from '../shared/dessert';
import Total from '../components/elements/MenuTotal';

import FoodItemModal from './elements/FoodItemModal';

function RenderFoodItem(props){

    

    return(
        <div className="col-10 col-md-6 col-lg-4 p-0" onClick={() => {props.selectFood(props.item,props.alt); props.toggleModal()}}>
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
                <div className="col-10 col-md-8 menu-border py-3 ">
                    <div className="row justify-content-center">
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

    updateOrderTotal = () => {
        if(this.state.order[0]) {
            this.state.order.map(item => {
                this.state.total += item.totalItemPrice;
            })
        }
        document.getElementById("orderTotal").innerHTML = this.state.total;
    }

    addToOrder = (orderItem) => {
        this.state.order.push(orderItem);
        console.log(this.state.order);
        this.updateOrderTotal();
        alert("added to order");
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleSelectFood = (foodItem, altModalVal) => {
        this.setState({selectedFoodItem: foodItem});
        this.setState({altModal: altModalVal});
    }

    /*
    addToOrder(event) {
        event.preventDefault();
        alert("added to order");
        console.log(event.target.elements);

        const array = [...event.target.elements];
        console.log(array);
        //console.log(event.target.elements[1]);
        //console.log(event.target.elements.ingredients);
        
        //this.state.order.push(event);
    }*/

    render() {
        console.log(this.state.order);
        return(
            <>
                <Info />
                <RenderFoodAlt 
                    food={HAPPYHOUR} 
                    selectFood={this.handleSelectFood} 
                    toggleModal={this.toggleModal}
                />
                <RenderFood 
                    food={LUNCH} 
                    selectFood={this.handleSelectFood} 
                    toggleModal={this.toggleModal}
                />
                <RenderFood 
                    food={DINNER} 
                    selectFood={this.handleSelectFood} 
                    toggleModal={this.toggleModal}
                />
                <RenderFood 
                    food={DRINKS} 
                    selectFood={this.handleSelectFood} 
                    toggleModal={this.toggleModal}
                />
                <RenderFoodAlt 
                    food={DESSERT} 
                    selectFood={this.handleSelectFood} 
                    toggleModal={this.toggleModal}
                />
                <OrderView />
                <Total 
                    orderTotal={this.state.total} 
                />
                <FoodItemModal 
                    toggle={this.toggleModal} 
                    isOpen={this.state.isOpen} 
                    foodItem={this.state.selectedFoodItem} 
                    alt={this.state.altModal} 
                    addToOrder={this.addToOrder} 
                    addToTotalOrder={this.addToTotalOrder}
                />
            </>
        );
    }
    

}

export default Menu;