import React, { useState } from 'react'
import {setInstructor} from '../actions/BackgroundActions' 
import {connect} from 'react-redux';

const Dropdown2 = ({instructorSelected, setInstructor}) => {

   // const [selected, setSelected] = useState("All");

    let handleSelectionChange = (e) => {
       //setSelected(e.target.value);
       setInstructor(e.target.value)
    }

    return (
        <div>
            <select value={instructorSelected} onChange={handleSelectionChange}>
                <option value="All">All</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
            </select>
            <h1>{instructorSelected}</h1>
        </div>
    )
}

export default connect(

    (state)=>({instructorSelected: state.BackgroundReducer.cur_instructor}),
    (dispatch)=>({
        setInstructor: instructor => dispatch(setInstructor(instructor))
    })
)(Dropdown2);