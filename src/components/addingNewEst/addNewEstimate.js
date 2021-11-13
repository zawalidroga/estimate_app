import React, { useState } from 'react';
import AddEstTitle from './addEstTitle'

const NewEstimate = (props) => {
    
    const [estTitle, setEstTitle] = useState();

    const letsAddNewEstimate = (inputValue) => {
             props.addNew(inputValue);
             setEstTitle(estTitle => null)
         
    }

    const appendEstimateInput = () => {
            setEstTitle(estTitle => <AddEstTitle letsAdd = {letsAddNewEstimate}/>)
        
    }

    return(
        <div>
            <button onClick = {appendEstimateInput}> + </button>
            {estTitle}
        </div>
    )
}

export default NewEstimate; 