import React, { Component } from 'react';
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





const RenderFoodItem = ({item}) => {

    

    return(
        <div classname="col-10 col-md-6 col-lg-4 p-0">
            <div className="row  foodItemBG foodItem py-0 px-2 mx-2 align-items-center mb-2">
                <div className="col-2 p-0 m-0">
                    <img src={`../foodImages/${item.image}`} className="foodItemImage" />
                </div>
                <div className="col-10 py-1 pr-1 pt-2">
                    <p style={{fontSize: "1.5em"}} className="text-white text-right pt-1">
                         {item.name}<span className="text-dark"> {item.price}</span>
                    </p>
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
                <div className="col-4"><h2 className="text-center text-dark">{food.name}</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-12">
                    <h5 className="text-center text-muted">{food.time}</h5>
                </div>
            </div>
            <div className="row justify-content-center p-0">
            
                
                    <div className="col-3 foodLabelBG text-white rounded-top">{food.option1}</div>
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

                <div className="col-3 foodLabelBG text-white rounded-top">{food.option2}</div>
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
            <div className="col-4"><h2 className="text-center text-dark">{food.name}</h2></div>
            <div className="col-4"><div className="divider-line"></div></div>
        </div>
        <div className="row justify-content-center">
        
            <div className="col-12">
                <h5 className="text-center text-muted">{food.time}</h5>
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
            total: 0.00
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