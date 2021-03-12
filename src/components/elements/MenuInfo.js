import React from 'react';

function Info() {
    return(
        <>
            <div class="jumbotron-fluid bg-primary py-3 text-white">
                <div className="row justify-content-center">
                    <div className="col-4">
                        ADDRESS
                    </div>
                    <div className="col-4 menu-info-dividers">
                        HOURS OF OPERATION
                    </div>
                    <div className="col-4">
                        PHONE
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;