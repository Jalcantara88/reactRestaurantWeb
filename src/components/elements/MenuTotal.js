import React from 'react';
import { Button } from 'reactstrap';

function Total() {
    return(
        <>
            <div className="row justify-content-center bg-danger py-1">
                <div className="col-3"><h2>TOTAL:</h2></div>
                <div className="col-7">
                    <Button className="bg-white">
                        <h3 className="m-0 p-0 text-dark">$ PRICE | PLACE ORDER</h3>
                    </Button>
                </div>
            </div>
        </>

    );
}

export default Total;