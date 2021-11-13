import React from 'react';
import NewEstimate from './addNewEstimate';
import EstimateDetailed from './estimate-detailed';

class Estimate extends React.Component {
    state = {
        numEstimate: 0,
        estimates: [],
        titleTest: 'titleTest'
    
    }

    addChild = () => {

        this.state.estimates.push(<EstimateDetailed title = {this.state.titleTest} key = {this.state.numEstimate} />)        
        
        this.setState( (state) => ({
            numEstimate: (state.numEstimate + 1)
        }))
    }
    render() {   
        return(
        <div className = 'container'>
            <EstimateDetailed />
            {this.state.estimateTest}
            {this.state.estimates.map((estimate)=> {return estimate})}
            <NewEstimate addNew = {this.addChild}/>
        </div>
        )}
};
export default Estimate;