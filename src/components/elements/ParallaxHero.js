import React from 'react';
import { Parallax } from 'react-parallax';
import heroImage from '../../assets/parallaxHero.jpg';
import SocialBar from './SocialBar';

function ParallaxHero() {
    return(
        <div id="top">
            

            <Parallax blur={0} bgImage={heroImage} bgImageAlt="parallax image" strength={200} className="parallax-hero" style={{width: '100%',
                    height: 200}}>
                   
                <SocialBar />
            </Parallax>
            
        </div>   

    );
}

export default ParallaxHero;