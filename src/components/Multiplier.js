import React, { Component } from 'react';

class Multiplier extends Component {
    constructor(){
        super();
        this.state = {
        };
    }

    render() {
        let {x, y} = this.props;
        let answer = x * y;

        return (
            <>
                <h1>Question 1</h1>
                <p>{x} multiplied by {y} is {answer}</p> 
            </>
        )
    }
}

export default Multiplier;