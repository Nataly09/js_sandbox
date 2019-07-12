import React from 'react';
import ReactDOM from 'react-dom';
import Registration_1 from "./registration1";
import First_step from './first_step';
import Registr_2 from './registr2';

export default class X extends React.Component{
    constructor(){
        super();
    }
  
        render(){
            return(
                
                <div></div>
                
            )
        
    }
}


window.render = function render(){
    ReactDOM.render((
        <div>
            <First_step></First_step>
         <Registration_1></Registration_1>
         <Registr_2></Registr_2>
        </div>
    ), document.getElementById('root'));
    }

    render();