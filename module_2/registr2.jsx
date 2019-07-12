import React from 'react';
import ReactDOM from 'react-dom';

export default class Registr_2 extends React.Component {
    constructor() {
        super();

        this.state = {
            value_password: '',
            value_email: '',
            value_password_again: '',
            disabled_but: 'false',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordAgain = this.handleChangePasswordAgain.bind(this);

    }

    handleChangeEmail(event) {
        this.setState({ value_email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ value_password: event.target.value })
    }
    handleChangePasswordAgain(event) {
        this.setState({ value_password_again: event.target.value })
        if(this.state.value_password == this.state.value_password_again){
            console.log('yes')
        }
    }

    onButtonClick(event) {

        fetch(`https://authserver.worldthirteen.now.sh/register`, {
            method: 'POST',
            headers: {
                name: "",
                username: " ",
                email: this.state.value_email,
                password: this.state.value_password,
                country: '',
                age: '',

            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

            event.preventDefault();
    }
    render() {
        return (

            <form>
                <div>Email address<br/><input type='email' id='email' className='inputform' value={this.state.value_email}  onChange={this.handleChangeEmail} required></input></div>
                <div>Password<br/><input type='password' value={this.state.value_password} id='password' className='inputform'  required onChange={this.handleChangePassword}></input></div>
                <div>Type password again <br/><input type='password' value={this.state.value_password_again} className='inputform' onChange={this.handleChangePasswordAgain} required></input></div>
                <button onClick={this.onButtonClick.bind(this)} > Sign Up </button>
            </form>
        )

    }

}