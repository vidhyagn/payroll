import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Dropdown, Table, Row } from 'react-bootstrap';
import {Link} from "react-router-dom"

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state={
            mShow:false,
            error: null,
            isLoaded: false,
            items:[]
        }
}
setModalShow=()=>{
    this.setState({mShow:!this.state.mShow})
}
componentDidMount(){
    
    fetch("http://api.quick-payroll.com/api/Employee")
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
                        <h5>Employee</h5>
                    </div>
                    <div className="page-header-right">
                        <div className="search-box">
                            <input type="text" placeholder="Search here" />
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle className="general-btn bordered">
                                More Action
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => this.setModalShow()}>Import Employee</Dropdown.Item>
                                <Dropdown.Item href="#">Export Employee</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="general-btn" onClick={()=>this.props.history.push("/add-employee")}>+ Add Employee</button>
                    </div>
                </div>
                <div className="page-content">
                    <div className="main-table table-responsive-sm">
                        <table className="table qp-table">
                            <thead>
                            <tr >
                                <th>Name</th>
                                <th>Employee Code</th>
                                <th>Gender</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {items.map((item, ind) =>
                                        <tr key={item.employeeID}>
                                            <td><Link to="/employeedetail/1">{item.firstName} {item.lastName}</Link></td>
                                            <td>{item.employeeCode}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <Link to="/pay-info">Pay info</Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            
                         

                            </tbody>
                        </table>
                    </div>
                </div>

                <SimpleModal
                        show={this.state.mShow}
                        onHide={() => this.setModalShow()}
                        heading={`Import Employee`}
                        primaryText={`Upload`}
                        secondaryText={`Cancel`}
                        primaryAction={this.saveQuestion}
                    >
                       <>

                           <div className="file-upload">
                               <input type="file" />
                               <label>Upload File</label>
                           </div>

                       </>


                    </SimpleModal>
            </>
        
        )
        }
    }
}

export default Employee
