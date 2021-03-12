import React from 'react';

function Values() {
    return(
        <>

            <div className="row">
                <div className="col-4"><div className="divider-line"></div></div>
                <div className="col-4"><h2 className="text-center">our values</h2></div>
                <div className="col-4"><div className="divider-line"></div></div>
            </div>

            <div className="row-fluid justify-content-center py-3">

                
                
                
                
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-4">
                            <div className="rounded-top bg-danger values-image">
                                image
                            </div>
                            <div className="rounded-bottom bg-warning values-detail">
                                details
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rounded-top bg-danger values-image">
                                image
                            </div>
                            <div className="rounded-bottom bg-warning values-detail">
                                details
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rounded-top bg-danger values-image">
                                image
                            </div>
                            <div className="rounded-bottom bg-warning values-detail">
                                details
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <hr />
        </>
    );
}

export default Values;