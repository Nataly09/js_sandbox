import React from 'react';
import ReactDOM from 'react-dom';

export default class Registration_1 extends React.Component {
    constructor() {
        super();

        this.state = {
            value_name: '',
            value_username: '',
            value_country: '',
            value_age: '',
            styleinput: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.ClickButton = this.ClickButton.bind(this);

    }
    handleChangeName(event) {
        this.setState({ value_name: event.target.value });
    }
    handleChangeUserName(event) {
        this.setState({ value_username: event.target.value });
    }
    handleChangeAge(event) {
        this.setState({ value_age: event.target.value });
    }
    handleChangeCountry(event) {
        this.setState({ value_country: event.target.value });
    }

    ClickButton(event) {
        fetch(`https://authserver.worldthirteen.now.sh/check_username?username=${ this.state.value_username}`, {
            method: 'GET',
  
        })
            .then((res) => {
                if(res.statusText === "OK"){
                    this.setState({styleinput: '1px solid green'})
                }else{
                     this.setState({styleinput: '1px solid red'})
                }
            })
           

            event.preventDefault();
    }
    render() {
        return (
            <form>
                <div>Name <br /><input type='text' value={this.state.value_name} required minLength='2' onChange={this.handleChangeName}></input></div>
                <div>Username<br /><input type='text' value={this.state.value_username} required minLength='2' onChange={this.handleChangeUserName} style = {{border: this.state.styleinput}}></input></div>
                <div>Country<br /><input type='text' value={this.state.value_country} onChange = {this.handleChangeCountry}></input></div>
                <div>Age<br /><input type='text' value={this.state.value_age} onChange = {this.handleChangeAge}></input></div>
                <button onClick={this.ClickButton}>Next step</button>
                <div>Already have an account? <a href = '#'>Login</a></div>
            </form>
        )

    }
}
