import React from 'react';
import ReactDOM from 'react-dom';


export default class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value_password: '',
            value_email: '',
            value: '',
            stylediv: 'none',
        }
         this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onButtonClick  = this.onButtonClick.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    onButtonClick(){
        if(this.state.value_email !== 'react@snowball.alevel.com' || this.state.value_password !== 'YouSimplyTheBest2019'){
            this.setState({stylediv: 'block'})
        }else{console.log('Yes')}
            }
            handleChangeEmail(event) {
                this.setState({value_email: event.target.value});
              }
              handleChangePassword(event){
                  this.setState({value_password: event.target.value})
              }
        render(){
            return(
               
                <form>
                <input type = 'email' id = 'email' className= 'inputform' value={this.state.value_email}  placeholder = 'Email address' onChange={this.handleChangeEmail}></input>
                <input type = 'password' value={this.state.value_password}  id = 'password' className= 'inputform'  placeholder = 'Password' required onChange={this.handleChangePassword}></input>
                <div style = {{display: this.state.stylediv}} id = 'stylediv'>Неверный email/password</div>
                <p className='botton_text'> <a href= '#'>Forgot your password?</a></p>
                <button onClick = {this.onButtonClick.bind(this)}> Log In </button>
            </form>
                
            )
        
    }
}

window.render = function render(){
    ReactDOM.render((
        <div className = 'div'>
            <h1>YOUR ART MUSEUM</h1>
            <p>151 3rd St<br/> San Francisco, CA 94103</p>
           <Form/>
           <p className= 'have_account'><a>Don’t have an account? </a></p>
        </div>
    ), document.getElementById('root'));
    }

    render()