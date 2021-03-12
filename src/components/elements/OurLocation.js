import React from 'react';

function Location() {
    return(
        <>
            <div className="row-fluid justify-content-center bg-primary py-3 pb-5">
                
                    <h2 className="text-white text-center">our location</h2>
               
                <div className="col-10 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-3 mr-2">
                            <div className="row"><p className="text-left"><strong>ADDRESS:</strong>some address</p></div>
                            <div className="row"><p className="text-left"><strong>HOURS:</strong> some hours schedule</p></div>
                            <div className="row"><p className="text-left"><strong>PHONE:</strong>(123) 456 - 7890</p></div>
                            <div className="row"><p className="text-left"><strong>EMAIL:</strong>example @ website.com</p></div>
                        </div>
                        <div className="col-6 bg-white">

                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </>
    );
}

export default Location;