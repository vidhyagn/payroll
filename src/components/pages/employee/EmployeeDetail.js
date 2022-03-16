import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Tab, Nav , Col, Row } from 'react-bootstrap';
import user from '../../../assets/images/user.jpg';

class EmployeeDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        }
}

    render(){
     
        return(
            <>
                <div className="page-header">
                    <div className="page-header-left">
                        <h5>EmployeeDetail</h5>
                    </div>
                    <div className="page-header-right">
                        <button className="general-btn bordered back-ico">Back to listing</button>
                    </div>
                </div>
                <div className="page-content overflow-y p-20">
                    <Row>
                        <Col className="col" lg={12} md={12} sm={12}>
                            <div className="each-card">
                                <Row>
                                    <Col lg={6} md={12} sm={12}>
                                        <div className="user-block">
                                            <figure>
                                                <img src={user} />
                                            </figure>
                                            <div className="user-details">
                                                <h5>John Doe <button class="edit-button" title="Edit"></button></h5>
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
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <div className="user-block">                                            
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Phone</th>
                                                        <td>+91-7878787878</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Date of Birth</th>
                                                        <td>20/03/1982</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Gender</th>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Marital status</th>
                                                        <td>Married</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Address</th>
                                                        <td>Paseli Road Northmead, Uk</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col" lg={6} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>JOB INFORMATION</h5>
                                    <button class="edit-button" title="Edit"></button>
                                </div>
                                <div className="user-block">                                            
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Start Date</th>
                                                <td>13/02/2020</td>
                                            </tr>
                                            <tr>
                                                <th>Date Engaged</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Periods in Service</th>
                                                <td>92 (7 Years 9 month)</td>
                                            </tr>
                                            <tr>
                                                <th>Reports To</th>
                                                <td>User 1</td>
                                            </tr>
                                            <tr>
                                                <th>Termination Date</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Termination Reason</th>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col className="col" lg={6} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>CONTRACT INFORMATION</h5>
                                    <button class="edit-button" title="Edit"></button>
                                </div>
                                <div className="user-block">                                            
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Transaction Date</th>
                                                <td>05/10/2020</td>
                                            </tr>
                                            <tr>
                                                <th>Document Number</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Nature of Contract</th>
                                                <td>Part Time Contracts</td>
                                            </tr>
                                            <tr>
                                                <th>Contract Start Date</th>
                                                <td>05/02/2020</td>
                                            </tr>
                                            <tr>
                                                <th>Indefinite Period</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Contract Expiry Date</th>
                                                <td>14/02/2021</td>
                                            </tr>
                                            <tr>
                                                <th>Actual Contract End Date</th>
                                                <td>14/02/2021</td>
                                            </tr>
                                            <tr>
                                                <th>Contract Termination Reason</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Comment</th>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col className="col" lg={6} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>BANK INFORMATION</h5>
                                    <button class="edit-button" title="Edit"></button>
                                </div>
                                <div className="user-block">                                            
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Bank Name</th>
                                                <td>State Bank of India</td>
                                            </tr>
                                            <tr>
                                                <th>Branch Name</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Swift Code</th>
                                                <td>Part Time Contracts</td>
                                            </tr>
                                            <tr>
                                                <th>Name On Account</th>
                                                <td>John Doe</td>
                                            </tr>
                                            <tr>
                                                <th>Account Number</th>
                                                <td>202813334545</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col className="col" lg={6} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>TAX INFORMATION</h5>
                                    <button class="edit-button" title="Edit"></button>
                                </div>
                                <div className="user-block">                                            
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>NRC Number</th>
                                                <td>NC/1246/5454</td>
                                            </tr>
                                            <tr>
                                                <th>TPIN</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>SSN</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>Passport Number</th>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col className="col" lg={6} md={12} sm={12}>
                            <div className="each-card">
                                <div className="each-card-header">
                                    <h5>DYNAMIC INFORMATION</h5>
                                    <button class="edit-button" title="Edit"></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        
        )
    }
}

export default EmployeeDetail
