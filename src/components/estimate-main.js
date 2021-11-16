import React from 'react';
import NewEstimate from './addingNewEst/addNewEstimate';
import EstimateDetailed from './estimate-detailed';
import AddEstTitle from './addingNewEst/addEstTitle';

class Estimate extends React.Component {
    state = {
        numEstimate: 0,
        estimates: [],
        titleTest: 'titleTest',
        estInput: null,
        inputValue: null
    }



    addChild = ( ) => {
        console.log('myk')
        this.state.estimates.push(<EstimateDetailed title = {this.inputValue} key = {this.state.numEstimate} />)        
        
        this.setState( (state) => ({
            numEstimate: (state.numEstimate + 1),
        }))

        this.setState( () => ({
            estInput: <AddEstTitle letsAdd = {this.letsAddNewEstimate}/>
        }))
        console.log(this.inputValue)
    }


    letsAddNewEstimate = (e) => {
        this.setState(() => ({
            inputValue: e,
            estInput: null
        }))
        console.log(this.inputValue)
    
}
    
    render() {   
        return(
        <div className = 'container'>
            <EstimateDetailed />
            {this.state.estimates.map((estimate)=> {return estimate})}
            {this.state.estInput}
            <NewEstimate addNew = {this.addChild} />
        </div>
        )}
};
export default Estimate;