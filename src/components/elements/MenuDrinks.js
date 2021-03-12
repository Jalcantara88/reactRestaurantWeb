import React from 'react';

function Drinks() {
    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">drinks</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col-12">
                    <h5>time</h5>
                </div>
                <div className="col-3 bg-primary text-white rounded-top">non-alcoholic</div>
                <div className="col-7"></div>
             
                <div className="col-10 menu-border py-3 mb-3">
                    non-alcoholic drink list
                </div>

                <div className="col-3 bg-primary text-white rounded-top">alcoholic</div>
                <div className="col-7"></div>
             
                <div className="col-10 menu-border py-3">
                    alcoholic drink list
                </div>
            </div>
        </>
    );
}

export default Drinks;