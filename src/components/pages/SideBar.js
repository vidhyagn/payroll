import React from "react"
import ScrollBar from "../views/ScrollBar";
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import Accordion from 'react-bootstrap/Accordion'
class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(

            <aside className="side-bar-menu">
                <ScrollBar autoHide autoHideTimeout={1000}>
                    <div className="side-bar-menu-inner">
                        <ul className="menu-list">
                            <li onClick={()=>this.props.history.push("/dashboard")}>
                                <nav className="menu-ico dashboard-ico">Dashboard</nav>
                            </li>
                            <li className="active" onClick={()=>this.props.history.push("/employee")}>
                                <nav className="menu-ico employee-ico">Employee</nav>
                            </li>
                            <li>
                                <Accordion className="menu-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><nav className="menu-ico payroll-ico">Payroll</nav></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="submenu">
                                                <li>
                                                    <nav onClick={()=>this.props.history.push("/payroll/earnings")}>Earning</nav>
                                                </li>
                                                <li>
                                                    <nav onClick={()=>this.props.history.push("/payroll/deduction")}>Deduction</nav>
                                                </li>
                                                <li>
                                                    <nav onClick={()=>this.props.history.push("/payroll/company-contribution")}>Company Contribution</nav>
                                                </li>
                                                <li>
                                                    <nav onClick={()=>this.props.history.push("/payroll/periodic-processing")}>Periodic Processing</nav>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion className="menu-accordion">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><nav className="menu-ico administration-ico">Administration</nav></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="submenu">
                                            <li>
                                                <nav onClick={()=>this.props.history.push("/administration/custom-fields")}>Custom Fields</nav>
                                            </li>
                                            <li>
                                                <nav onClick={()=>this.props.history.push("/administration/company-rule")}>Company Rule</nav>
                                            </li>
                                            <li>
                                                <nav onClick={()=>this.props.history.push("/administration/tax")}>Tax</nav>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </li>                         
                        </ul>
                    </div>
                </ScrollBar>
            </aside>

        )
    }
}

const mapStateToProps = state => ({

});
export default withRouter(connect(mapStateToProps, {})(SideBar));


