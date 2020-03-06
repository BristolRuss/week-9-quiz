import React, { Component } from 'react';

class MinimumLength extends Component {
    constructor(){
        super();
        this.state = {
            input: ""
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        this.setState({
            input: e.currentTarget.value
        })
    }

    render() {
        let message = this.state.input.length < this.props.length ? "Too short!" : "Bingo!";

        return (
            <>
                <h1>Question 5</h1>
                <input onInput={this.handleInput}></input>
                <p>{message}</p>
                {message === "Bingo!" ? <img src="https://thumbs.gfycat.com/ImpartialGoldenCattle-size_restricted.gif" alt="Christoph Waltz saying bingo"/>: null}
            </>
        )
    }
}

export default MinimumLength;