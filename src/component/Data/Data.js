import React from 'react';
import './Data.css';
const Data = (props) => {
    const {name,sallary} = props.counts;
    return (
        <div>
            <p>Name: {name} and Salary: ${sallary}</p>
        </div>
    );
};

export default Data;