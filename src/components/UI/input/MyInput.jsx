import React from 'react';
import stls from './MyInput.module.css';

const MyInput = ({...props}) => {
    return (
        <input className={stls.myInput} {...props} />
    );
}

export default MyInput;
