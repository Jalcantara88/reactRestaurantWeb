import React from 'react';

function Lunch() {
    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">lunch</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center pb-3">
            
                <div className="col-12">
                    <h5 className="text-center">time</h5>
                </div>
                <div className="col-3 bg-primary text-white rounded-top">appetizer</div>
                <div className="col-7"></div>
             
                <div className="col-10 menu-border py-3 mb-3">
                    appetizer food list
                </div>

                <div className="col-3 bg-primary text-white rounded-top">entrees</div>
                <div className="col-7"></div>
             
                <div className="col-10 menu-border py-3">
                    entree food list
                </div>
            </div>
        </>
    );
}

export default Lunch;