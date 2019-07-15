import React from 'react';
import ReactDOM from 'react-dom';

export default class Registration_2 extends React.Component {
    constructor() {
        super();

        this.state = {
            value_password: '',
            value_email: '',
            value_password_again: '',
            disabled_but: '{true}',
            styleinput: '',
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
        // console.log(this.state.value_password.trim())
        // console.log(this.state.value_password_again.trim())
    }

    // console.log(this.state.value_password)
    //     console.log(this.state.value_password_again)
    //     if(this.state.value_password == this.state.value_password_again){
    //         this.setState({styleinput : '3px solid green'})
    //         this.setState({disabled_but: '{true}'})
    //     }else{
    //         this.setState({styleinput : '3px solid red'})
    //     }

    onButtonClick(event) {
        if (this.state.value_password == this.state.value_password_again) {
            this.setState({ styleinput: '3px solid green' })
            this.props.update2(this.state.value_email, this.state.value_password);
             this.props.serverPush();
             this.props.nextStep()
        } else {
            this.setState({ styleinput: '3px solid red' })

        }
    }
        render() {
            return (

                <form>
                    <div>Email address<br /><input type='email' id='email' className='inputform' value={this.state.value_email} onChange={this.handleChangeEmail} required></input></div>
                    <div>Password<br /><input type='password' value={this.state.value_password} id='password' className='inputform' required onChange={this.handleChangePassword}></input></div>
                    <div>Type password again <br /><input type='password' value={this.state.value_password_again} style={{bordeBottom: this.state.styleinput }} className='inputform' onChange={this.handleChangePasswordAgain} required></input></div>
                    <button onClick={this.onButtonClick}  > Sign Up </button>
                </form>
            )

        }

    }