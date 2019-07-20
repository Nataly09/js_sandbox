import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Tiers from './tiers';
import Emitter from "./Emitter";
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            show_page: 'tiers',
            width_tiers1: '200',
            height_tiers1: '50',
            width_tiers2: '0',
            height_tiers2: '0',
            width_tiers3: '0',
            height_tiers3: '0',
            color_cake: '#520599',
            class: ''
        }

    }

    StepTiers(value1, value2, value3, value4, value5, value6) {
        this.setState({
            width_tiers1: value1,
            height_tiers1: value2,
            width_tiers2: value3,
            height_tiers2: value4,
            width_tiers3: value5,
            height_tiers3: value6
        })
    }

        StepFrostCake(value1, value2){
            this.setState({
                color_cake: value1,
            })
        }
    
    Page(props) {

        if (props.step === 'tiers') {
            return <Tiers StepTiers={props.handler} />
        } else if (props.step === 'frost_cake') {
            return <FrostCake StepFrostCake = {props.handler1}></FrostCake>
        } else if (props.step === 'cake_decorating') {
            return <CakeDecorating />
        }
    }

    

    render() {
        return (
            <div>
                <div id='home'>
                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers3}px`, height: `${this.state.height_tiers3}px`, background: this.state.color_cake }}></div>

                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers2}px`, height: `${this.state.height_tiers2}px`, background: this.state.color_cake }}></div>

                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers1}px`, height: `${this.state.height_tiers1}px`, background: this.state.color_cake }}></div>

                </div>
                <button onClick={() => this.setState({ show_page: 'tiers' })}>Ярусы</button>
                <button onClick={() => this.setState({ show_page: 'frost_cake' })}>Покрытие торта</button>
                <button onClick={() => this.setState({ show_page: 'cake_decorating' })}>              Украшение торта</button>
                <this.Page step={this.state.show_page} handler={(this.StepTiers.bind(this))} handler1={(this.StepFrostCake.bind(this))} ></this.Page>

            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));

