import React from 'react';
import {CreateInputField} from './Dropdown';
import INPUTS from './input';
  
const MULTI_CUSTOM_STYLE={
  multiValue: (styles, { data }) => {
    console.log(data);
    return {
      ...styles,
      backgroundColor: 'cyan',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color:'black',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: 'orange',
    ':hover': {
      backgroundColor:'red',
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
    let inputConfig = INPUTS.filter(inputPropItem => inputPropItem.key === key)[0];
    console.log(key);
    console.log(value);
    inputConfig.value = value;
    this.setState({ INPUTS: INPUTS })
  };

render(){
    return(
        <>{
       INPUTS.map((inputConfig,inputKey)=>
        <div key={inputKey}>{CreateInputField(inputConfig.type,inputConfig.key,inputConfig.label,inputConfig.value,
            this.handleChange.bind(this),{
                selectMultiple:inputConfig.isMultiOptions,
                selectSearchable:inputConfig.isSearchableOptions,
                selectCreatable:inputConfig.isCreateableOptions,
                selectClearable:inputConfig.isClearableOptions,
                customStyle:MULTI_CUSTOM_STYLE
    
            },inputConfig.options,inputConfig.key)}</div>
       )
     
    }
        </>
    )
}
}
export default InputField;