import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Dropdown, Table, Row, Col } from 'react-bootstrap';

class periodicProcessing extends Component {
    constructor(props) {
        super(props);
        this.state={
            mShow:false
        }
}
setModalShow=()=>{
    this.setState({mShow:!this.state.mShow})
}


    render(){
        return(
            <>
                <div className="page-header">
                    <div className="page-header-left">
                        <h5>Periodic Processing</h5>
                    </div>
                    <div className="page-header-right">
                        
                    </div>
                </div>
                <div className="page-content overflow-y p-20">
                    <Row>
                        <Col lg={4} md={12} sm={12}>
                            <div className="each-card">
                                <div className="card-content">
                                    <h5>MONTHLY PERIOD END PROCESS</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper malesuada vestibulum. Praesent suscipit posuere diam, a facilisis neque porttitor in. Curabitur ex nisi,</p>
                                    <div className="card-button-block">
                                        <button className="general-btn">Period End Process</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="each-card">
                                <div className="card-content">
                                    <h5>REPROCESS PAYROLL</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper malesuada vestibulum. Praesent suscipit posuere diam, a facilisis neque porttitor in. Curabitur ex nisi,</p>
                                    <div className="card-button-block">
                                        <button className="general-btn">Period End Process</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="each-card">
                                <div className="card-content">
                                    <h5>OPEN NEW PAYROLL YEAR</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper malesuada vestibulum. Praesent suscipit posuere diam, a facilisis neque porttitor in. Curabitur ex nisi,</p>
                                    <div className="card-button-block">
                                        <button className="general-btn">Period End Process</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>                
                </div>
            </>
        )
    }
}

export default periodicProcessing
