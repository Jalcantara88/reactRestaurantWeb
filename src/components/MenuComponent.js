import React from 'react';
import Dessert from './elements/MenuDessert';
import Dinner from './elements/MenuDinner';
import Drinks from './elements/MenuDrinks';
import HappyHour from './elements/MenuHappyHour';
import Info from './elements/MenuInfo';
import Lunch from './elements/MenuLunch';
import Total from './elements/MenuTotal';
import OrderView from './elements/MenuViewOrder';

function Menu() {
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

export default Menu;