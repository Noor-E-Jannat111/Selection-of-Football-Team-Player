import React from 'react';
import './AddedEmployee.css';

const AddedEmployee = (props) => {
    const employee = props.employee;
    const {
        name,
        img,
        email
    } = employee;
    return ( <
        div className = 'my-2 p-2 shadow text-center cart-item bg-info text-white rounded' >
        <
        img className = 'img-cart'
        src = {
            img
        }
        alt = "" / >
        <
        div className = 'py-2' >
        <
        p > {
            name
        } < /p> <
        p > {
            email
        } < /p> <
        /div> <
        /div>
    );
};

export default AddedEmployee;