import React from 'react';
import { Parallax } from 'react-parallax';
import heroImage from '../../assets/parallaxHero.jpg';
import SocialBar from './SocialBar';

function ParallaxHero() {
    return(
        <>
            

            <Parallax blur={0} bgImage={heroImage} bgImageAlt="parallax image" strength={200} className="parallax-hero" style={{width: '100%',
                    height: 200}}>
                   
                <SocialBar />
            </Parallax>
            
        </>   

    );
}

export default ParallaxHero;