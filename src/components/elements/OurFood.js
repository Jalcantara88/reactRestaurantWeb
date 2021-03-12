import React from 'react';
import { Button } from 'reactstrap';

function Food() {
    return(
        <>
            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">our food</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>
            <div className="row justify-content-center py-3">
                
                
                <div className="col-10">
                    <div className="row">
                        <div className="col-4">
                            <div className=" bg-primary food-border food-image">
                                image
                            </div>
                            <div className=" food-border rounded-bottom">
                                details
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-primary food-border food-image">
                                image
                            </div>
                            <div className=" food-border rounded-bottom">
                                details
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-primary food-border food-image">
                                image
                            </div>
                            <div className=" food-border rounded-bottom">
                                details
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <Button>GO TO MENU</Button>
                </div>
                
            </div>
            <hr />
        </>
    );
}

export default Food;