import React from 'react';
import ReactDOM from 'react-dom';

export default class CakeDecorating extends React.Component {
    constructor() {
        super();

        this.state = {
            img1: ''
        }

         this.ChangeImg1 = this.ChangeImg1.bind(this);
    }

    ChangeImg1(){
        this.setState({img1:  event.target.value})
    }
    render() {
        return (
            <div>
                <input type='text' value = {this.state.img1} onChange= {this.ChangeImg1}></input>
                <button onClick ={() => this.props.StepCakeDecorating(this.state.img1)}>Добавить</button>
            </div>
        )

    }
}
