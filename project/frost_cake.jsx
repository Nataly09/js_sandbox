import React from 'react';
import ReactDOM from 'react-dom';


export default class FrostCake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#520599',
        }
        this.ChangeColor = this.ChangeColor.bind(this);
    }
    ChangeColor() {
        this.setState({ color: event.target.value })
    }

    render() {
        return (
            <div>
                <div>Выберите цвет <input type='color' value={this.state.color} onChange={this.ChangeColor}></input></div>
                <div>
                    <p><label id ="cream"><input type="radio" name="cake" id="cream"></input>Крем</label></p>
                    <p><label id ="fondant"><input type="radio" name="cake" id="fondant"></input>Мастика</label></p>
                    <p><label id ="icing"><input type="radio" name="cake" id="icing"></input>Зеркальная глазурь</label></p>
                    <p><label id ="velour"><input type="radio" name="cake" id="velour"></input>Велюр</label></p>
                </div>
                <button onClick={() => this.props.StepFrostCake(this.state.color)}>Ок</button>
            </div>
        )
    }

}