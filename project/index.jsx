import React from 'react';
import ReactDOM from 'react-dom';
import Tiers from './tiers';
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            show_page: 'tiers',
            width_tiers1: '40',
            height_tiers1: '10',
            width_tiers2: '0',
            height_tiers2: '0',
            width_tiers3: '0',
            height_tiers3: '0',
            color_cake: '#520599',
            class: '',
            img1: '',
            img1_left: '',
            img1_top: '',
        }
        // this.onClick = this.MouseCklic.bind(this)
    }

    StepTiers(value1, value2, value3, value4, value5, value6) {
        if(+value1 < 46  && +value1 > -1 && +value3 < 46  && +value3 > -1 && +value5 < 46  && +value5 > -1 && +value2 < 70  && +value2 > -1 && +value4 < 70  && +value4 > -1 && +value6 < 70  && +value6 > -1 ){
        this.setState({
            width_tiers1: value1,
            height_tiers1: value2,
            width_tiers2: value3,
            height_tiers2: value4,
            width_tiers3: value5,
            height_tiers3: value6
        })
    }
    }

        StepFrostCake(value1, value2){
            this.setState({
                color_cake: value1,
                class: value2,
            })
            
        }
    
        StepCakeDecorating(value1){
            console.log(value1)
            this.setState({img1: value1})
        }

        // MouseCklic(event){
        //     console.log(event.clientX)
        //     this.setState({img1_left: event.clientX, 
        //     img1_top: event.clientY})
        // }

    Page(props) {

        if (props.step === 'tiers') {
            return <Tiers StepTiers={props.handler} />
        } else if (props.step === 'frost_cake') {
            return <FrostCake StepFrostCake = {props.handler1}></FrostCake>
        } else if (props.step === 'cake_decorating') {
            return <CakeDecorating StepCakeDecorating = {props.handler2} />
        }
    }

    

    render() {
        return (
            <div>
                <div id='home'>
                    <div id="cake" onClick={(event) => console.log(event.target)}>
                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers3}vh`, height: `${this.state.height_tiers3}vh`, background: this.state.color_cake }}></div>

                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers2}vh`, height: `${this.state.height_tiers2}vh`, background: this.state.color_cake }}></div>

                    <div className = {this.state.class} style={{ width: `${this.state.width_tiers1}vh`, height: `${this.state.height_tiers1}vh`, background: this.state.color_cake }}></div>
                <div style={{left: `${this.state.img1_left}px`, top: `${this.state.top}px`, position: 'relative'}}><img src= {this.state.img1} ></img></div>
                </div>
                </div>
                <button onClick={() => this.setState({ show_page: 'tiers' })}>Ярусы</button>
                <button onClick={() => this.setState({ show_page: 'frost_cake' })}>Покрытие торта</button>
                <button onClick={() => this.setState({ show_page: 'cake_decorating' })}>              Украшение торта</button>
                <this.Page step={this.state.show_page} handler={(this.StepTiers.bind(this))} handler1={(this.StepFrostCake.bind(this))} handler2 = {this.StepCakeDecorating.bind(this)} ></this.Page>

            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));

