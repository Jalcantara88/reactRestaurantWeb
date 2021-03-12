import React from 'react';

function Dessert() {
    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">dessert</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col-12">
                    <h5>time</h5>
                </div>
                <div className="col-10">
                    desserts
                </div>
            </div>
        </>
    );
}

export default Dessert;