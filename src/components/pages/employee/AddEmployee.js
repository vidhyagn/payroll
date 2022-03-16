import { forEach } from 'async';
import React, {Component} from 'react';
import {Tab, Nav , Col, Row } from 'react-bootstrap';
import ScrollBar from "../../views/ScrollBar";
import form from "./EmployeeFormTemplate.json";
import {API_PATH} from "../../../constants";
import EmployeeJson from "./EmployeePostJsonSchema.json";

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            mShow:false,
            values:[],
            form : form,
            formValues : {},
            jobTitles:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){

        this.getOptions('JobTitle', 'jobTitleId', 2, 'jobTitleId', 'jobTitleName');
        this.getOptions('Employee', 'reportToId', 2, 'employeeID', 'firstName');
         this.getOptions('ContractType', 'contractTypeId', 3, 'contractTypeID', 'contractName');
         this.getOptions('Bank', 'bankId', 5, 'bankID', 'bankName');
    }

    getOptions = (url, fieldName, sectionId, valueField, textField) => {

        let formJson = {...this.state.form};        
        let thisFieldArr = formJson.sections[sectionId].fields.filter(item => item.fieldName === fieldName);

        if(thisFieldArr.length > 0) {

            fetch(API_PATH+url)
            .then(res=>res.json())
            .then((result)=> {
                
                thisFieldArr[0].options = this.processOptions(result, valueField, textField);
                this.setState({
                    form : formJson
                })
                   
            },
            (error)=>{
                
            }
            
            )
        } 
    }

    processOptions = (result, valueField, textField) => {
        
        let options = result.map((entry, ind) => {
            let option = { value : entry[[valueField]], label : entry[[textField]]};
            return option;
        });

        options.unshift( { value : "", label :"Select"})

        return options;
    }

    handleChange( event, secId) {
        let fieldValue = event.target.value;
        let fieldName = event.target.name;

        this.setState({
            [fieldName] : fieldValue
        })       
        this.setFieldValues(fieldName, fieldValue, secId);

    }

    setFieldValues = (fieldName, fieldValue, secId ) => {
        let form = {...this.state.form};
        let secIndex = secId-1;      
        let fieldArr = form.sections[secIndex].fields.filter(fld => fld.fieldName === fieldName);
        let thisField = {};
        if(fieldArr.length > 0) {
            thisField = fieldArr[0];           
            thisField.value = fieldValue;
        }
        
        this.setState({
            form: form
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = {...this.state.form};   
      
        form.sections.map(section=>{
            section.fields.map(field=>{
                let formfield = EmployeeJson[[field.target]];
                if(formfield) {                   
                    formfield[field.fieldName] = field.value;                  
                }      
        })
        })
      
        this.saveEmployeeDetails();
        console.log(EmployeeJson);
       
    }
    
    saveEmployeeDetails =()=>{
        
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(EmployeeJson)
      };
  
      fetch('https://localhost:44341/api​/Employees', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();
  
          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              console.error('There was an error!', error);
          }
  
         
      })
      .catch(error => {
          this.setState({ error: error.toString() });
          console.error('There was an error!', error);
      });
  
    }


    render() {
        const{jobTitles}=this.state;       
        return (
            <>         
                <div className="page-header">
                    <div className="page-header-left">
                        <h5>Add Employee</h5>
                    </div>
                    <div className="page-header-right">
                        <button className="general-btn bordered back-ico" onClick={()=>this.props.history.push("/employee")}>Back to listing</button>
                        {/*<button className="general-btn">Save</button> */}
                    </div>
                </div>
                <div className="page-content overflow-y p-20">
                    <Row>
               
                {
                    form.sections.map(section=>{
                        return(
                            <Col lg={12} md={12} sm={12}>
                                <div className="each-card">
                                <div className="each-card-header">
                                    <h5>{section.section_Title}</h5>
                                </div>

                                <div className="form-container"></div>

                             
                                <Row>
                                {
                                    section.fields.map((inputCtrl,i)=>{
                                        return(                                           
                                           
                                     <Col lg={6} md={12} sm={12}>
                                        <div className="input-box">
                                            <label>{inputCtrl.label}</label>
                                            {(() => {
  
                                                        switch (inputCtrl.type) {
                                                            case 'select':
                                                                return (
                                                                    <div className="select-box" >
                                                                    <select name={inputCtrl.fieldName} onChange={(e) =>this.handleChange(e, section.id)} >
                                                                       {inputCtrl.options.map(option=>(
                                                                           <option key={option.value} value={option.value}>
                                                                           {option.label}
                                                                       </option>
                                                                       ))}
                                                                    </select>
                                                                </div>
                                                                )
                                                            case 'text':
                                                                return (
                                                                    <div className="text-box">
                                                                    <input type={inputCtrl.type} name={inputCtrl.fieldName} onChange={(e) =>this.handleChange(e, section.id)} />
                                                                </div>
                                                                )
                                                             case 'textarea':
                                                                return (
                                                                    <div className="text-box">
                                                                    <textarea name={inputCtrl.fieldName} onChange={(e) =>this.handleChange(e, section.id)} >
                                                                    </textarea>
                                                                </div>
                                                                )    
                                                                case 'date':
                                                                    return (
                                                                        <div className="text-box">
                                                                       <input type={inputCtrl.type} name={inputCtrl.fieldName} onChange={(e) =>this.handleChange(e, section.id)} />
                                                                    </div>
                                                                    )    
                                                                    case 'checkbox':
                                                                        return (
                                                                            <div className="checkbox-wrapper">
                                                                            <div className="checkbox">
                                                                           <input type={inputCtrl.type} name={inputCtrl.fieldName} onChange={(e) =>this.handleChange(e, section.id)} />
                                                                           <label></label>
                                                                        </div>
                                                                        </div>
                                                                        )    
                                                                    
                                                            default:
                                                                return (
                                                                <div></div>
                                                                )
                                                        }

                                                        })()}
                                        </div>
                                    </Col>
                                                
                                        )
                                    })
                                }
                                </Row>
                                 </div>
                           </Col>
                        )
                    })
                }
         

                        <Col lg={12} md={12} sm={12}>

                            
                            <div className="form-button-block">
                                <button className="general-btn grey-btn">Cancel</button>
                                <button className="general-btn" onClick={(e) => this.handleSubmit(e)}>Save</button>
                               
                            </div>
                        </Col>
                
                    </Row>
                </div>

            </>
        );
    }
}

export default AddEmployee;
