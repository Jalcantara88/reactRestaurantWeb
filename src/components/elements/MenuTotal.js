import React from 'react';
import { Button } from 'reactstrap';

function Total({order}) {
    return(
        <>
            <div className="row justify-content-center redGradient py-1 align-items-center">
                <div className="col-3 col-lg-2 text-dark"><h2>TOTAL:</h2></div>
                <div className="col-7 col-lg-5">
                    <Button className="bg-white" style={{border: 0}}>
                        <h3 className="m-0 p-0 text-dark">$ {order.total} | PAY</h3>
                    </Button>
                </div>
            </div>
        </>

    );
}

export default Total;