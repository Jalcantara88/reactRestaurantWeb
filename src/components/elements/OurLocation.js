import React from 'react';
import { Parallax } from 'react-parallax';
import locationImage from '../../assets/parallaxLocation.jpg';
//import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';
import {RESTAURANTINFO} from '../../shared/restaurantInfo';




function Location() {

    const info = RESTAURANTINFO;

    const Marker = () => {
        return(
            <div className="m-0 bg-danger text-center py-1" style={{width: "40px", borderRadius: "100%"}}><p style={{marginLeft: "-2px", marginTop: "8px", marginBottom: "10px"}}>HERE!</p></div>
        );
        
    }

    return(
        <>

            <Parallax blur={0} bgImage={locationImage} bgImageAlt="parallax image" strength={200} className="parallax-location pt-5" style={{width: '100%',
                height: 350}}>
            
                <div className="col-10 col-md-8 col-xl-6 mx-auto text-white location-card rounded">
                    <div className="row justify-content-center px-0 py-3">
                        <div className="col-4 mr-2">
                            <div className="row"><p className="text-left"><strong>ADDRESS:</strong>{info.address}</p></div>
                            <div className="row"><p className="text-left"><strong>HOURS:</strong>{info.hours}</p></div>
                            <div className="row"><p className="text-left"><strong>PHONE:</strong>{info.phone}</p></div>
                            <div className="row"><p className="text-left"><strong>EMAIL:</strong>{info.email}</p></div>
                        </div>
                        <div className="col-7">
                            <div className="w-100 h-100">
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBrJTX3ZHcArGkj73A1TWzhXO3ijB09ge8" }}
                                defaultCenter={{lat: 59.955413, lng: 30.337844}}
                                defaultZoom={11}
                                >
                                    <Marker 
                                        lat={59.955413} 
                                        lng={30.337844} 
                                        
                                    />
                                    
                                </GoogleMapReact>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </Parallax>
        
        </>
    );
}

export default Location;