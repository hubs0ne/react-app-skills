import React from 'react';
import stls from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button className={stls.myBtn} {...props}>
            {children}
        </button>
    );
}

export default MyButton;
