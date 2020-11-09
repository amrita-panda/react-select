import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from  './docs/data'
import CreatableSelect from 'react-select/creatable';


const animatedComponents = makeAnimated();
const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor:'dodgerblue',
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '2px dotted black',
    color: state.isSelected ? 'red' : 'blue',
    //padding: 10,
  }),
  // control: (_, { selectProps: { width }}) => ({
  //   width: width
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // },
  menu: (provided, state) => ({
    ...provided,

    //borderBottom: '1px dotted pink',
    color: 'green',
    padding: 20,
  }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles) => ({ ...styles, ...dot('blue') }),
};

const multicustomStyle={
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

 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
 class Dropdown extends React.Component {
  state = {
    selectedOption: null,
    
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };


  handleOnChange = (newValue ,actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <>
      <h6>Single Select<p>searchable,loading</p></h6>
      <Select
        value={selectedOption}
        isClearable={true}
        isSearchable={true}
        onChange={this.handleChange}
        isLoading={false}
        isDisabled={false}
        options={options}
        
    
      />
      <h6>Animated multiselect</h6>
      <Select
         closeMenuOnSelect={false}
         components={animatedComponents}
         defaultValue={[colourOptions[4], colourOptions[5]]}
         isMulti
         options={colourOptions}
         isSearchable={true}
         onChange={this.handleChange}
      ></Select>
      <h6>custom Styles</h6>
      <Select
        options={colourOptions}
        styles={ customStyles}
       // isMulti
        isSearchable={false}
        onChange={this.handleChange}
        >
         </Select>
      <h6>colored multiselect</h6>
      <Select
        options={colourOptions}
        styles={ multicustomStyle}
        isMulti
        onChange={this.handleChange}
        isSearchable={false}
        ></Select>
         <h6>creatble options with single select</h6>
         <CreatableSelect
        isClearable
        onChange={this.handleOnChange}
        onInputChange={this.handleInputChange}
        options={colourOptions}
      />
          <h6>creatble options with multi select</h6>
         <CreatableSelect
        isClearable
        onChange={this.handleOnChange}
        onInputChange={this.handleInputChange}
        options={colourOptions}
        isMulti
      />

      </>
    );
  }
}export default Dropdown;
