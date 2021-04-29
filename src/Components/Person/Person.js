import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Person.css';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faPlusCircle,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const {
        img,
        name,
        job,
        salary,
        email
    } = props.person;

    console.log()

    const wraperFunction = (e) => {
        //e.target.classList.toggle = 'd-none';
    }

    return ( <
        div className = 'shadow person m-2 px-3 py-2 rounded' >
        <
        div className = "d-flex" >
        <
        img className = 'img align-self-center'
        src = {
            img
        }
        alt = "" / >
        <
        div className = 'py-2 px-3' >
        <
        h5 > {
            name
        } < /h5> <
        h6 > {
            email
        } < /h6> <
        p > < b > Job: < /b> {job}</p >
        <
        p > < b > Salary: < /b> $ {salary}/
        hour < /p> <
        button onClick = {
            (e) => {
                props.handleCart(props.person);
                wraperFunction(e);
            }
        }
        className = {
            `btn btn-primary btn-sm px-4 btn-add`
        } > < FontAwesomeIcon icon = {
            faPlusCircle
        }
        />
        Add <
        /button> <
        button onClick = {
            () => {
                props.handleCart(props.person);
                wraperFunction();
            }
        }
        className = "btn btn-danger btn-sm px-4 btn-remove d-none" > < FontAwesomeIcon icon = {
            faTrashAlt
        }
        /> Remove</button >
        <
        /div> < /
        div > <
        /div >
    );
};

export default Person;