import React, { Component } from 'react';

class EvenClicks extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter;
        this.setState({
            counter: counter + 1
        })
    }

    render() {
        let counter = this.state.counter;
        return (
            <>
                <h1>Question 2</h1>
                <p onClick={this.handleClick}>{counter % 2 ===0 ? "Even" : "Odd"}</p>
            </>
        )
    }
}

export default EvenClicks;