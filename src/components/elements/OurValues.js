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

                
                
                
                
                <div className="col-12 col-sm-10 col-md-8 col-xl-6 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-4">
                            <div className="rounded-top bg-danger values-image values-image-one pt-2">
                                <strong className="text-white rounded location-card px-2">FRESH</strong>
                            </div>
                            <div className="rounded-bottom redGradient text-white">
                                <p>
                                    food made from scratch, daily!
                                </p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="rounded-top bg-danger values-image values-image-two pt-2">
                                <strong className="text-white rounded location-card px-2">UNIQUE</strong>
                            </div>
                            <div className="rounded-bottom redGradient text-white">
                                <p>
                                    we create a new menu every week!
                                </p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="rounded-top bg-danger values-image values-image-three pt-2">
                                <strong className="text-white rounded location-card px-2">TASTY</strong>
                            </div>
                            <div className="rounded-bottom redGradient text-white">
                                <p>
                                    only the most delicious fusions!
                                </p>
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