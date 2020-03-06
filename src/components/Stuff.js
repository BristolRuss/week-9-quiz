import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Multiplier from './Multiplier'
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import HideMe from './HideMe';
import MinimumLength from './MinimumLength';
import FourOhFour from './FourOhFour';
import Footer from './Footer';

const Stuff = () => (
    <Router>
        <Switch>
            <Route exact path = '/'>
                <p>Please select a question using the dropdown</p>
            </Route>
            <Route exact path = '/multiplier'>
                <Multiplier x={ 5 } y={ 7 }/>
            </Route>
            <Route path = '/multiplier/:x/:y' render = { ({match}) => (
                <Multiplier x = {match.params.x} y = {match.params.y}/>
            ) } />
            <Route exact path = "/even-clicks" component = {EvenClicks} />
            <Route exact path = '/count-by/' >
                <CountBy step = {5} />
            </Route>
            <Route path = '/count-by/:step' render = { ({match}) => (
                <CountBy step = {match.params.step} />
            ) } />
            <Route exact path='/hide-me'>
                <HideMe>blah blah blah</HideMe>
            </Route>
            <Route exact path = '/minimum-length'>
                <MinimumLength length={30} />
            </Route>
            <Route path = '/minimum-length/:length' render = { ({match}) => (
                <MinimumLength length = {match.params.length} />
            ) } />
            <p>test</p>
            <Route component = {FourOhFour} />
        </Switch>
        <Footer />
    </Router>
);

export default Stuff;