import React from 'react'
import { connect } from 'react-redux';
import { getPlantNames } from '../actions';
import { useState } from 'react';

const PlantForm = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getPlantNames(searchTerm);
    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        // the value needs to be stored so that it can be plugged into the action (getPlantNames is the action upon submission) - this gives a good opportunity to use useState because this slice of state (searchTerm) only needs to be used inside of this component.
        setSearchTerm(e.target.value)
    }
    // console.log('state:', searchTerm)
    
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' />
            <button>Search</button>
        </form>
    )
}

export default connect(null, { getPlantNames })(PlantForm);
// nothing from state needs to be passed here