import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Dropdown, Table, Row , Col} from 'react-bootstrap';

class Earnings extends Component {
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
                        <h5>Earnings</h5>
                    </div>
                    <div className="page-header-right">
                        <div className="search-box">
                            <input type="text" placeholder="Search here" />
                        </div>
                        <button className="general-btn" onClick={() => this.setModalShow()}>+ Add Earning</button>
                    </div>
                </div>
                <div className="page-content">
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
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <button className="edit-button" />
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
                                </tr>
                                <tr>
                                    <td>
                                        <button className="edit-button" />
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
                                </tr>
                                <tr>
                                    <td>
                                        <button className="edit-button" />
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
                                </tr>
                                <tr>
                                    <td>
                                        <button className="edit-button" />
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <SimpleModal
                        show={this.state.mShow}
                        onHide={() => this.setModalShow()}
                        heading={`Earnings`}
                        primaryText={`Save`}
                        secondaryText={`Cancel`}
                        primaryAction={this.saveQuestion}
                        size="lg"
                    >
                       <>

                        <div className="form-container">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Code</label>
                                        <div className="text-box">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Description</label>
                                        <div className="text-box">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Taxable</label>
                                        <div className="checkbox-wrapper">
                                            <div className="checkbox">
                                                <input type="checkbox" name="Period" />
                                                <label>Enable</label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Calculation Type</label>
                                        <div className="select-box">
                                            <select>
                                                <option></option>
                                                <option>Fixed</option>
                                                <option>Calculation</option>
                                                <option>input Unit</option>
                                                <option>No of Installment</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Fixed Amount</label>
                                        <div className="text-box">
                                            <input type="number" />
                                        </div>
                                    </div>
                                </Col>                                    
                            </Row>
                        </div>                          

                       </>


                    </SimpleModal>
            </>
        )
    }
}

export default Earnings
