import React, { useState } from 'react';
import Button from '../Layout/Button';
import Form from '../Layout/Form';


const AddUser = ({ addNewUserHandler, close }) => {

    const [inputName, setinputName] = useState('');
    const [inputAge, setinputAge] = useState('');
    const [inputAddress, setinputAddress] = useState('');
    const [inputPhone, setinputPhone] = useState('');
    const [inputType, setinputType] = useState('');

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        addNewUserHandler({
            id: Math.floor(Math.random() * 100),
            name: inputName,
            age: inputAge,
            adress: inputAddress,
            phone: inputPhone,
            type: inputType,
        });
        setinputName('');
        setinputAge('');
        setinputAddress('');
        setinputPhone('');
        setinputType('');
        close();
    }

    const inputNameHandler = (evt) => {
        setinputName(evt.target.value);
    }

    const inputAgeHandler = (evt) => {
        setinputAge(evt.target.value);
    }

  return (
    <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder="Enter name" value={inputName} onChange={inputNameHandler} />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
            <input type="text" id='age' placeholder="Enter age" value={inputAge} onChange={inputAgeHandler} />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input type="text" id='address' placeholder="Enter address" value={inputAddress} onChange={(evt) => setinputAddress(evt.target.value)} />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type="text" id='phone' placeholder="Enter phone" value={inputPhone} onChange={(evt) => { return setinputPhone(evt.target.value)}} />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input type="text" id='type' placeholder="Enter type" value={inputType} onChange={(evt) => { return setinputType(evt.target.value)}} />
        </Form.Controller>
        <div>
            <Button type='submit'>Save</Button>
            <Button type='reset'>Reset</Button>
        </div>
    </Form>
  )
}

export default AddUser