import React from 'react';
import ReactDOM from 'react-dom';






export default class WraplnEmoji extends React.Component{
    constructor(){
        super();
    }
  
        render(){
            return(
                <div>
                    <span>{String.fromCharCode('&#128524')}</span>
                     <span>{this.props.children}</span>
                     <span>{String.fromCharCode('&#128524')}</span>
                </div>
                
                
            )
        
    }
}