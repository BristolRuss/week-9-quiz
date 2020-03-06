import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Footer extends Component{
    constructor(){
        super();
        this.state = {
        };
    }


    render(){  
        return (
            <>
                <DropdownButton id="dropdown-basic-button" title="Select a question">
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/multiplier">Multiplier</Dropdown.Item>
                    <Dropdown.Item href="/even-clicks">Even Clicks</Dropdown.Item>
                    <Dropdown.Item href="/count-by">Count By</Dropdown.Item>
                    <Dropdown.Item href="/hide-me">Hide Me</Dropdown.Item>
                    <Dropdown.Item href="/minimum-length">Minimum Length</Dropdown.Item>
                </DropdownButton>
            </>
        );
    }
}

export default Footer;