
import './App.css'
import React from 'react'
import Homepage from './Component/Homepage'
import { useState } from 'react'
import {nanoid} from 'nanoid';

const mockEmployees = [
    {
        id: 0,
        name: "mock",
        lastname: 'mocklastname',
        position: "Manager"
    },
    {
        id: 1,
        name: "employee 1",
        lastname: "em",
        position: "Engineer"
    },
    {
        id: 2,
        name: "employee 2",
        lastname: "lord",
        position: "Designer"
    },
]

const App = () => {
    const [employee, setEmployee] = useState(mockEmployees);
    const [sector, setSector] = useState({
        name: '',
        lastname: '',
        position: ''
    });

    const handleAddfromchange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newSector = {...sector};
        newSector[fieldName] = fieldValue;

        setSector(newSector);
    };

    const handleAddfromSubmit = (event) => {
        event.preventDefault();

        const newEmployee = {
            id: nanoid(),
            name: sector.name,
            lastname: sector.lastname,
            position: sector.position
        };

        const newEmployees = [...employee, newEmployee];
        setEmployee(newEmployees);
    };

    const handleDeleteClick = () => {
        const newEmployees = [...employee];

    }

    return (
        <>
        <Homepage/>
        </>
    )
}

export default App
