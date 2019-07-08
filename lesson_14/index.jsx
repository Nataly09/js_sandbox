import React from 'react';
import ReactDOM from 'react-dom';
import WraplnEmoji from './WraplnEmoji'


window.render = function render(){

ReactDOM.render((
  
        <WraplnEmoji>
            Some Text
        </WraplnEmoji>
    
), document.getElementById('root'));
}

render();