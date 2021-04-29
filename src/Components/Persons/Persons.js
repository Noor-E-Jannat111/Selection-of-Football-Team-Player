import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data/data.json';
import { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';



const Persons = () => {
    const [person, setperson] = useState([]);
    const [cart, setcart] = useState([]);

    const handleCart = product => {
        const newAdded = ([...cart, product]);
        setcart(newAdded);
    }

    useEffect(() => {
        setperson(data);
    }, []);
    return (
        <React.Fragment>
            <div className='w-75 d-flex flex-wrap justify-content-around align-item-center'>
                {
                    person.map(p => <Person key={p.id} handleCart={handleCart} person={p}></Person>)
                }
            </div>
            <Cart person={cart}></Cart>
        </React.Fragment>
    );
};

export default Persons;