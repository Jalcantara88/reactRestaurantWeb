import React from 'react';
import Values from './elements/OurValues';
import Food from './elements/OurFood';
import Reviews from './elements/OurReviews';
import Location from './elements/OurLocation';
import ParallaxHero from './elements/ParallaxHero';
import SocialBar from './elements/SocialBar';

function Home() {
    return(
        <>
            <ParallaxHero />
            
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