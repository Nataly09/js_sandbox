import React from 'react';
import ReactDOM from 'react-dom';

export default class CakeDecorating extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style = {{background: 'purple', width: '100px', height: '200px'}}/>
        )

    }
}