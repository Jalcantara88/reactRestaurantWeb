import React, { Component } from 'react';
import Dessert from './elements/MenuDessert';
import HappyHour from './elements/MenuHappyHour';
import Info from './elements/MenuInfo';
//import Lunch from './elements/MenuLunch';
import itemImage1 from '../../src/assets/foodImages/lunch/burger.jpg';
import OrderView from './elements/MenuViewOrder';
import { Button } from 'reactstrap';
import { LUNCH } from '../shared/lunch';
import { DINNER } from '../shared/dinner';
import { DRINKS } from '../shared/drinks';
import { HAPPYHOUR } from '../shared/happyHour';
import { DESSERT } from '../shared/dessert';

function Total() {
    return(
        <>
            <div className="row justify-content-center bg-danger py-1">
                <div className="col-3"><h2>TOTAL:</h2></div>
                <div className="col-7">
                    <Button className="bg-white">
                        <h3 className="m-0 p-0 text-dark">$ PRICE | PLACE ORDER</h3>
                    </Button>
                </div>
            </div>
        </>
    );
}

const RenderFoodItem = ({item}) => {

    return(
        <div classname="col">
            <div className="row  foodItem bg-dark p-2 mx-2 align-items-center mb-2">
                <div className="col-2 p-0 m-0">
                    <img src={itemImage1} className="foodItemImage" />
                </div>
                <div className="col-10 py-1 pr-0 pl-4">
                    <h4 className="text-white">
                         {item.name} | {item.price}
                    </h4>
                </div> 
            </div>
        </div>
    );

}

function RenderFood({food}){

    const appetizers = food.appetizers.map(item => {
        return(
            <RenderFoodItem item={item} />
        );
    })

    const entrees = food.entrees.map(item => {
        return(
            <RenderFoodItem item={item} />
        );
    })

    return(
        <>
        <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">{food.name}</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-12">
                    <h5 className="text-center">{food.time}</h5>
                </div>
            </div>
            <div className="row justify-content-center p-0">
            
                
                    <div className="col-3  bg-primary text-white rounded-top">{food.option1}</div>
                    <div className="col-7 col-md-5 col-lg-3"></div>
            </div>  
                
            <div className="row justify-content-center pb-3">
                <div className="col-10 col-md-8 col-lg-6 menu-border py-3 mb-3">
                    <div className="row justify-content-center">
                        {appetizers}
                    </div>
                </div>
        
            </div>
            <div className="row justify-content-center p-0">

                <div className="col-3 bg-primary text-white rounded-top">{food.option2}</div>
                <div className="col-7 col-md-5 col-lg-3"></div>
            
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col-10 col-md-8 col-lg-6 menu-border py-3">
                    <div className="row justify-content-center">
                        {entrees}
                    </div>
                </div>
            </div>
            </>
    )

}

function RenderFoodAlt({food}){

    const items = food.items.map(item => {
        return(
            <RenderFoodItem item={item} />
        );
    })

    return(
        <>
        <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">{food.name}</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center pb-3">
            
                <div className="col-12">
                    <h5 className="text-center">{food.time}</h5>
                </div>
                
                <div className="col-10 col-md-8 col-lg-6 py-3 mb-3">
                    <div className="row justify-content-center">
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
            total: "0.00"
        }
    }

    render() {

        
        return(
            <>
                <Info />
                <RenderFoodAlt food={HAPPYHOUR} />
                <RenderFood food={LUNCH} />
                <RenderFood food={DINNER} />
                <RenderFood food={DRINKS} />
                <RenderFoodAlt food={DESSERT} />
                <OrderView />
                <Total order={this.state} />
            </>
        );
    }
    

}

export default Menu;