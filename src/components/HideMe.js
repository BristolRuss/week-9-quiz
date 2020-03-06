import React, { Component} from 'react';

class HideMe extends Component {
    constructor(){
        super();
        this.state = {
            visible: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            visible: false
        })
    }

    render() {
        let children = this.props.children;
        let visible = this.state.visible;
        return (
            <>
                <h1>Question 4</h1>
                {visible === true ? <p onClick={this.handleClick}>{children}</p> : null}
            </>
        )
    }
}

export default HideMe;