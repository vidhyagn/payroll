import React, {Component} from "react";
import SimpleModal from "../../views/SimpleModal";
import {Dropdown, Table, Row , Col} from 'react-bootstrap';

class Tax extends Component {
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
    
    fetch("http://api.quick-payroll.com/api/Tax")
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
                                    <h5>Tax</h5>
                                </div>
                                <div className="page-header-right">
                                    {/* <div className="search-box">
                                        <input type="text" placeholder="Search here" />
                                    </div>
                                    <button className="general-btn" onClick={() => this.setModalShow()}>+ Add Rule</button> */}
                                </div>
                            </div>
                            <div className="page-content">
                                <div className="main-table table-responsive-sm">
                                    <table className="table qp-table">
                                        <thead>
                                            <tr>
                                                <th>Statutory Tax Year</th>
                                                <th>Month From Amount</th>
                                                <th>Month To Amount</th>
                                                <th>Percentage</th>
                                                <th>Yearly From Amount</th>
                                                <th>Yearly To Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {items.map((item,ind)=>
                                            
                                            <tr key={item.taxTableID}>
                                                <td>{item.statutoryTaxYear}</td>
                                                <td>{item.monthFromAmount}</td>
                                                <td>{item.monthToAmount}</td>
                                                <td>{item.percentage}</td>
                                                <td>{item.yearlyFromAmount}</td>
                                                <td>{item.yearlyToAmount}</td>
                                            </tr>
                                            )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </>
                    )
            }

    }
}

export default Tax
