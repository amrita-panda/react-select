import React from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import DatePicker from "react-datepicker";
import './Dropdown.css';

import "react-datepicker/dist/react-datepicker.css";


// TIME/Date ---> Formats(MM-dd-yyyy(default)||dd/MM/yyyy||yyyy/MM/dd||yyyy/dd/MM||MMMM d, yyyy||)(hh:mm aa|||hh:mm:ss aa)
//                To make intially null make the value as null instead of putting as empty string.


export function CreateInputLabel(label, className, style) {
    return <label className={`${className || ''} ${style.label || ''}`}>{label}
        {style.required && <sup className='ml-1 align-middle text-danger'>*</sup>}
    </label>
}
// const ExampleCustomInput = ({ value, onClick }) => {
//    return <button className="calender-btn-customized p-2" onClick={onClick}  >
//       {value}<i className="fa fa-calendar-o ml-4 float-right mt-1 " aria-hidden="true"></i>
//     </button>
//   }

export function CreateInputField(type, name, label, value, onChange, style, selectOptions, id) {
    console.log(value);
    const ExampleCustomInput = ({ value, onClick }) => {
        debugger;
        console.log(style)
        console.log(value);
        return <button className={`calender-btn-customized p-2 ${style.input}`} onClick={onClick} disabled={style.disabled} >
            {value === "" ? style.placeholder : value}<i className="fa fa-calendar-o ml-4 float-right mt-1 " aria-hidden="true" ></i>
        </button>
    }
    if ('select' === type.toLowerCase()) {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && CreateInputLabel(label, 'text-capitalize mb-1', style)}
            {/* Creatable and select Multiple */}
            {(style.selectCreatable && style.selectMultiple) &&
                <CreatableSelect id={id} name={name}
                    //value={selectOptions.filter(option => option.value === value)}
                    defaultValue={value}
                    // defaultInputValue={selectOptions.filter(option => option.value === value)}
                    options={selectOptions}
                    //className={`studio-select-custom ${style.input || ''}`}
                    isDisabled={style.disabled || false}
                    onChange={(selectedOption) => onChange(name, selectedOption ? selectedOption.map(option => option.value) : [])}
                    isMulti={true}
                    styles={style.customStyle || ""}
                    isClearable={style.clearable || false}
                />
            }
            {(style.selectCreatable && !style.selectMultiple) &&
                <CreatableSelect id={id} name={name}
                    // value={selectOptions.filter(option => option.value === value)}
                    defaultValue={value}
                    options={selectOptions}
                    //className={`studio-select-custom ${style.input || ''}`}
                    isDisabled={style.disabled || false}
                    onChange={(selectedOption) => onChange(name, selectedOption ? selectedOption.value : "")}
                    styles={style.customStyle || ""}
                    isMulti={false}
                    isClearable={style.clearable || false}

                />
            }


            {!style.selectCreatable &&
                <Select
                    id={id} name={name}
                    //value={value && selectOptions.filter(option => value.indexOf(option.value) >= 0)}
                    defaultValue={selectOptions.filter(option => option.value === value)}
                    options={selectOptions}
                    //className={`studio-select-custom ${style.input || ''}`}
                    isDisabled={style.disabled || false}
                    onChange={(selectedOption) => onChange(name, selectedOption ? selectedOption.value : "")}
                    isSearchable={style.selectSearchable || false}
                    isClearable={style.clearable || false}
                    styles={style.customStyle || ""}
                    isMulti={style.selectMultiple || false}
                />

            }
        </div>
    } else if ('date' === type.toLowerCase()) {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && CreateInputLabel(label, 'text-capitalize mb-1', style)}
            {
                <DatePicker
                    selected={value}
                    onChange={(date) => onChange(name, date)}
                    // className='font-weight-bold'
                    dateFormat={style.dateFormat}
                    showTimeSelect={style.showTimeselect}
                    customInput={<ExampleCustomInput />}
                //placeholderText={style.placeholder}
                //isClearable={style.clearable} //
                // disabled={style.isDisabled}
                >

                </DatePicker>
            }
        </div>
    }

}
