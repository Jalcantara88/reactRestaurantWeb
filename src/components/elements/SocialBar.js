import React from 'react';

function SocialBar() {
    return(
        <div className="container-fluid social-bar p-0">
            <div className="row p-0 ">
                <div className="col"><div className="divider-line" style={{backgroundColor: 'white'}}></div></div>
                <div className="col-3" className="rounded bg-white mt-2 px-2">
                    LOGO
                </div>
                <div className="col"><div className="divider-line" style={{backgroundColor: 'white'}}></div></div>
                
            </div>

            <div className="row p-0 justify-content-center social-under">
                <div className="col-3" className="rounded bg-white mt-2 px-2">
                    Link - link
                </div>

                <div className="col-3"></div>

                <div className="col-3" className="rounded bg-white mt-2 px-2">
                    Link - link
                </div>
                
            </div>
        </div>
        
    );
}

export default SocialBar;