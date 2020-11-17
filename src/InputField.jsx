import React from 'react';
import {CreateInputField} from './Dropdown';
import {INPUTS} from './input';
import { Row, Col, } from 'reactstrap';

  
const MULTI_CUSTOM_STYLE={
  multiValue: (styles, { data }) => {
    console.log(data);
    return {
      ...styles, //multiselect styles
      backgroundColor: 'lightgray',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color:'black', //multi value selse label
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: 'black',
    ':hover': {
      backgroundColor:'red', //multilebel select remove 
      color: 'white',
    },
  }),
}
class InputField extends React.Component {
    constructor(props){
        super(props)
        this.state={
            INPUTS:INPUTS,        
        }
    }



   handleChange = (key,value) => {
     console.log(value);
     let typeChange=key.split("_")[0];
     let keyChange=key.split("_")[1];
    let inputConfig = INPUTS.filter(inputPropItem => inputPropItem.key === key)[0];
    if(typeChange==='select'|| typeChange==='date'){
      let inputData = INPUTS.filter(inputPropItem => inputPropItem.type === typeChange)[0];
      if(keyChange==='showTime'){
        inputData.format=inputData.format+"hh:mm:ss aa"
      }
      inputData[keyChange]=(value===""?"MM/dd/yyyy":value); //setting the default format
    }
    inputConfig.value =value; 
    this.setState({ INPUTS: INPUTS })
  
  };

render(){
    return(
        <>
          <Row xs="1" md="2" className='m-1 p-1'>
             {
       INPUTS.map((inputConfig,inputKey)=>
        <Col key={inputKey}>{(inputConfig.type==='date'||inputConfig.type==='select') && CreateInputField(inputConfig.type,
            inputConfig.key,
            inputConfig.label,
            inputConfig.value,
            this.handleChange.bind(this),
            {
                selectMultiple:inputConfig.multi,
                selectSearchable:inputConfig.serach,
                selectCreatable:inputConfig.create,
                clearable:inputConfig.clear,
                disabled:inputConfig.disabled,
                customStyle:MULTI_CUSTOM_STYLE,
                dateFormat:inputConfig.format,
                showTimeselect:inputConfig.showTime,
               // placeholder:inputConfig.type==='date'?'Select Date':'Select',
                //input:'font-weight-bold'
    
            },inputConfig.options,inputConfig.key)
            }
       
            </Col>
       )
     
    }

        </Row>
             <Row xs="1" md="2" className='m-1 p-1' > {
            INPUTS.map((inputConfig,inputKey)=>
       <Col>{(inputConfig.type==='switch' || inputConfig.type==='text') && CreateInputField(inputConfig.type,
            inputConfig.key,
            inputConfig.label,
            inputConfig.value===""?null:inputConfig.value,
            this.handleChange.bind(this),
            {
             // placeholder:inputConfig.type==='text'?"MM/dd/yyyy hh:mm:ss aa":""
            },inputConfig.options,inputConfig.key)
          }</Col>)}</Row>
  
        </>
    )
}
}
export default InputField;