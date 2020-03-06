import React, { Component } from 'react';

class CountBy extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter;
        let step = this.props.step;
        this.setState({
            counter: counter + +step
        })
    }

    render() {
        let counter = this.state.counter;
        return (
            <>
                <h1>Question 3</h1>
                <p onClick={this.handleClick}>{counter}</p>
            </>
        )
    }
}

export default CountBy;