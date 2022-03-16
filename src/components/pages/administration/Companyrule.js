import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Dropdown, Table, Row , Col} from 'react-bootstrap';
import ReactDom from 'react-dom';

class Companyrule extends Component {
    constructor(props) {
        super(props);
        this.state={
            mShow:false,
            error: null,
            isLoaded: false,
            items:[],
            ruleName:'',
            payrollCalculatedBy:'',
            monthlyWorkingDays:0,
            monthlyWorkingHours:0,
            dailyWorkingHours:0
        }
}
setModalShow=()=>{
    this.setState({mShow:!this.state.mShow})
}
componentDidMount(){
    
    fetch("http://api.quick-payroll.com/api/CompanyRule")
        .then(res=>res.json())
        .then((result)=> {
           
            this.setState({
                    isLoaded:true,
                    items:result

                });
               
        },
        (error)=>{
            console.log(error);
            this.setState({
                isLoaded:true,
                error
            });
        }
        
        )
}
onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }
  saveQuestion =()=>{
      let CompanyWokingRule ={
        ruleName:this.state.ruleName,
        payrollCalculatedBy:this.state.payrollCalculatedBy,
        monthlyWorkingDays:this.state.payrollCalculatedBy =='Days' ?this.state.monthlyWorkingDays:0,
        monthlyWorkingHours:this.state.payrollCalculatedBy =='Days' ?0 :this.state.monthlyWorkingHours,
        dailyWorkingHours:this.state.dailyWorkingHours
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(CompanyWokingRule)
    };

    fetch('http://api.quick-payroll.com/api/CompanyRule', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

       
    })
    .catch(error => {
        this.setState({ error: error.toString() });
        console.error('There was an error!', error);
    });

  }
    render(){
        const{error,isLoaded,items}=this.state;      
        if(error)
        {
            return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded)
        {
            return <div>Loading...</div>
        }
        else{
        return(
            <>
                <div className="page-header">
                    <div className="page-header-left">
                        <h5>Default Rule</h5>
                    </div>
                    <div className="page-header-right">
                        <div className="search-box">
                            <input type="text" placeholder="Search here" />
                        </div>
                        <button className="general-btn" onClick={() => this.setModalShow()}>+ Add Rule</button>
                    </div>
                </div>
                <div className="page-content">
                    <div className="main-table table-responsive-sm">
                        <table className="table qp-table">
                            <thead>
                                <tr>
                                    <th>Rule Name</th>
                                    <th>Payroll Calculated By</th>
                                    <th>Monthly Working Days</th>
                                    <th>Monthly Working Hours</th>
                                    <th>Daily Working Hours</th>
                                    <th>Entered By</th>
                                    <th>Entered Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {items.map((item,indx)=>
                                  
                                  <tr key={item.ruleID}>
                                  <td>{item.ruleName}</td>
                                  <td>{item.payrollCalculatedBy}</td>
                                  <td>{item.monthlyWorkingDays}</td>
                                  <td>{item.monthlyWorkingHours}</td>
                                  <td>{item.dailyWorkingHours}</td>
                                  <td>{item.enteredBy}</td>
                                  <td> {item.enteredDate}</td>
                                 </tr>
                                  )}  
                              
                            </tbody>
                        </table>
                    </div>
                </div>

                <SimpleModal
                        show={this.state.mShow}
                        onHide={() => this.setModalShow()}
                        heading={`Add Rule`}
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
                                        <label>Rule Name</label>
                                        <div className="text-box">
                                            <input type="text" name="ruleName" value={this.state.ruleName} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Payroll Calculated By</label>
                                        <div className="select-box">
                                            <select name="payrollCalculatedBy"  value={this.state.payrollCalculatedBy} onChange={this.onChange}>
                                             
                                                <option>Days</option>
                                                <option>Hourly</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>                                                                
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">

                                        {this.state.payrollCalculatedBy =='Hourly' &&
                                        <>
                                            <label>Monthly Working Hours</label>    
                                            <input type="number" name="monthlyWorkingHours" value={this.state.monthlyWorkingHours}  onChange={this.onChange}/>
                                        </>
                                        }
                                        {this.state.payrollCalculatedBy !='Hourly' &&
                                        <label>Monthy Working Days</label>
                                    }
                                        <div className="text-box">
                                        {this.state.payrollCalculatedBy =='Hourly' &&
                                            <input type="number" name="monthlyWorkingHours" value={this.state.monthlyWorkingHours}  onChange={this.onChange}/>
                                }
                                {this.state.payrollCalculatedBy !='Hourly' &&
                                <input type="number" name="monthlyWorkingDays" value={this.state.monthlyWorkingDays}  onChange={this.onChange}/>
                            }
                                        </div>
                                    </div>
                                </Col>    
                                <Col lg={6} md={12} sm={12}>
                                    <div className="input-box">
                                        <label>Daily  Working Hours</label>
                                        <div className="text-box">
                                            <input type="number" name="dailyWorkingHours" value={this.state.dailyWorkingHours} onChange={this.onChange}/>
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
}

export default Companyrule
