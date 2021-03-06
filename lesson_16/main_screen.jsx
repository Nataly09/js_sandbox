import React from 'react';
import ReactDOM from 'react-dom';

export default class Main_screen extends  React.Component{
    constructor(){
        super();

        this.state = {

        }
        
        this.onButtonClick  = this.onButtonClick.bind(this);
    }

    onButtonClick(event){
        this.props.nextStep();
        event.preventDefault();
    }

    render(){
        return(
            <div >
                <div id = 'Ellipse1'></div>
                <div id = 'Ellipse2'></div>
                <div id = 'Ellipse3'></div>
                <div id='title'>Read Books</div>
                <div id='text'> Create your account to get started. After that, you can share books and make friends.</div>
                <button id = 'button_first' onClick={this.onButtonClick} ></button>
                <div id = 'Ellipse4'></div>
            </div>
        )
    }
}