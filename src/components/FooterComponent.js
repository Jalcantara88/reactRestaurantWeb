import React from 'react';
import { Button } from 'reactstrap';

function Footer() {
    return(
        <div className="container-fluid  bg-dark py-1">
            <div className="row text-light">
                <div className="col-4">social links</div>
                <div className="col-4"><Button className="bg-danger border-0">BACK TO TOP</Button></div>
                <div className="col-4">copyright 2021</div>
            </div>
        </div>
        
    );
}

export default Footer;