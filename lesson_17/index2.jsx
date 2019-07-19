import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Form from './login'


class SingUp extends React.Component{
    constructor(props){
        super(props);
        this.OnClick = this.OnClick.bind(this);
    }

    OnClick(){
        this.props.history.push('/login')
    }
    render(){
        return(
            <div>
            <h1>Sorry...</h1>
            <button onClick={this.OnClick.bind(this)}>Back to login</button>
        </div> 
        )
    }
}



ReactDOM.render((
    
    <Router>
     
        <Switch>
        <Route path='/login' component = {Form}/>
        <Route path='/singup' component = {SingUp}/>
        <Redirect from='/' to='/login'/>
        </Switch>
    </Router>
), document.getElementById('root'));