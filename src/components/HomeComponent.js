import React from 'react';
import Values from './elements/OurValues';
import Food from './elements/OurFood';
import Reviews from './elements/OurReviews';
import Location from './elements/OurLocation';
import Parallax from './elements/ParallaxHero';
import SocialBar from './elements/SocialBar';

function Home() {
    return(
        <>
            <Parallax />
            <SocialBar />
            <div className="container-fluid px-0">
                <Values />
                <Food />
                <Reviews />
            </div>
            
            <Location />
            
        </> 

    );
}

export default Home;