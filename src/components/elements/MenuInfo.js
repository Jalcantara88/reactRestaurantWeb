import React from 'react';
import {RESTAURANTINFO} from '../../shared/restaurantInfo';

function Info() {

    const info = RESTAURANTINFO;

    return(
        <>
            <div class="jumbotron-fluid bg-primary py-3 text-white menuInfo">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4 location-card">
                        {info.hours}
                    </div>
                    <div className="col-4 menu-info-dividers location-card">
                        {info.address}
                            
                        
                        
                    </div>
                    <div className="col-4 location-card">
                        {info.phone}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;