import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddedEmployee from '../AddedEmployee/AddedEmployee';

const Cart = (props) => {
    const person = props.person;
    const totalSalary = person.reduce((total, newAdded) => total + Math.round(newAdded.salary), 0);
    return (
        <div className='w-25'>
            <h5>Employee added: {person.length}</h5>
            <h6>Total salary: $ {totalSalary} / hour</h6>
            {
                person.map((employee) => <AddedEmployee key={employee.id} employee={employee}></AddedEmployee>)
            }
        </div>
    );
};

export default Cart;