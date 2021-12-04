import React from 'react';
import stls from './MySelect.module.css';

const MySelect = ({ defaultOption, options, value, onChange }) => {
    return (
        <select
            className={stls.mySelect}
            value={value}
            onChange={e => onChange(e.target.value)}>
            <option disabled value={defaultOption}>{defaultOption}</option>
            {options.map((option) =>
                <option
                    value={option.value}
                    key={option.value}>{option.name}</option>)}
        </select>
    );
}

export default MySelect;
