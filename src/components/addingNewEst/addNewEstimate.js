import React from 'react';
import { Wrapper } from '../styled/newButton.styled'

const NewEstimate = (props) => {
   

    return(
        <Wrapper>
            <button onClick = {props.addNew} className = ""> + </button>
            
        </Wrapper>
    )
}

export default NewEstimate; 

