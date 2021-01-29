import React from "react";
import formControl from "./FormControl.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={formControl.formControl + " " + (hasError ? formControl.error : "")}>
            <div className={formControl.formInput}>
                {props.children}
                <label>{props.placeholder}</label>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}