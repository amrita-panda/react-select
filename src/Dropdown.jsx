import React from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import DatePicker from "react-datepicker";
import './Dropdown.css';
import Switch from "react-switch";

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
    const ExampleCustomInput = ({ value, onClick }) => {
        return <button className={`calender-btn-customized p-1 ${style.input}`} onClick={onClick} disabled={style.disabled} >
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
    }  else if ('switch' === type.toLowerCase()) {
        let switchWidth = style.switchWidth || style.switchHeight || 28;

        return <div className={`form-group studio ${style.container || ''}`}>
            {label && CreateInputLabel(label, 'text-capitalize p-0 mr-3 mb-0 w-auto', style)}
            <div className={`studio-switch ${style.input || ''}`} >
                <Switch className='react-switch'
                    id={id}
                    checked={value || false}
                    onChange={(checked) => onChange(name, checked)}
                    onColor="#0e90ff"
                    disabled={style.disabled || false}
                    height={style.switchHeight || 28}
                    width={(switchWidth * 2)}
                    handleDiameter={(style.switchHeight || 28) - 5}
                    checkedIcon={style.switchTextOn ? getSwitchIconText(style.switchTextOn) : false}
                    uncheckedIcon={style.switchTextOff ? getSwitchIconText(style.switchTextOff) : false}
                />
            </div>
        </div>
    }else {
        return <div className={`form-group studio ${style.container || ''}`}>
            {label && CreateInputLabel(label, 'text-capitalize mb-1', style)}
            <input id={id} type={type} name={name} value={'file' === type.toLowerCase() ? undefined : (value || '')}
                className={`form-control ${style.input || ''}`}
                placeholder={label ? undefined : style.placeholder}
                checked={style.checked}
                accept={style.accept}
                min={style.min} max={style.max} step={style.step}
                size={style.size} maxLength={style.maxLength} pattern={style.pattern}
                disabled={style.disabled} readOnly={style.readOnly} required={style.required}
                autoFocus={style.autoFocus} multiple={style.multiple}
                onChange={(e) => onChange(name, 'file' === type.toLowerCase() ? e.target.files : 'number' === type.toLowerCase() ? (e.target.value * 1) : e.target.value)} />
        </div>
    }

}

function getSwitchIconText(text) {
    return <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            color: "#fff",
            fontSize: '90%',
            textTransform: 'uppercase'
        }}
    >{text}</div>
}
