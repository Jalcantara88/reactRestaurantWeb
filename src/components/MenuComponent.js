import React, { Component } from 'react';
import Dessert from './elements/MenuDessert';
import Dinner from './elements/MenuDinner';
import Drinks from './elements/MenuDrinks';
import HappyHour from './elements/MenuHappyHour';
import Info from './elements/MenuInfo';
import Lunch from './elements/MenuLunch';

import OrderView from './elements/MenuViewOrder';
import { Button } from 'reactstrap';

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

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <Info />
                <HappyHour />
                <Lunch />
                <Dinner />
                <Drinks />
                <Dessert />
                <OrderView />
                <Total />
            </>
        );
    }
    

}

export default Menu;