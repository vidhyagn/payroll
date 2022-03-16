import React, {Component} from 'react';
import {Tab, Nav , Col, Row, Dropdown, Accordion } from 'react-bootstrap';
import ScrollBar from "../../views/ScrollBar";
import user from '../../../assets/images/user.jpg';


class PayInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            mShow:false
        }
    }

    render() {
        return (
            <>

                <div className="page-header">
                    <div className="page-header-left">
                        <h5>Pay Info</h5>
                    </div>
                    <div className="page-header-right">
                        <Dropdown>
                            <Dropdown.Toggle className="general-btn bordered">
                                More Action
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Add Earnings</Dropdown.Item>
                                <Dropdown.Item href="#">Add Deductions</Dropdown.Item>
                                <Dropdown.Item href="#">Calculate</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="general-btn bordered back-ico" onClick={()=>this.props.history.push("/employee")}>Back to listing</button>
                        
                    </div>
                </div>
                <div className="page-content overflow-y p-20">
                    <Row>
                        <Col className="col" lg={5} md={12} sm={12}>
                            <div className="each-card"> 
                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <div className="basic-info">
                                            <figure>
                                                <img src={user} />
                                            </figure>
                                            <div className="basic-details">
                                                <h5>John Doe</h5>
                                                <div className="user-block">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Employee Code</th>
                                                                <td>EMP0001</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email</th>
                                                                <td>Johndoe@quickpayroll.com</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Date of Join</th>
                                                                <td>13/02/2020</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col" lg={7} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>Basic Pay </h5>
                                    <button class="edit-button"></button>
                                </div>   
                                <Row>
                                    <Col lg={6} md={12} sm={12}>
                                        <div className="user-block">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Basic Salary</th>
                                                        <td>10,000.0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Yearly Salary</th>
                                                        <td>120,000.0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Hourly Salary</th>
                                                        <td>52.0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Rule Name</th>
                                                        <td>Monthly</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Net Amonut: 10002</th>
                                                        <td>10002</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                    <div className="user-block">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Payroll Calculated By</th>
                                                        <td>Hourly</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Monthly Working Days</th>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Monthly Working Hours</th>
                                                        <td>192.0</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Daily Working Hours</th>
                                                        <td>8.0</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Accordion className="qpay-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="qpay-accordion-header">
                                            <h5>Earnings</h5>
                                            <p>Total Earnings: <span className="theme">11,000.0</span></p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="main-table table-responsive-sm">
                                            <table className="table qp-table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Code</th>
                                                        <th>Description</th>
                                                        <th>Calculation Type</th>
                                                        <th>Taxable</th>
                                                        <th>Fixed Amount</th>
                                                        <th>Rate</th>
                                                        <th>No Of Units</th>
                                                        <th>Initial Amount</th>
                                                        <th>No Of Installments</th>
                                                        <th>Calculated Amount</th>
                                                        <th>Amount (YTD)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>                
                                    </Accordion.Body>
                                </Accordion.Item>                            
                            </Accordion>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Accordion className="qpay-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="qpay-accordion-header">
                                            <h5>Deduction</h5>
                                            <p>Total Deduction: <span className="theme">11,000.0</span></p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div className="main-table table-responsive-sm">
                                            <table className="table qp-table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Code</th>
                                                        <th>Description</th>
                                                        <th>Calculation Type</th>
                                                        <th>Taxable</th>
                                                        <th>Fixed Amount</th>
                                                        <th>Rate</th>
                                                        <th>No Of Units</th>
                                                        <th>Initial Amount</th>
                                                        <th>No Of Installments</th>
                                                        <th>Calculated Amount</th>
                                                        <th>Amount (YTD)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button className="delete-button" />
                                                        </td>
                                                        <td>Basic</td>
                                                        <td>Basic Salary</td>
                                                        <td>Fixed</td>
                                                        <td>True</td>
                                                        <td>0.0</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>                            
                            </Accordion>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Accordion className="qpay-accordion">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="qpay-accordion-header">
                                            <h5>Company Contribution</h5>
                                            <p>Total ompany Contribution: <span className="theme">11,000.0</span></p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div className="main-table table-responsive-sm">
                                            <table className="table qp-table">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th>Code</th>
                                                        <th>Description</th>
                                                        <th>Rate</th>
                                                        <th>Amount (YTD)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>R1234</td>
                                                        <td>Basic</td>
                                                        <td>0.0</td>
                                                        <td>0.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>R1234</td>
                                                        <td>Basic</td>
                                                        <td>0.0</td>
                                                        <td>0.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>R1234</td>
                                                        <td>Basic</td>
                                                        <td>0.0</td>
                                                        <td>0.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>R1234</td>
                                                        <td>Basic</td>
                                                        <td>0.0</td>
                                                        <td>0.0</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>                                
                            </Accordion>
                        </Col>
                    </Row>
                </div>

            </>
        );
    }
}

export default PayInfo;
