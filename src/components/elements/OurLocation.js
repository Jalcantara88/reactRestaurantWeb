import React from 'react';
import { Parallax } from 'react-parallax';
import locationImage from '../../assets/parallaxLocation.jpg';


function Location() {
    return(
        <>

            <Parallax blur={0} bgImage={locationImage} bgImageAlt="parallax image" strength={200} className="parallax-location pt-5" style={{width: '100%',
                height: 350}}>
            
                <div className="col-10 mx-auto text-white location-card rounded">
                    <div className="row justify-content-center">
                        <div className="col-4 mr-2">
                            <div className="row"><p className="text-left"><strong>ADDRESS:</strong>some address</p></div>
                            <div className="row"><p className="text-left"><strong>HOURS:</strong> some hours schedule</p></div>
                            <div className="row"><p className="text-left"><strong>PHONE:</strong>(123) 456 - 7890</p></div>
                            <div className="row"><p className="text-left"><strong>EMAIL:</strong>example @ website.com</p></div>
                        </div>
                        <div className="col-6 bg-white">

                        </div>
                    </div>
                </div>

            </Parallax>
        
        </>
    );
}

export default Location;